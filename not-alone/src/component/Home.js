import React from 'react';

import withAuthorization from './withAuthorization';

const HomePage = () =>
        <div style={{margin: '50px'}}>
          <h1>Home</h1>
          <p>The Home Page is accessible by every signed in user.</p>
        </div>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);
