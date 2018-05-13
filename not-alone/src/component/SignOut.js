import React from 'react';

import { auth } from '../firebase';

const SignOutButton = () =>
<button
  class="negative ui button"
  type="button"
  onClick={ auth.doSignOut }
  >
  Sign Out
</button>
  /* <button
    type="button"
    onClick={ auth.doSignOut }
  >
    Sign Out
  </button> */

export default SignOutButton;
