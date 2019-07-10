import React from 'react';

import Blog from '../../components/blog/Blog';
import UserPage from '../../views/user/UserPage';

const Dashboard = () => {
    return(
        <div>
            <UserPage />
            <Blog />
        </div>
    )
}

export default Dashboard;