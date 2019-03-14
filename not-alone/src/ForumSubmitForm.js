import React, {Component} from 'react';
import * as firebase from 'firebase';
import {Header, Container} from 'semantic-ui-react';
import Footer from './Footer';

class ForumSubmitForm extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event){
    event.preventDefault()

    let body = document.getElementById("body").value
    let title = document.getElementById("title").value

    let newPostKey = firebase.database().ref().child('forum').push().key

    let updates = {};
    updates[newPostKey] = {title: title, body: body};

    firebase.database().ref('forum').update(updates)

    console.log(body + title);
  }


  render() {
    return (
          <div>
            <Container textAlign='center' style={{margin: '50px'}}>
              <form onSubmit={this.handleSubmit}>
              <Header as='h3'>Help Forum</Header>
                <div class="ui form">
                  <div class="field">
                    <label>Ask your questions below</label>
                    <textarea id="body" name="body" placeholder="Type your post here"></textarea>
                    <input id="title" name="title" placeholder="Enter the title of your post here"></input>
                  <div class="ui submit button" id="submit">Submit</div>
                  </div>
                </div>
              </form>
            </Container>
          {/* <Footer /> */}
        </div>

    );
  }
}

export default ForumSubmitForm;
