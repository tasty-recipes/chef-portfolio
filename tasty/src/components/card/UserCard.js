import React from 'react';
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import styled from 'styled-components';

const Main = styled.div`
  border: 1px solid lightslategray;
  width: 100%;
  margin: 10px;
`

class UserCard extends React.Component {
    constructor(){
        super();
        this.state = {

        }
    }
    render(){
        return (
            <Main>
              <Card>
                <CardBody>
                  <CardTitle>Submit your Yums!</CardTitle>
                  <CardText>
                    <div>
                      <div>
                        <h4>Title:</h4>
                        <input />
                      </div>
                      <div>
                        <h4>Image:</h4>
                        <h6>*In URL format*</h6>
                        <input />
                      </div>
                      <div>
                        <input placholder="Thoughts?.." />
                      </div>
                    </div>
                  </CardText>
                  <CardSubtitle>This is Final!</CardSubtitle>
                  <Button>Submit</Button>
                </CardBody>
              </Card>
            </Main>
        );
    }
};

export default UserCard;