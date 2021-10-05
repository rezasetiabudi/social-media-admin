import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Link } from 'react-router-dom'

import { getUsers, deleteUser } from "../store/actions/usersActions";
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
    this.props.getPosts();
  }

  render() {
    const { posts } = this.props.posts;
    const { users } = this.props.users;

		
    console.log(this.props);

    return (
      <div>
        {posts &&
          posts.map((p) => (
            <React.Fragment key={p.id}>
              <Flex w={"full"} p={1} bg="salmon">
                <Flex
                  minW={"min-content"}
                  w="full"
                  p={2}
                  bg="lightgrey"
									flexDir="column"
									alignItems="start"
                >
									<Text fontSize="2xl" fontWeight="bold" mb={4}>{p.title}</Text>
									<Text fontSize="xl" fontWeight="bold" mb={2}>
										Author: {users.find(u=>u.id === p.userId).name}
									</Text>
									<Text fontSize="md" align="start">
										{p.body}
									</Text>
									<Box alignSelf="flex-end">
										<Button mx={1} size="sm" mt="24px">
											edit posts
										</Button>
										<Button mx={1} size="sm" mt="24px" onClick={() => this.props.deletePost(p.id)}>
											remove post
										</Button>
                  </Box>
                </Flex>
              </Flex>
            </React.Fragment>
          ))}
      </div>
    );
  }
}

export default connect(mapStateToProps, {
  getUsers,
  deleteUser,
	getPosts,
	deletePost
})(PostList);
