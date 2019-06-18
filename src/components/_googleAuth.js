import React, { Component, Fragment } from 'react';
import {connect} from "react-redux";
import {signIn, signOut} from "../actions";

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      console.log(window.gapi);
      window.gapi.client.init({
        clientId: '430077311216-r54idu723f13eab39c9er2e4o49t17gf.apps.googleusercontent.com',
        // clientId: process.env.GAUTH_CLIENT_ID,
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange);
      })
    })
  }

  onAuthChange = (isSignedIn) => {
    if(isSignedIn) {
      this.props.signIn()
    } else {
      this.props.signOut();
    }
  }

  onSignOutClick = () => {
    this.auth.signOut()
  }

  onSignInClick = () => {
    this.auth.signIn()
  }

  renderAuthButton = () => {
    if(this.props.isSignedIn === null) {
      return <div>??</div>;
    } else if(this.props.isSignedIn) {
      return (
        <Fragment>
          <button className="ui google plus button" onClick={ this.onSignOutClick }>
            <i aria-hidden="true" className="google plus icon"></i> Sign Out
          </button>
        </Fragment>
      )
    } else {
      return (
        <Fragment>
          <button className="ui google plus button"  onClick={ this.onSignInClick }>
            <i aria-hidden="true" className="google icon"></i> Sign In
          </button>
        </Fragment>
      )
    }
  }

  render() {
    console.log('props', this.props)
    return (
      <Fragment>
        {this.renderAuthButton()}
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, {signIn, signOut}) (GoogleAuth);