import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Dropdown,
  Menu,
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
    <Menu fixed='top' inverted="inverted" style={{margin: '50px, 0px, 50px, 0px'}}>
      <Container>
        <Menu.Item as='a' header="header">
          Not Alone
        </Menu.Item>


        <Menu.Item as={Link} to='/home'>
            Home
          </Menu.Item>


        <Menu.Item as='a'><Link to={routes.ABOUT}>
          About</Link>

        </Menu.Item>

        {/* <Menu.Item as='a'>
          <Link to={routes.LOG_IN}>Log In</Link>

        </Menu.Item> */}


        <Menu.Item as='a'>
          <Link to={routes.ACCOUNT}>Profile</Link>

        </Menu.Item>




        <Dropdown item="item" simple="simple" text='Recovery'>
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to='/ask-it-forum'>
                Ask It Forum
            </Dropdown.Item>
            <Dropdown.Item as={Link} to='/news'>
                News
            </Dropdown.Item>
            <Dropdown.Divider/>
            <Dropdown.Header>Recovery</Dropdown.Header>
            <Dropdown.Item>
              <i className='dropdown icon'/>
              <span className='text'>Events</span>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to='/events-near-you'>
                    Near You
                </Dropdown.Item>
                <Dropdown.Item as={Link} to='/global-events'>
                    Around the World
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item as={Link} to='/12step-meetings'>
                12 Step Meetings
              </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Menu.Item as='a'>
          <SignOutButton />
        </Menu.Item>

      </Container>
    </Menu>
  );

  const NavigationNonAuth = () =>
  <Menu fixed='top' inverted="inverted">
    <Container>
      <Menu.Item as='a' header="header">
        Not Alone
      </Menu.Item>


      <Menu.Item as={Link} to='/home'>
          Home
        </Menu.Item>


      <Menu.Item as='a'><Link to={routes.ABOUT}>
        About</Link>

      </Menu.Item>

      <Menu.Item as='a'>
        <Link to={routes.LOG_IN}>Log In</Link>

      </Menu.Item>




      <Dropdown item="item" simple="simple" text='Recovery'>
        <Dropdown.Menu>

          <Dropdown.Item as={Link} to='/ask-it-forum'>
              Ask It Forum
            </Dropdown.Item>
          <Dropdown.Item as={Link} to='/news'>
              News
          </Dropdown.Item>
          <Dropdown.Divider/>
          <Dropdown.Header>Recovery</Dropdown.Header>
          <Dropdown.Item>
            <i className='dropdown icon'/>
            <span className='text'>Events</span>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to='/events-near-you'>
                  Near You
              </Dropdown.Item>
              <Dropdown.Item as={Link} to='/global-events'>
                  Around the World
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Item>
          <Dropdown.Item as={Link} to='/12step-meetings'>
            12 Step Meetings
        </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

    </Container>
  </Menu>
  // <ul>
  //   <li><Link to={routes.LANDING}>Landing</Link></li>
  //   <li><Link to={routes.LOG_IN}>Log In </Link></li>
  // </ul>


export default Navigation;
