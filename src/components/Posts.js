import React, { Component } from "react";
import { connect } from "react-redux";

import { getUsers } from "../store/actions/usersActions";
import { getPosts } from "../store/actions/postsActions";

// import { handleDeletePost } from "../service";
import { Button } from "@chakra-ui/react";

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
    // console.log(this.props);

    return (
      <>
        {users &&
          users.map((u) => (
            <React.Fragment key={u.id}>
              <h2>{u.name}</h2>
              {posts
                .filter((p) => p.userId === u.id)
                .map((up) => (
                  <>
                    <h6>{up.title}</h6>

                  </>
                ))}
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

export default connect(mapStateToProps, { getUsers, getPosts })(Posts);
