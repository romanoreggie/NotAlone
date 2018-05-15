import React from 'react';
import Footer from './Footer';
import {
  Container,
  Header
} from 'semantic-ui-react';

const EventsLocalPage = () =>
        <div>
          <Container style={{margin: '50px'}}>
          <h1>Events Near You</h1>
          </Container>
          <Footer />
        </div>

export default EventsLocalPage;
