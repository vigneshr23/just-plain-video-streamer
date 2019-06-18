import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './_googleAuth';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="acrive item">
        STREAM APP
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All Streams
        </Link>
        <GoogleAuth title="Google Auth" />
      </div>
    </div>
  )
};

export default Header;