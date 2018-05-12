import React from 'react';
import { Link } from 'react-router-dom';
import { authenticate } from '../actions';
import { connect } from 'react-redux';

const style = {
  display: 'inline-block',
  margin: '0 5px'
};

class Header extends React.Component {
  authBtn = () => {
    return this.props.authenticated
    ? <button onClick={ () => this.props.authenticate(false) }>Sign Out</button>
    : <button onClick={ () => this.props.authenticate(true) }>Sign In</button>
  }

  render() {
    return (
      <nav>
        <ul>
          <li style={ style }>
            <Link to='/'>Home</Link>
          </li>
          <li style={ style }>
            <Link to='/resources'>Resources</Link>
          </li>
          <li style={ style }>
            { this.authBtn() }
          </li>
        </ul>

      </nav>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    authenticated: state.authenticated
  };
};

export default connect(mapStateToProps, { authenticate })(Header);
