import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import { randomPic } from './store/actions';
import JumbotronView from './views/jumbotron/JumbotronView';
import NavBar from './views/navbar/NavBar';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {

    }
  }

  componentDidMount(){
    console.log('Loaded!');
    this.props.randomPic();
  }


  render(){
    return (
      <div className="App">
          <NavBar />
          <JumbotronView />

      </div>
    );
  }
}

const mapStateToProps = state => ({
  blogs: state.blogs,

})

export default connect(mapStateToProps, { randomPic })(App);
