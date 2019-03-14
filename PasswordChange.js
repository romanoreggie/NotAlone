import React, { Component } from 'react';

import { auth } from '../firebase';

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { passwordOne } = this.state;

    auth.doPasswordUpdate(passwordOne)
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
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '';

    return (
      <form onSubmit={this.onSubmit}>
        <div class="ui large form">
          <div class="two fields">
            <div class="field">
              <label>New Password</label>
              <input
                value={passwordOne}
                onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
                 placeholder="New Password"
                  type="password"
                 />
              </div>
              <div class="field">
                <label>Confirm Password</label>
                <input
                  value={passwordTwo}
                  onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
                   placeholder="Confirm New Password"
                    type="password"
                   />
                </div>
              </div>
              <button
                disabled={isInvalid}
                type="submit"
                 class="ui submit button"
                 >
                Submit
              </button>
              { error && <p>{error.message}</p>}
            </div>
          </form>
    );
  }
}

export default PasswordChangeForm;
