import React,{Component} from 'react';
import {
 BrowserRouter as Router,
 Route,
 Link
} from 'react-router-dom';
import Home from './Home';
import About from './About';

import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment } from 'semantic-ui-react'



const Footer = () => (
  <Router>
    <div>
<Segment
  inverted
  vertical
  style={{ margin: '5em 0em 0em', padding: '5em 0em' }}
>
  <Container textAlign='center'>
    <Grid divided inverted stackable>
      <Grid.Row>
        <Grid.Column width={3}>
          <Header inverted as='h4' content='Need Help?' />
          <List link inverted>
            <List.Item as='a'>Treatment Center</List.Item>
            <List.Item as='a'>Detox Center</List.Item>
            <List.Item as='a'>Sober Living</List.Item>
            <List.Item as='a'>Oxford Living</List.Item>
          </List>
        </Grid.Column>
        <Grid.Column width={3}>
          <Header inverted as='h4' content='Job Resource' />
          <List link inverted>
            <List.Item as='a'>Resume Builder</List.Item>
            <List.Item as='a'>Interview Tips</List.Item>
            <List.Item as='a'>Job Application Help</List.Item>
          </List>
        </Grid.Column>
        <Grid.Column width={3}>
          <Header inverted as='h4' content='Group 3' />
          <List link inverted>
            <List.Item as='a'>Link One</List.Item>
            <List.Item as='a'>Link Two</List.Item>
            <List.Item as='a'>Link Three</List.Item>
            <List.Item as='a'>Link Four</List.Item>
          </List>
        </Grid.Column>
        <Grid.Column width={3}>
          <Header inverted as='h4' content='Footer Header' />
          <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Divider inverted section />
    <List horizontal inverted divided link>
      <List.Item as='a' href='#'>Site Map</List.Item>
      <List.Item as='a' href='#'>Contact Us</List.Item>
      <List.Item as='a' href='#'>Terms and Conditions</List.Item>
      <List.Item as='a' href='#'>Privacy Policy</List.Item>
    </List>
  </Container>
</Segment>
</div>
</Router>
)

export default Footer;
