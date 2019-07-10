import React from 'react';

import Blog from '../../components/blog/Blog';
import UserPage from '../../views/user/UserPage';
import LoggedInNav from '../navbar/LoggedInNav';

const Dashboard = () => {
    return(
        <div>
        <LoggedInNav />
            <UserPage />
            <Blog />
        </div>
    )
}

export default Dashboard;