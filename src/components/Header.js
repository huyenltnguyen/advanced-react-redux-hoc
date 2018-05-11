import React from 'react';
import { Link } from 'react-router-dom';

const style = {
  display: 'inline-block',
  margin: '0 5px'
};

class Header extends React.Component {
  authBtn = () => {
    return <button>Sign In</button>;
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

export default Header;
