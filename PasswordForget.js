import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import {
  Container
} from 'semantic-ui-react';
import { auth } from '../firebase';

const PasswordForgetPage = () =>
        <div>
          <Container style={{margin: '50px'}}>
          <h1>Password Forget</h1>
          <PasswordForgetForm />
        </Container>
          <Footer />
        </div>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  error: null,
};

class PasswordForgetForm extends Component {
  constructor(props) {
    super(props);

    this.state = {...INITIAL_STATE};
  }

  onSubmit = (event) => {
    const { email } = this.state;

    auth.doPasswordReset(email)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

      event.preventDefault();
  }
  render() {
    const {
      email,
      error,
    } = this.state;

    const isInvalid = email === '';

    return(
      <form onSubmit={this.onSubmit} style={{width: '60%'}}>
      <div class="ui form">
  <div class="field">
    <label>E-mail</label>
    <input
      value={this.state.email}
      onChange={event => this.setState(byPropKey('email', event.target.value))}
      type="email"
      placeholder="joe@schmoe.com" />
  </div>
  <button class="ui submit button" disabled={isInvalid} type="submit">
    Submit
  </button>
  { error && <p>{ error.message }</p> }
</div>
</form>
    );
  }
}

const PasswordForgetLink = () =>
  <p>
    <Link to="/pw-forget">Forget Password?</Link>
  </p>

export default PasswordForgetPage;

export {
  PasswordForgetForm,
  PasswordForgetLink,
};
