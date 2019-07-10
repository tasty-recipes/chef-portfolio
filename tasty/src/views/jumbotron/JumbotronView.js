import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import Picture from './Picture';
import styled from 'styled-components';

const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #facf5a;
  padding: 20px;
`
const Div = styled.div`
  width: 49.5%;
`

const JumbotronView = () => {
  return (
    <Main>
      <Div>
        <Jumbotron fluid>
          <Container fluid>
              <h1 className="display-3">Tasty Recipes</h1>
              <p className="lead">Your One Stop Shop for all your favorite recipes</p>
              <hr className="my-2" />
              <p>Whether you want something new or have ran out of ideas, we at Tasty Recipes have your back!</p>
          </Container>
        </Jumbotron>
      </Div>
      <Div>
        <Picture />
      </Div>
    </Main>
  )
}

export default JumbotronView;