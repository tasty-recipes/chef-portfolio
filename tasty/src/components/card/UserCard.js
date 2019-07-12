import React from 'react';
import { Card, CardBody,
  CardTitle, Button } from 'reactstrap';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { users } from '../../store/actions';

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

    componentDidMount(){
      this.props.users();
    }

    render(){
        return (
            <Main>
            {(this.props.type === 'newBlog') ? (
              <Card>
                <CardBody>
                  <CardTitle>Submit your Yums!</CardTitle>
                  <div>
                    <div>
                      <div>
                        <h4>Title</h4>
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
                  </div>
                  <Button>Submit</Button>
                </CardBody>
              </Card>
            ) : (
              <Card>
                <CardBody>
                  <CardTitle></CardTitle>
                  {this.props.userList.map(user => {
                    return (
                      <div>

                      </div>
                    )
                  })}
                </CardBody>
              </Card>
            )}
              
            </Main>
        );
    }
};

const mapStateToProps = state => ({
  userList: state.users,
})

export default connect(mapStateToProps, { users })(UserCard);