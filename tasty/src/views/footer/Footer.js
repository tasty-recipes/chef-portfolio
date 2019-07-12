import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 20px;
`

const List = styled.ul`
    list-style-type: none;
`

const Form = styled.form`
    padding: 20px;
`

const Footer = () => {
    return (
        <Main>
            <div>
                <h1>Tasty Recipes</h1>
            </div>
            <div>
                <List>
                    <li>Careers</li>
                    <li>About</li>
                    <li>Fees</li>
                    <li>Legal Terms</li>
                </List>
            </div>
            <div>
                <h3>Contact</h3>
                <Form>
                    <h5>Name</h5>
                    <input />
                    <h5>E-Mail</h5>
                    <input type="email" />
                    <h5>What is wrong?</h5>
                    <input />
                </Form>
            </div>
        </Main>
    )
}

export default Footer;