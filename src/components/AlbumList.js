import React, { Component } from 'react'
import { connect } from "react-redux";

import { getUsers, deleteUser } from "../store/actions/usersActions";
import { getAlbums, deleteAlbum } from "../store/actions/albumsActions";
import { getPhotos, deletePhoto } from "../store/actions/photosActions";

import { 
	Button, 
	Box, 
	Flex, 
	Text,
	SimpleGrid,
	Image
} from "@chakra-ui/react";

import {
	Heading
} from "@chakra-ui/layout"


const mapStateToProps = (state) => ({
	users: state.users,
  albums: state.albums,
  photos: state.photos,
});

class AlbumList extends Component {

	constructor(props) {
    super(props);
    this.state = {
			selectedAlbums: 1
		};
  }

	componentDidMount() {
		this.props.getUsers();
		this.props.getAlbums();
		this.props.getPhotos();
	}

	render() {
			const { users } = this.props.users;
			const { albums } = this.props.albums;
			const { photos } = this.props.photos;

			console.log(this.props);

			return (
					<div>
						{/* album list */}
						<Heading size="md" pb="2vh" mt="" textAlign="start">Albums</Heading>
						<Flex
							w="full"
							h="35vh"
							bg="gold"
							mb="10"
							flexDir="row"
							overflowX="auto"
							overflowY="hidden"
						>
							{users && users.map((u) => (
								albums && albums.filter(a => a.userId === u.id).map((ua)=> (
									<React.Fragment key={ua.id}>
										<Flex flexDir="column" bg="grey" mr={2} onClick={()=>this.setState({selectedAlbums: ua.id})}>
											<Box w="150px" h="180px">
												<SimpleGrid h="full" columns={2} spacing={1}>
													{
														photos && photos.filter(p => p.albumId === ua.id).slice(0,4).map((uap) => 
														(
															<Image
																boxSize="75px"
																objectFit="cover"
																src={uap.thumbnailUrl}
																alt={u.name}
															/>			
														))
													}
												</SimpleGrid>
											</Box>
											<Text textAlign="start">
												<Text fontWeight="bold">{u.name}</Text>
												<Text>{ua.title}</Text>
											</Text>
										</Flex>
									</React.Fragment>
								))
							))}								
						</Flex>

						{/* photos of selected albums */}
						<Heading size="md" pb="2vh" textAlign="start">Photos of Album "{albums.find(a=>a.id===this.state.selectedAlbums).title}"</Heading>
						<Flex
							w="full"
							h="40vh"
							overflowY="auto"
							bg="salmon"
						>
							<Box w="full" h="full">
								<SimpleGrid h="full" columns={5} spacingX={16} spacingY={2}>
								{photos.filter(p=> p.albumId === this.state.selectedAlbums).map((sa)=> (							
										<Flex flexDir="column" h="200px" overflowX="hidden" overflowY="hidden">
											<Image
												boxSize="150px"
												objectFit="cover"
												src={sa.url}
												alt={sa.albumId}
											/>
											<Text textAlign="start">
												<Heading size="sm" fontWeight="semibold">tittle : </Heading>
												{sa.title}
											</Text>
										</Flex>
										))}
								</SimpleGrid>
							</Box>
						</Flex>
					</div>
			)
	}
}

export default connect(mapStateToProps, {
    getUsers,
    deleteUser,
		getAlbums,
		deleteAlbum,
		getPhotos,
		deletePhoto,
  })(AlbumList);
  