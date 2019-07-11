import React from 'react';
import { connect } from  'react-redux';

import Blog from '../../components/blog/Blog';
import UserPage from '../../views/user/UserPage';
import { blogLoad } from '../../store/actions';

class Dashboard extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount(){
        this.props.blogLoad();
    }

    render(){
        return(
            <div>
                <UserPage />
                <Blog />
            </div>
        )
    }
}

export default connect(null, { blogLoad })(Dashboard);