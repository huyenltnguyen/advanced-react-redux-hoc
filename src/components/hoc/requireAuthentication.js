import React from 'react';
import { connect } from 'react-redux';

export default (ComposedComponent) => {
  class Authentication extends React.Component {
    componentDidMount() {
      if (!this.props.authenticated) {
        this.props.history.push('/');
      }
    }

    componentDidUpdate() {
      // when user is on the /resources route and hits Sign Out
      // redirect to '/'
      if (!this.props.authenticated) {
        this.props.history.push('/');
      }
    }

    render() {
      return <ComposedComponent { ...this.props } />;
    }
  }

  const mapStateToProps = (state) => {
    return {
      authenticated: state.authenticated
    };
  };

  return connect(mapStateToProps)(Authentication);
};
