import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter } from 'react-router-dom'

import { getUsers, deleteUser } from "../store/actions/usersActions";

import { Button, Box, Flex } from "@chakra-ui/react";

import { Heading } from "@chakra-ui/layout";

const mapStateToProps = (state) => ({
  users: state.users,
  posts: state.posts,
  comments: state.comments,
});

class UserList extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    const { users } = this.props.users;

    console.log(this.props);

    return (
      <div>
        <BrowserRouter>
        {users &&
          users.map((u) => (
            <React.Fragment key={u.id}>
              <Flex w={"full"} p={1} bg="salmon">
                <Flex
                  minW={"min-content"}
                  w="full"
                  p={2}
                  bg="lightgrey"
                  justifyContent="space-between"
                >
                  <Heading>{u.name}</Heading>
                  <Box>
                    <Button mx={1}>
                      rename account
                    </Button>
                    <Button mx={1} onClick={() => this.props.deleteUser(u.id)}>
                      remove account
                    </Button>
                  </Box>
                </Flex>
              </Flex>
            </React.Fragment>
          ))}
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(mapStateToProps, {
  getUsers,
  deleteUser,
})(UserList);
