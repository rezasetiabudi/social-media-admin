import React, { Component } from "react";
import { connect } from "react-redux";

import { getUsers } from "../store/actions/usersActions";
import { getPosts } from "../store/actions/postsActions";
import { deletePost } from "../store/actions/postsActions";

import { 
  Button,
  Box,
  Flex
 } from "@chakra-ui/react";

import {
  Heading,
  Text
} from "@chakra-ui/layout"

const mapStateToProps = (state) => ({
  users: state.users,
  posts: state.posts
});

class Posts extends Component {  
  componentDidMount() {
    this.props.getUsers();
    this.props.getPosts();
  }

  render() {
    const { users } = this.props.users;
    const { posts } = this.props.posts;
    console.log(this.props);

    return (
      <>
        {users &&
          users.map((u) => (
            <React.Fragment key={u.id}>
              <Flex 
                w={'full'}
                m={6}
                >
                <Flex
                  minW={'min-content'}
                  w={'35%'}
                  p={4}
                  bg="lightgrey"
                >
                  <Heading>{u.name}</Heading>
                </Flex>
                <Box 
                  w='65%'
                  mr={12||2}
                >
                  {posts
                  .filter((p) => p.userId === u.id)
                  .map((up) => (
                    <Flex
                      direction="row"
                      justify="space-between"
                      w={'full'}
                      bg="aqua"
                    >
                      <Text>{up.title}</Text>
                      <Button onClick={() => this.props.deletePost(up.id)}>
                        delete
                      </Button>
                    </Flex>
                  ))}
                </Box>
              </Flex>
            </React.Fragment>
          ))}
      </>
    );
  }

  // handleDeletePost = (postId) => {
  //   let { posts } = this.props.posts;
  //   let idx = posts.findIndex((post) => post.id === postId);
  //   posts.splice(idx, 1);
  //   this.setState({
  //     posts: posts
  //   });
  // };
}

export default connect(mapStateToProps, { getUsers, getPosts, deletePost })(Posts);
