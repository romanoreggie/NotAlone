import React from 'react';
import Footer from './Footer';
import {
  Container,
  Header
} from 'semantic-ui-react';

const PrivacyPage = () =>
      <div>
        <Container textAlign='center' style={{margin: '50px'}}>
        <Header as='h1'>
          Privacy Policy
        </Header>
        </Container>
        <Footer />

      </div>


export default PrivacyPage;
