import React from 'react';
import Footer from './Footer';
import AuthUserContext from './AuthUserContext';
import { PasswordForgetForm } from './PasswordForget';
import PasswordChangeForm from './PasswordChange';
import withAuthorization from './withAuthorization';
import {
  Container,
  Header
} from 'semantic-ui-react';

const AccountPage = () =>
  <div>
    <Container textAlign='center' style={{margin: '50px'}}>
    <AuthUserContext.Consumer>
      {authUser =>
        <div>
          <Header as='h1'>
            Account: {authUser.email}
          </Header>
          <PasswordForgetForm />
          <PasswordChangeForm />
      </div>
        }
    </AuthUserContext.Consumer>
  </Container>
  <Footer />
</div>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AccountPage);
