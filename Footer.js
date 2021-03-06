import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Divider, Grid, Header, List, Segment } from 'semantic-ui-react'
// import * as routes from '../constants/routes';



const Footer = () => (
    <div>

<Segment
  inverted
  vertical
  style={{ margin: '5em 0em 0em', padding: '5em 0em', position: 'sticky', left: '0', bottom: '0', right: '0' }}
>
  <Container textAlign='center'>
    <Grid divided inverted stackable>
      <Grid.Row>
        <Grid.Column width={3}>
          <Header inverted as='h4' content='Need Help?' />
          <List link inverted>
            <List.Item as={Link} to='/treatment'>
              Treatment Center
            </List.Item>
            <List.Item as={Link} to='/detox'>
              Detox Center

            </List.Item>
            <List.Item as={Link} to='/sober-living'>
              Sober Living
          </List.Item>
            <List.Item as={Link} to='/oxford'>
              Oxford Living
          </List.Item>
          </List>
        </Grid.Column>
        <Grid.Column width={3}>
          <Header inverted as='h4' content='Job Resource' />
          <List link inverted>
            <List.Item as={Link} to='/resume-builder'>
              Resume Builder
            </List.Item>
            <List.Item as={Link} to='/interview-tips'>
              Interview Tips
            </List.Item>
            <List.Item as={Link} to='/job-help'>
              Job Application Help
            </List.Item>
          </List>
        </Grid.Column>
        <Grid.Column width={3}>
          <Header inverted as='h4' content='Peer Recovery Coaching' />
          <List link inverted>
            <List.Item as='a'>Local Resource</List.Item>
            <List.Item as='a'>Global Resource</List.Item>
            <List.Item as='a'>How to Become</List.Item>
            <List.Item as='a'>Locate a Coach</List.Item>
          </List>
        </Grid.Column>
        <Grid.Column width={3}>
          <Header inverted as='h4' content='You are Not Alone Today' />
          <p>Don't hesitate to reach out to anyone on this site, we are all here to help.</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Divider inverted section />
    <List horizontal inverted divided link>
      <List.Item as='a' href='#'>Site Map</List.Item>
      <List.Item as={Link} to='/contact'>Contact Us</List.Item>
      <List.Item as={Link} to='/terms-and-conditions'>Terms and Conditions</List.Item>
      <List.Item as={Link} to='/privacy'>Privacy Policy</List.Item>
    </List>
  </Container>
</Segment>
</div>
)

export default Footer;
