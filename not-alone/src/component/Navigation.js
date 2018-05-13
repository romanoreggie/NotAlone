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

        {/* <Menu.Item as='a'>
          <Link to={routes.LOG_IN}>Log In</Link>

        </Menu.Item> */}


        <Menu.Item as='a'>
          <Link to={routes.ACCOUNT}>Profile</Link>

        </Menu.Item>




        <Dropdown item="item" simple="simple" text='Recovery'>
          <Dropdown.Menu>
            <Dropdown.Item>
              <Link to={routes.ASKITFORUM}>
                Ask It Forum
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to={routes.NEWS}>
                News
              </Link>
            </Dropdown.Item>
            <Dropdown.Divider/>
            <Dropdown.Header>Recovery</Dropdown.Header>
            <Dropdown.Item>
              <i className='dropdown icon'/>
              <span className='text'>Events</span>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link to={routes.EVENTS_LOCAL}>
                    Near You
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to={routes.EVENTS_GLOBAL}>
                    Around the World
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to={routes.TWELVESTEP_MEETINGS}>
                12 Step Meetings
              </Link>
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

      <Menu.Item as='a'>
        <Link to={routes.LOG_IN}>Home</Link>

      </Menu.Item>

      <Menu.Item as='a'><Link to={routes.ABOUT}>
        About</Link>

      </Menu.Item>

      <Menu.Item as='a'>
        <Link to={routes.LOG_IN}>Log In</Link>

      </Menu.Item>




      <Dropdown item="item" simple="simple" text='Recovery'>
        <Dropdown.Menu>
          <Dropdown.Item>
            <Link to={routes.ASKITFORUM}>
              Ask It Forum
            </Link>
            </Dropdown.Item>
          <Dropdown.Item>
            <Link to={routes.NEWS}>
              News
            </Link>
          </Dropdown.Item>
          <Dropdown.Divider/>
          <Dropdown.Header>Recovery</Dropdown.Header>
          <Dropdown.Item>
            <i className='dropdown icon'/>
            <span className='text'>Events</span>
            <Dropdown.Menu>
              <Dropdown.Item>
                <Link to={routes.EVENTS_LOCAL}>
                  Near You
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to={routes.EVENTS_GLOBAL}>
                  Around the World
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Item>
          <Dropdown.Item><Link to={routes.TWELVESTEP_MEETINGS}>
            12 Step Meetings
          </Link>
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
