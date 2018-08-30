import React, {Component} from 'react';
import ForumsPostContainer from './ForumsPostContainer'
import ForumSubmitForm from './ForumSubmitForm'
import Footer from './Footer';

class AskItForum extends Component {
  constructor(props) {
    super(props);

  }
  // submitPost(event){
  //   event.preventDefault()
  //   console.log(event.currentTarget.value);
  // }
  render() {
    return (
      <div>
        <ForumSubmitForm />
        <ForumsPostContainer />
      <Footer />
      </div>
    );
  }
}


 // AskItForum = () =>
 //        <div>
 //          <Container textAlign='center' style={{margin: '50px'}}>
 //          <Header as='h1'>Ask It Forum</Header>
 //          <div class="ui form">
 //            <div class="field">
 //              <label>Ask your questions below</label>
 //              <textarea></textarea>
 //            <div class="ui submit button" id="submit">Submit</div>
 //          </div>
 //          </div>
 //          <h3>Post #1</h3>
 //          <p>Lorem ipsum dolor sit amet, tristique quia, quis sem neque porttitor. In posuere nunc pharetra nam id, mollis porttitor, neque viverra rutrum ullamcorper elit elit nullam, posuere felis mattis tortor ac. Neque massa ac id dui eros, scelerisque arcu platea massa molestie, erat justo tortor scelerisque sit neque leo, felis pede ut commodo. Amet semper diam consequat, suscipit condimentum rhoncus tellus wisi purus.</p>
 //          <h3>Post #2</h3>
 //          <p>Lorem ipsum dolor sit amet, tristique quia, quis sem neque porttitor. In posuere nunc pharetra nam id, mollis porttitor, neque viverra rutrum ullamcorper elit elit nullam, posuere felis mattis tortor ac. Neque massa ac id dui eros, scelerisque arcu platea massa molestie, erat justo tortor scelerisque sit neque leo, felis pede ut commodo. Amet semper diam consequat, suscipit condimentum rhoncus tellus wisi purus.</p>
 //          <h3>Post #3</h3>
 //          <p>Lorem ipsum dolor sit amet, tristique quia, quis sem neque porttitor. In posuere nunc pharetra nam id, mollis porttitor, neque viverra rutrum ullamcorper elit elit nullam, posuere felis mattis tortor ac. Neque massa ac id dui eros, scelerisque arcu platea massa molestie, erat justo tortor scelerisque sit neque leo, felis pede ut commodo. Amet semper diam consequat, suscipit condimentum rhoncus tellus wisi purus.</p>
 //          <h3>Post #4</h3>
 //          <p>Lorem ipsum dolor sit amet, tristique quia, quis sem neque porttitor. In posuere nunc pharetra nam id, mollis porttitor, neque viverra rutrum ullamcorper elit elit nullam, posuere felis mattis tortor ac. Neque massa ac id dui eros, scelerisque arcu platea massa molestie, erat justo tortor scelerisque sit neque leo, felis pede ut commodo. Amet semper diam consequat, suscipit condimentum rhoncus tellus wisi purus.</p>
 //          <h3>Post #5</h3>
 //          <p>Lorem ipsum dolor sit amet, tristique quia, quis sem neque porttitor. In posuere nunc pharetra nam id, mollis porttitor, neque viverra rutrum ullamcorper elit elit nullam, posuere felis mattis tortor ac. Neque massa ac id dui eros, scelerisque arcu platea massa molestie, erat justo tortor scelerisque sit neque leo, felis pede ut commodo. Amet semper diam consequat, suscipit condimentum rhoncus tellus wisi purus.</p>
 //          </Container>
          <Footer />
 //        </div>

export default AskItForum;
