import React from 'react';
import styled from 'styled-components';

import LogModal from '../../components/modal/LogModal';

const Main = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    background-color: #ff5959;
`

const Title = styled.h1`
    margin: 10px;
`

const Right = styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px;
`

const Btns = styled.div`
    margin: 10px;
`

const NavBar = (props) => {
    return (
        
        <Main>
            <div>
                <Title>Tasty Recipes</Title>
            </div>
            <Right>
                <Btns>
                    <LogModal buttonLabel={'Sign Up'} type={'Sign Up'} />
                </Btns>
                <Btns>
                    <LogModal dashboard={props.history} buttonLabel={'Log In'} type={'Log In'} />
                </Btns>
            </Right>
        </Main>
    )
}

export default NavBar;