import React from 'react';
import JumbotronView from '../jumbotron/JumbotronView';
import Blog from '../../components/blog/Blog';
import NavBar from '../navbar/NavBar';

const Home = () => {
    return (
        <div>
            <NavBar />
            <JumbotronView />
            <Blog />
        </div>
    )
}

export default Home;