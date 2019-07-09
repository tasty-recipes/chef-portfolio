import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import Dashboard from './views/dashboard/Dashboard';
import JumbotronView from './views/jumbotron/JumbotronView';
import NavBar from './views/navbar/NavBar';
import LoggedInNav from './views/navbar/LoggedInNav';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {

    }
  }

  componentDidMount(){
    console.log('Loaded!');
  }


  render(){
    return (
      <div className="App">
          {(this.props.token !== '') ? <LoggedInNav />:<NavBar />}
          <JumbotronView />
          <Route path='/dashboard' component={Dashboard} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  blogs: state.blogs,
  token: state.token,
})

export default connect(mapStateToProps, { })(App);
