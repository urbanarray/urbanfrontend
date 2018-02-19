/**
*
* SocialButton
*
*/

import React from 'react';
// import styled from 'styled-components';
import SocialLogin from 'react-social-login';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const Button = ({ children, triggerLogin, ...props }) => (
  <button onClick={triggerLogin} {...props}>
    {children}
  </button>
)




export default SocialLogin(Button)
