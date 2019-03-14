import React from 'react';
import Footer from './Footer';
import {
  Container,
  Header
} from 'semantic-ui-react';

const ErinsPlace = () =>

  <div style={{margin: 'top 50px'}}>
    <Container text style={{ marginTop: '7em' }}>
    <Header as='h1'>Erin's Place</Header>
    <p>Erin’s Place is designed to memorialize all of those we have lost, it is a place to honor their life and memory while hopefully allowing others who are currently struggling with the passing of someone to find hope and strength from this fellowship.</p>
    </Container>
    <Footer />
  </div>


  export default ErinsPlace;
