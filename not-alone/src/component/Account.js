import React from 'react';
import Footer from './Footer';
import AuthUserContext from './AuthUserContext';
import { PasswordForgetForm } from './PasswordForget';
import PasswordChangeForm from './PasswordChange';
import withAuthorization from './withAuthorization';

const AccountPage = () =>
    <AuthUserContext.Consumer>
      {authUser =>
        <div style={{margin: '50px'}}>
          <h1>Account: {authUser.email}</h1>
          <PasswordForgetForm />
          <PasswordChangeForm />
          <Footer />
        </div>
        }
    </AuthUserContext.Consumer>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AccountPage);
