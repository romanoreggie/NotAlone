import React, {Component} from 'react';
import {Container} from 'semantic-ui-react'
import * as firebase from 'firebase';

class ForumsPostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {posts:[]}

  }
  componentDidMount(){
    let posts = snapshot.val()
    this.setState({posts: posts})

    firebase.database().ref('forum').once('value').then(function(snapshot) {
      console.log(snapshot.val());
    })
  }

  render() {
    let allPosts = this.state.posts.map((post) => {
      return (
                <allPosts
                      post={posts.body}
                      label={posts.title}
                      className="Title"
                    />
                  );
                })
              }
    return(
              <div className="posts-container">
                <p>{posts}</p>
              </div>
              );
            }

export default ForumsPostContainer;
