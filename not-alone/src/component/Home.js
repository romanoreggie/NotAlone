import React from 'react';
import Footer from './Footer';
import withAuthorization from './withAuthorization';
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from 'semantic-ui-react';

const HomePage = () =>
        <div style={{margin: '50px'}}>
          <Header as ='h1' textAlign='center'>
            {' '}Welcome to Not-Alone
          </Header>
          <p>The Home Page is accessible by every signed in user.</p>
          <Footer />
        </div>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);
