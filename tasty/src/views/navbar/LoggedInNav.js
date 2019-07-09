import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    background-color: #ff5959;
`

const List = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    list-style-type: none;
`

const Items = styled.li`
    margin: 10px;
`

const Title = styled.h1`
    margin: 10px;
`

const LoggedInNav = () => {
    return(
        <Main>
            <div>
                <Title>Tasty Recipes</Title>
            </div>
            <div>
                <List>
                    <Items>Log out</Items>
                    <Items>About</Items>
                </List>
            </div>
        </Main>
    )
}

export default LoggedInNav;