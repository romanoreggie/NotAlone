import React, {Component} from 'react';
// import {Container} from 'semantic-ui-react'
import * as firebase from 'firebase';


class ForumsPostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {posts:[]}

  }

  // const initialState = {
  //   title = '',
  //   body = '',
  // };

  componentDidMount(){
    firebase.database().ref('forum').once('value').then(function(snapshot) {
      console.log(snapshot.val());

    let posts = snapshot.val()
    this.setState({posts: posts})
  })

  }

  render() {
    let allPosts = this.state.posts.map((post) => {

      return( <div style={{ margin: '50px' }}>
                  <h1> {post.title}</h1>
                   <p> {post.body}</p>
              </div>
            )
            })
        return(
          <div style={{ margin: '50px' }}>
            {allPosts}
          </div>
          )
          }
        }

export default ForumsPostContainer;
