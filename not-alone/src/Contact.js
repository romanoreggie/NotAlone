import React from 'react';
import Footer from './Footer';
import {
  Container,
  Header
} from 'semantic-ui-react';

const ContactPage = () =>
      <div>
        <Container textAlign='center' style={{margin: '50px'}}>
        <Header as='h1'>
          Contact Us
        </Header>
        </Container>
        <Footer />

      </div>


export default ContactPage;
