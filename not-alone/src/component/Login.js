import React, { Component } from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

import { SignUpLink } from './SignUp';
import { PasswordForgetLink } from './PasswordForget';
import { auth } from '../firebase';
import * as routes from '../constants/routes';
import Footer from './Footer';
import Navigation from './Navigation';

const LogInPage = ({ history }) =>
<div>
  <LogInForm history={history} />
  <Footer />
</div>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};


class LogInForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
    .then(() => {
      this.setState(() => ({ ...INITIAL_STATE}));
      history.push(routes.HOME);
    })
    .catch(error => {
      this.setState(byPropKey('error', error));
    });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
    password === '' ||
    email === '';

  return (
  (<div className='login-form'>

  <style>
    {
      ` body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
       `
    }</style>
  <Grid textAlign='center' style={{
      height: '100%'
    }} verticalAlign='middle'>
    <Grid.Column style={{
        maxWidth: 450
      }}>
      <Header as='h2' textAlign='center'>
        {' '}Log-in to your account
      </Header>


      <Form size='large' onSubmit={this.onSubmit}>
        <Segment stacked="stacked">
          <Form.Input
             fluid="fluid"
              icon='user'
               iconPosition='left'
               value={email}
               onChange={event => this.setState(byPropKey('email', event.target.value))}
               type="text"
                placeholder='E-mail address'/>

          <Form.Input
            fluid="fluid"
             icon='lock'
              iconPosition='left'
              value={password}
              onChange={event => this.setState(byPropKey('password', event.target.value))}
               placeholder='Password'
                type='password'/>

          <Button disabled={isInvalid} type="submit" fluid="fluid" size='large'>
            Login
          </Button>
          { error && <p>{error.message}</p> }
        </Segment>
      </Form>
      <Message>
        <PasswordForgetLink />
        <SignUpLink />
      </Message>
    </Grid.Column>
  </Grid>
</div>
)
)
}
}

export default withRouter(LogInPage);

export {
  LogInForm,
};
