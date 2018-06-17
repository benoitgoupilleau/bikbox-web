import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import validator from 'validator';
import { startLogin } from '../actions/user';

import Background from './ui/Background';
import BoxLayout from './ui/BoxLayout';
import Button from './ui/Button';

import theme from '../styles/theme';

const BoxTitle = styled.h1`
  line-height: 1;
  margin: 0 0 ${theme.spacing.m} 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  border: none;
  padding: 10px;
  margin-bottom: 10px;
`;

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: props.errorLogin ? 'Identifiants incorrects' : "Console d'administration",
      email: '',
      password: ''
    }
  }

  onEmailChange = (e) => {
    e.preventDefault();
    this.setState({ email: e.target.value.trim() })
  }

  onPasswordChange = (e) => {
    e.preventDefault();
    this.setState({ password: e.target.value.trim() })
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.password < 8) {
      return this.setState({ error: 'Identifiants incorrects' })
    }
    return this.props.startLogin(this.state.email, this.state.password);
  }

  render() {
    return (
      <Background >
        <BoxLayout>
          <BoxTitle>
            <img
              src="https://static.wixstatic.com/media/078127_6d46d897f14149ab9de07f4a1b1295c7~mv2.png/v1/crop/x_62,y_139,w_988,h_366/fill/w_480,h_164,al_c,usm_0.66_1.00_0.01/078127_6d46d897f14149ab9de07f4a1b1295c7~mv2.png"
              alt="Bik'box"
              width="220px"
            />
          </BoxTitle>
          <p>{this.state.error}</p>
          <Form onSubmit={(e) => this.onSubmit(e)}>
            <Input type="email" onChange={(e) => this.onEmailChange(e)} name="email" placeholder="Email" autoFocus />
            <Input type="password" onChange={(e) => this.onPasswordChange(e)}  name="password" placeholder="Password" />
            <Button>Se Connecter</Button>
          </Form>
        </BoxLayout>
      </Background>
    );
  }
}

const mapStateToProps = state => ({
  errorLogin: state.user.errorLogin
})

export default connect(mapStateToProps, { startLogin })(LoginPage);
