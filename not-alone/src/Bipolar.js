import React from 'react';
import Footer from './Footer';
import {
  Container,
  Header
} from 'semantic-ui-react';
import ForumsPostContainer from './ForumsPostContainer'
import ForumSubmitForm from './ForumSubmitForm'

const BipolarPage = () =>
      <div>
        <Container textAlign='center' style={{margin: '50px'}}>
        <Header as='h1'>
          Bipolar
        </Header>
        <ForumSubmitForm />
        <ForumsPostContainer />
        </Container>
        <Footer />

      </div>


export default BipolarPage;
