import React from 'react';
import styled from 'styled-components';

import UserCard from '../../components/card/UserCard';

const Main = styled.div`
    
`

const CardDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`

class UserPage extends React.Component{
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return (
            <Main>
                <div>
                    <h1>Welcome User!</h1>
                </div>
                <CardDiv>
                    <UserCard type="newBlog" />
                    <UserCard type="users" />
                    <UserCard />
                </CardDiv>
            </Main>
        )
    }
}

export default UserPage;