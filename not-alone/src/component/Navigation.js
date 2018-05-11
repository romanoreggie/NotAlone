import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './Home';
import About from './About';
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment
} from 'semantic-ui-react'

import AuthUserContext from './AuthUserContext';
import SignOutButton from './SignOut';
import * as routes from '../constants/routes';

const Navigation = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>

  const NavigationAuth = () => (
    <Menu fixed='top' inverted="inverted">
      <Container>
        <Menu.Item as='a' header="header">
          Not Alone
        </Menu.Item>

        <Menu.Item as='a'>
          <Link to={routes.HOME}>Home</Link>

        </Menu.Item>

        <Menu.Item as='a'><Link to={routes.ABOUT}>
          About</Link>

        </Menu.Item>

        <Menu.Item as='a'>
          <Link to={routes.LOG_IN}>Log In</Link>

        </Menu.Item>


        <Menu.Item as='a'>
          <Link to={routes.ACCOUNT}>Account</Link>

        </Menu.Item>




        <Dropdown item="item" simple="simple" text='Recovery'>
          <Dropdown.Menu>
            <Dropdown.Item>Ask It Forum</Dropdown.Item>
            <Dropdown.Item>News</Dropdown.Item>
            <Dropdown.Divider/>
            <Dropdown.Header>Recovery</Dropdown.Header>
            <Dropdown.Item>
              <i className='dropdown icon'/>
              <span className='text'>Events</span>
              <Dropdown.Menu>
                <Dropdown.Item>Near You</Dropdown.Item>
                <Dropdown.Item>Around the World</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item>12 Step Meetings</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Menu.Item as='a'>
          <SignOutButton />
        </Menu.Item>

      </Container>
    </Menu>
  );

  const NavigationNonAuth = () =>
  <ul>
    <li><Link to={routes.LANDING}>Landing</Link></li>
    <li><Link to={routes.LOG_IN}>Log In </Link></li>
  </ul>


export default Navigation;
