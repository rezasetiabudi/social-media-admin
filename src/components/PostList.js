import React, { Component } from "react";
import { connect } from "react-redux";

import { getUsers } from "../store/actions/usersActions";
import { getPosts, deletePost } from "../store/actions/postsActions";
import { getComments, deleteComment } from "../store/actions/commentsActions";

import { Button, Box, Flex, Text } from "@chakra-ui/react";

const mapStateToProps = (state) => ({
	users: state.users,
  posts: state.posts,
  comments: state.comments,
});

class PostList extends Component {
  componentDidMount() {
		this.props.getUsers();
    this.props.getPosts();
  }

  render() {
    const { posts } = this.props.posts;
    const { users } = this.props.users;
    const { comments } = this.props.comments || {};

    console.log(this.props);

    return (
      <div>
				{users &&
					users.map((u) => (
						posts && posts.filter(p => p.userId === u.id).map((up) => (
								<React.Fragment key={up.id}>
									<Flex w={"full"} p={1} flexDir={"column"}>
										<Flex
											minW={"min-content"}
											w="full"
											p={2}
											bg="lightgrey"
											flexDir="column"
											alignItems="start"
										>
											<Text fontSize="2xl" fontWeight="bold" mb={4}>{up.title}</Text>
											<Text fontSize="xl" fontWeight="bold" mb={2}>
												Author: {u.name}
											</Text>
											<Text fontSize="md" align="start">
												{up.body}
											</Text>
											<Box alignSelf="flex-end">
												<Button mx={1} size="sm" mt="24px" onClick={() => this.props.getComments(up.id)}>
													view comments
												</Button>
												<Button mx={1} size="sm" mt="24px">
													edit posts
												</Button>
												<Button mx={1} size="sm" mt="24px" onClick={() => this.props.deletePost(up.id)}>
													remove post
												</Button>
											</Box>
		
											{comments && comments.filter(c => c.postId === up.id).map((pc)=>(
												<Flex 
													w={'full'}
													m={1}
													ml={3}
													bg="slategrey"
													flexDir="column"
													alignItems="start"
												>									
													<Text fontSize="md" align="start">
														{pc.email} :
													</Text>
													<Text fontSize="md" align="start">
														{pc.body}
													</Text>
													<Box alignSelf="flex-end">
														<Button mx={1} size="sm" mt="24px">
															edit comment
														</Button>
														<Button mx={1} size="sm" mt="24px" onClick={() => this.props.deleteComment(pc.id)}>
															remove comment
														</Button>
													</Box>
												</Flex>
											))}
										</Flex>
									</Flex>
								</React.Fragment>
							))
					))
				}				
      </div>
    );
  }
}

export default connect(mapStateToProps, {
  getUsers,
	getPosts,
	deletePost,
	getComments,
	deleteComment
})(PostList);
