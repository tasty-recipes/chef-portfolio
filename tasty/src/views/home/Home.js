import React from 'react';
import JumbotronView from '../jumbotron/JumbotronView';
import Blog from '../../components/blog/Blog';

const Home = () => {
    return (
        <div>
            <JumbotronView />
            <Blog />
        </div>
    )
}

export default Home;