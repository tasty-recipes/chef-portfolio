import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { blogLoad } from './store/actions';

import PrivateRoute from './components/private/PrivateRoute';
import Home from './views/home/Home';
import Footer from './views/footer/Footer';
import Dashboard from './views/dashboard/Dashboard';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {

    }
  }

  componentDidMount(){
    this.props.blogLoad();
  }


  render(){
    return (
      <div className="App">
          <Route exact path='/' component={Home} />
          <PrivateRoute path='/dashboard' component={Dashboard} />
          <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  blogs: state.blogs,
  token: state.token,
})

export default connect(mapStateToProps, { blogLoad })(App);
