import React from 'react';
import Footer from './Footer';
import {
  Container,
  Header
} from 'semantic-ui-react';

const TermsPage = () =>
      <div>
        <Container textAlign='center' style={{margin: '50px'}}>
        <Header as='h1'>
          Terms and Conditions
        </Header>
        </Container>
        <Footer />

      </div>


export default TermsPage;
