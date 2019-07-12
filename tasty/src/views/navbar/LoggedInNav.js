import React from 'react';
import { Button } from 'reactstrap';
import styled from 'styled-components';
import { signOut } from '../../store/actions';
import { connect } from 'react-redux';

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

class LoggedInNav extends React.Component {
    constructor(props){
        super(props);
        this.state ={

        }
    }

    signOff = () => {
        localStorage.removeItem('token');
    }

    render(){
        return(
            <Main>
                <div>
                    <Title>Tasty Recipes</Title>
                </div>
                <div>
                    <List>
                        <Items>
                            <Button onClick={this.signOff}>Log out</Button>
                        </Items>
                        <Items>
                            <Button>About</Button>
                        </Items>
                    </List>
                </div>
            </Main>
        )
    }
}

export default connect(null, { signOut })(LoggedInNav);