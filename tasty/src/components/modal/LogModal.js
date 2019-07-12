import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import styled from 'styled-components';

import { login, newUser } from '../../store/actions';

const Main = styled.div`
  display: flex;
  flex-direction: column;
`

const Top = styled.div`
  display: flex;
  flex-direction: row;
`

const Test = styled.div`
  width: 49.5%;
  text-align: center;
`

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

class LogModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      sign: {
        email: '',
        name: '',
        address: '',
        city: '',
        state: '',
        "zip code": '',
        password: '',
      },
      creds: {
        email: '',
        password: '',
      }
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  handleChanges = e => {
    this.setState({
        creds: {
            ...this.state.creds,
            [e.target.name]: e.target.value,
        }
    })
  }

  handleSignChanges = e => {
    this.setState({
        sign: {
            ...this.state.sign,
            [e.target.name]: e.target.value,
        }
    })
  }

  login = () => {
    this.props.login(this.state.creds);
    this.toggle();
  }

  newUser = () => {
    this.props.newUser(this.state.sign);
    this.toggle();
    this.setState({
      sign: {
        email: '',
        name: '',
        address: '',
        city: '',
        state: '',
        "zip code": '',
        password: '',
      }
    })
  }

  render() {
    return (
      <div>
        <Button color="secondary" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{this.props.type}</ModalHeader>
          <ModalBody>
            <form>
              {(this.props.type === 'Log In') ? (
                <div>
                  <h1>Username</h1>
                  <input onChange={this.handleChanges} name="email" placeholder="Enter Email" value={this.state.creds.email} />
                  <h1>Password</h1>
                  <input onChange={this.handleChanges} name="password" placeholder="Enter Password" value={this.state.creds.password} />
                </div>
              ) : (
                <Main>
                  <Top>
                    <Test>
                      <h3>E-Mail</h3>
                      <input onChange={this.handleSignChanges} type="text" name="email" placeholder="Enter E-Mail" value={this.state.sign.email} />
                      <h3>Name</h3>
                      <input onChange={this.handleSignChanges} type="text" name="name" placeholder="Enter Name" value={this.state.sign.name} />
                      <h3>Address</h3>
                      <input onChange={this.handleSignChanges} type="text" name="address" placeholder="Enter Username" value={this.state.sign.address} />
                    </Test>
                    <Test>
                      <h3>City</h3>
                      <input onChange={this.handleSignChanges} type="text" name="city" placeholder="Enter City" value={this.state.sign.city} />
                      <h3>State</h3>
                      <input onChange={this.handleSignChanges} type="text" name="state" placeholder="Enter State" value={this.state.sign.state} />
                      <h3>Zipcode</h3>
                      <input onChange={this.handleSignChanges} type="text" name="zip code" placeholder="Enter Zip Code" value={this.state.sign["zip code"]} />
                    </Test>
                  </Top>
                  <Bottom>
                    <h3>Password</h3>
                    <input onChange={this.handleSignChanges} type="password" name="password" placeholder="Enter Password" value={this.state.sign.password} />
                  </Bottom>
                </Main>
              )}
            </form>
          </ModalBody>
          <ModalFooter>
                {(this.props.type === 'Sign Up') ? (
                  <div>
                    <Button color="primary" onClick={this.newUser}>{this.props.type}</Button>{' '}
                  </div>
                ) : (
                  <div>
                    <Button color="primary" onClick={this.login}>{this.props.type}</Button>{' '}
                  </div>
                )}
            <Button color="danger" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  
})

export default withRouter(connect(mapStateToProps, { login, newUser })(LogModal));