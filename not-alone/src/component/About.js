import React from 'react';
import Footer from './Footer';
import {
  Container,
  Header
} from 'semantic-ui-react';

const AboutPage = () =>
        <div style={{margin: 'top 50px'}}>
          <Container text style={{ marginTop: '7em' }}>
      <Header as='h1'>About Not-Alone</Header>
      <p>Not-Alone was designed as a safe place for those suffering from not only substance abuse but a wide variety of mental illnesses to come together and support one another throughout their journey.</p>
      <p>After seeing countless people go back out in the rooms of recovery I realized something had to change, we live in a world where we are capable of getting the same connection through our devices that previous generations could receive from face to face connection.
      </p>
      <p>
        With that in mind I wanted to develop somewhere that those struggling to connect and develop a fellowship could go to reach out for help and not have the same fear of connection, social anxiety, or whatever it may be preventing someone to ask for the help they needed.
      </p>
      <p>
        Less than a week before this was set to release I lost one of my closest friends who struggled with the very things this website was designed to help with and I knew at that moment the world needed this now more now than ever. With that being said, I give you Not-Alone. -Reginald R.
      </p>
    </Container>
          <Footer />
        </div>

export default AboutPage;
