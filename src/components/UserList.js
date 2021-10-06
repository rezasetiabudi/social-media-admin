import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Link } from 'react-router-dom'

import { getUsers, deleteUser } from "../store/actions/usersActions";

import { Button, Box, Flex } from "@chakra-ui/react";

import { Heading } from "@chakra-ui/layout";

import FormComponent from "./FormComponent";

const mapStateToProps = (state) => ({
  users: state.users,
  posts: state.posts,
  comments: state.comments,
});

class UserList extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isEditShow: true,
    };
  }

  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    const { users } = this.props.users;
    console.log(this.props);

    return (
      <div>
        <BrowserRouter>
        <Route path="/formRename/:id" exact component={FormComponent} />
        {console.log("userlist page(render)", users)}
        {users &&
          users.map((u) => (
            <React.Fragment key={u.id}>
              <Flex w={"full"} p={1}>
                <Flex
                  minW={"min-content"}
                  w="full"
                  p={2}
                  bg="lightgrey"
                  justifyContent="space-between"
                >
                  <Heading>{u.name}</Heading>
                  <Box>
                    <Link to={`/formRename/${u.id}`}>
                      <Button mx={1}>
                        rename account
                      </Button>
                    </Link>
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
