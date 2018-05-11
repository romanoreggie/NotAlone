import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {auth, db} from '../firebase';

import * as routes from '../constants/routes';

const SignUpPage = ({history}) => <div>
  <h1 style={{margin: '50px'}}>SignUp</h1>
  <SignUpForm history={history}/>
</div>

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null
};

const byPropKey = (propertyName, value) => () => ({[propertyName]: value});

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...INITIAL_STATE
    };
  }
  onSubmit = (event) => {
    const {username, email, passwordOne} = this.state;

    const {history} = this.props;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne).then(authUser => {
      this.setState(() => ({
        ...INITIAL_STATE
      }));
      history.push(routes.HOME);
    }).catch(error => {
      this.setState(byPropKey('error', error));
    });
    event.preventDefault();
  }

  render() {
    const {username, email, passwordOne, passwordTwo, error} = this.state;

    const isInvalid = passwordOne !== passwordTwo || passwordOne === '' || email === '' || username === '';

    return (
      <form onSubmit={this.onSubmit} style={{width: '70%'}} >
      <div class="ui large form">
        <div class="two fields">
          <div class="field">
            <label>Full Name</label>
            <input
               value={username}
                onChange={event => this.setState(byPropKey('username', event.target.value))}
                placeholder="Full Name"
                 type="text"/>
          </div>
          <div class="field">
            <label>Email</label>
            <input
              value={email}
              onChange={event => this.setState(byPropKey('email', event.target.value))}
              placeholder="Email Address"
               type="text"
             />
          </div>
        </div>
        <div class="ui large form">
          <div class="two fields">
            <div class="field">
              <label>Password</label>
              <input
                value={passwordOne}
                 onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
                 placeholder="Password"
                 type="text"
               />
            </div>
            <div class="field">
              <label>Confirm Password</label>
              <input
                value={passwordTwo}
                onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
                placeholder="Confirm Password"
                type="text"
              />
            </div>
          </div>
        </div>
            <button
              disabled={isInvalid}
              type="submit"
              class="ui submit button">
              Submit
            </button>
      </div>
    </form>
      )
    }
  }

        const SignUpLink = () =>
        <p>
          Don't have an account? {' '}
          <Link to={routes.SIGN_UP}>Sign up</Link>
        </p>

        export default withRouter(SignUpPage); export {
          SignUpForm,
          SignUpLink
        }
