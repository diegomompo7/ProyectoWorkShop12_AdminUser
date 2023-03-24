import React from 'react';
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl';

const Header = () => {
  return <div>
    <h2><FormattedMessage id='header.logo'></FormattedMessage></h2>
    <Link to='/'><FormattedMessage id='header.home'></FormattedMessage></Link>
    <Link to='/users'><FormattedMessage id='header.users'></FormattedMessage></Link>
    <Link to='/create-user'><FormattedMessage id='header.createUser'></FormattedMessage></Link>
  </div>
}
export default Header;
