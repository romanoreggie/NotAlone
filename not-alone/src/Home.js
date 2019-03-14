import React from 'react';
import Footer from './Footer';
import Feed from './Feed';
import withAuthorization from './withAuthorization';
import {
  Container,
  Header
} from 'semantic-ui-react';

const HomePage = () =>
        <div>
          <Container textAlign='center' style={{margin: '50px'}}>
          <Header as ='h1'>
            {' '}Welcome to Not-Alone
          </Header>
          <Feed />
        </Container>
          <Footer />
        </div>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);
