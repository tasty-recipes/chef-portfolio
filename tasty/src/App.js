import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { blogLoad } from './store/actions';

import PrivateRoute from './components/private/PrivateRoute';
import NavBar from './views/navbar/NavBar';
import Home from './views/home/Home';
import Footer from './views/footer/Footer';
import Dashboard from './views/dashboard/Dashboard';
import './App.css';
import LoggedInNav from './views/navbar/LoggedInNav';

class App extends React.Component {
  constructor(){
    super();
    this.state = {

    }
  }

  componentDidMount(){
    this.props.blogLoad();
  }

  loadNew = () => {
    this.props.history.push('/dashboard');
  }


  render(){
    return (
      <div className="App">
          {localStorage.getItem('token') !== null ? <LoggedInNav dashboard={this.loadNew} /> : <NavBar history={this.loadNew} />}
          <Route exact path='/' component={Home} />
          <PrivateRoute path='/dashboard' component={Dashboard} />
          <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  token: state.token,
})

export default connect(mapStateToProps, { blogLoad })(App);
