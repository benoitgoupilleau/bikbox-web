import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import axios from '../helpers/axios';

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

const LoaderImg = styled.img`
  margin-top: ${theme.spacing.m};
  width: 3rem;
`;

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: props.errorLogin ? 'Identifiants incorrects' : "Console d'administration",
      email: '',
      loading: false,
      password: '',
      blocked: false
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

  onResetPassword = (e) => {
    e.preventDefault();
    this.setState({ loading: true, error: 'Si vous êtes inscrit, nous vous avons envoyé un mail pour réinitialiser votre mot de passe' })
    return axios({ method: 'POST', url: '/adminusers/resetpassword', data: { email: this.state.email }, headers: { 'x-key': process.env.X_KEY } })
  }

  onSubmitLogin = (e) => {
    e.preventDefault();
    if (this.state.password < 8) {
      return this.setState({ error: 'Identifiants incorrects' })
    }
    this.setState({ error: "Console d'administration", loading: true })
    this.props.startLogin(this.state.email, this.state.password).then((r) => {
      if (r.type === 'LOGIN_FAIL' && r.status !== 423) return this.setState({ error: 'Identifiants incorrects', loading: false })
      if (r.status === 423) return this.setState({ error: 'Compte bloqué', loading: false, blocked: true })
      return this.setState({ loading: false })
    }).catch(() => this.setState({ loading: false }));
  }

  render() {
    if (this.state.blocked) {
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
            {!this.state.loading ?
              <Form onSubmit={(e) => this.onResetPassword(e)}>
                <Input type="email" onChange={(e) => this.onEmailChange(e)} name="email" placeholder="Email" autoFocus value={this.state.email} />
                <Button>Réinitialiser votre mot de passe</Button>
              </Form> : undefined}

          </BoxLayout>
        </Background>
      );
    }
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
          {!this.state.loading ? 
            <Form onSubmit={(e) => this.onSubmitLogin(e)}>
              <Input type="email" onChange={(e) => this.onEmailChange(e)} name="email" placeholder="Email" autoFocus value={this.state.email}/>
              <Input type="password" onChange={(e) => this.onPasswordChange(e)} name="password" placeholder="Password" />
              <Button>Se Connecter</Button>
            </Form> :
            <LoaderImg src="/images/loader.gif" alt="Loading" />
          }
          
        </BoxLayout>
      </Background>
    );
  }
}

const mapStateToProps = state => ({
  errorLogin: state.user.errorLogin,
})

export default connect(mapStateToProps, { startLogin })(LoginPage);
