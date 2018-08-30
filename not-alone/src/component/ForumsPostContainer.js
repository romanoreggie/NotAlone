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
    let forumsPostContainer = this
    firebase.database().ref('forum').once('value').then(function(snapshot) {
      console.log(snapshot.val());

      let posts = snapshot.val()
      if(typeof posts==="object") {

        let result = Object.keys(posts).map(function(key) {
            return [Number(key), posts[key]];
          });
        forumsPostContainer.setState({posts: result})
      } else {
        forumsPostContainer.setState({posts: posts})
      }
      console.log(posts);
    })
  }

  render() {
    let allPosts;
    let posts;

    if(this.state.posts) {
      console.log(this.state.posts);
      allPosts = this.state.posts.map((post , index) => {

        return(
          <div style={{ margin: '50px' }}>
                <p>{this.state.posts}</p>
                  <h1> {post.title}</h1>
                   <p> {post.body}</p>
              </div>
          )
        })
    }
        return(
          <div style={{ margin: '50px' }}>
            <p>{posts}</p>
            {/* {this.state.posts} */}
            <p>test</p>
          </div>
          )
          }
        }

export default ForumsPostContainer;
