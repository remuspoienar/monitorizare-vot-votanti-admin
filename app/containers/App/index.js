import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Login from 'containers/Login';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { isLoggedIn } from './selectors';

export class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    console.log(this.props.isUserLoggedIn ? React.Children.toArray(this.props.children) : Login)
    return (
      <div style={{ background: '#F9F9FB' }} className="row">
        <Header {...this.props.location} />
        {React.Children.toArray(this.props.isUserLoggedIn ? this.props.children : Login)}
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  location: React.PropTypes.object,
  isUserLoggedIn: React.PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  isUserLoggedIn: isLoggedIn(),
});

export default connect(mapStateToProps, null)(App);
