import React, { Component } from "react";
import { connect } from "react-redux";

import { 
  getUsers, 
  deleteUser, 
} from "../store/actions/usersActions";

import {
  getPosts,
  deletePost,
} from "../store/actions/postsActions"

import {
  getComments,
  deleteComment,
} from "../store/actions/commentsActions"

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
  posts: state.posts,
  comments: state.comments
});

class Posts extends Component {  

  componentDidMount() {
    this.props.getUsers();
    this.props.getPosts();
  }
  
  render() {
    const { users } = this.props.users;
    const { posts } = this.props.posts;
    const { comments } = this.props.comments || {};
    
    console.log(this.props);

    return (
      <>
        {users &&
          users.map((u) => (
            <React.Fragment key={u.id}>
              <Flex 
                w={'full'}
                p={6}
                >
                <Flex
                  minW={'min-content'}
                  w={'35%'}
                  p={4}
                  bg="lightgrey"
                >
                  <Heading>{u.name}</Heading>
                  <Button onClick={() => this.props.deleteUser(u.id)}>
                    remove account
                  </Button>
                </Flex>
                <Box 
                  w={'65%'}
                >
                  {posts
                  .filter((p) => p.userId === u.id)
                  .map((up) => (
                    <>
                      <Flex
                        direction={"row"}
                        justify="space-between"
                        w={'full'}
                        py={1}
                        px={2}
                        bg="slategrey"
                      >
                        <Text color="snow">{up.title}</Text>
                        <Box>
                          <Button mx={1} onClick={() => this.props.deletePost(up.id)}>
                            delete
                          </Button>
                          <Button mx={1} onClick={() => this.props.getComments(up.id)}>
                            comment
                          </Button>
                        </Box>
                      </Flex>

                      {comments && 
                      comments
                        .filter((c) => c.postId === up.id)
                        .map((pc) => (
                          <Flex
                            direction={"column"}
                            w={'full'}
                            py={1}
                            px={2}
                            bg="slategrey"
                          >
                            <Text color="white">{pc.name}</Text>
                            <Text color="snow">{pc.body}</Text>
                            <Button onClick={() => this.props.deleteComment(pc.id)}>
                              remove comment
                            </Button>

                          </Flex>
                        ))}
                    </> 
                  ))}
                </Box>
              </Flex>
            </React.Fragment>
          ))}
      </>
    );
  }
}

export default connect(mapStateToProps, { getUsers, deleteUser, getPosts, deletePost, getComments, deleteComment })(Posts);
