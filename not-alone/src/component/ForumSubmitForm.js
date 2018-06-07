import React, {Component} from 'react';
import * as firebase from 'firebase'

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
              <form style={{ margin: '50px' }}
                  onSubmit={this.handleSubmit}>
                 <label>Ask your questions below</label>
                  <textarea id="body" name="body"></textarea>
                  <input id="title" name="title"></input>
                <div class="ui submit button" id="submit">Submit</div>
            </form>
    );
  }
}

export default ForumSubmitForm;
