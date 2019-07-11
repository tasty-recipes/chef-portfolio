import React from 'react';
import { withRouter } from 'react-router-dom';

import JumbotronView from '../jumbotron/JumbotronView';
import Blog from '../../components/blog/Blog';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <div>
                <JumbotronView />
                <Blog />
            </div>
        )
    }
}

export default withRouter(Home);