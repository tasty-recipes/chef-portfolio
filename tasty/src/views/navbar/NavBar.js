import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;

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

const NavBar = () => {
    return (
        <Main>
            <div>
                <Title>Tasty Recipes</Title>
            </div>
            <div>
                <List>
                    <Items>Sign Up</Items>
                    <Items>Log In</Items>
                    <Items>About</Items>
                </List>
            </div>
        </Main>
    )
}

export default NavBar;