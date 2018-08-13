import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { history } from '../routers/AppRouter';

import Background from './ui/Background';
import BoxLayout from './ui/BoxLayout';
import Button from './ui/Button';
import LoadingPage from './ui/LoadingPage';

import { updatePassword } from '../actions/user';

import theme from '../styles/theme';

const BoxTitle = styled.h1`
  line-height: 1;
  margin: 0 0 ${theme.spacing.m} 0;
`;

const BoxForm = styled.form`
  display: flex;
  flex-direction: column;
  > * {
    margin-bottom: ${theme.spacing.m};
  }
`;

const Input = styled.input`
  border: none;
  font-weight: 300;
  font-size: ${theme.fonts.small};
  height: 30px;
  padding: ${theme.spacing.s};
`;

const Warning = styled.p`
  font-size: ${theme.fonts.tiny};
  font-style: italic;
  font-weight: 300;
  margin-top: 0;
`;

export class ResetPasswordPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      password1: null,
      password2: null,
      error: false,
      errorMessage: '',
      passwordUpdated: false,
      loading: false
    }
  }

  onChangeNewPwd = (e) => {
    e.preventDefault();
    this.setState({ password1: e.target.value, error: false})
  }

  onChangeConfPwd = (e) => {
    e.preventDefault();
    this.setState({ password2: e.target.value, error: false });
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.password1 || this.state.password1.length < 8) {
      return this.setState({ error: true, errorMessage: 'Le mot de passe doit contenir au moins 8 charactères'})
    }
    if (this.state.password1 !== this.state.password2) {
      return this.setState({ error: true, errorMessage: 'Les mots de passe ne correspondent pas'})
    }
    this.setState({ loading: true })
    this.props.updatePassword(this.props.match.params.token, this.state.password1)
      .then(() => this.setState({
        loading: false,
        passwordUpdated: true,
        password1: '',
        password2: ''
      }, () => setTimeout(() => {
        history.push('/');
      }, 2000)))
      .catch(() => this.setState({
        loading: false,
        passwordUpdated: false,
        password1: '',
        password2: '',
        error: true,
        errorMessage: 'Impossible de mettre à jour votre mot de passe. Veuillez ressayer dans quelques instants.'
      }));
  }

  render() {
    if (this.state.loading)
      return <LoadingPage />;
    return (
      <Background>
        <BoxLayout width={'32rem'}>
          <BoxTitle>
            <img
              src="https://static.wixstatic.com/media/078127_6d46d897f14149ab9de07f4a1b1295c7~mv2.png/v1/crop/x_62,y_139,w_988,h_366/fill/w_480,h_164,al_c,usm_0.66_1.00_0.01/078127_6d46d897f14149ab9de07f4a1b1295c7~mv2.png"
              alt="Bik'box"
              width="220px"
            />
          </BoxTitle>
          {!this.state.passwordUpdated ? <p>Saisissez votre nouveau mot de passe</p> : <p>Votre mot de passe a été mis à jour</p>}
          {!this.state.passwordUpdated ? 
            <BoxForm onSubmit={this.onSubmit} >
              <Input type="password" ref="password1" name="password" placeholder="Nouveau mot de passe" autoFocus onChange={this.onChangeNewPwd} />
              <Input type="password" ref="password2" name="password" placeholder="Confirmer le mot de passe" onChange={this.onChangeConfPwd} />
              {this.state.error ? <Warning>{this.state.errorMessage}</Warning> : <Warning></Warning>}
              <Button>Enregistrer</Button>
            </BoxForm> : <div></div>}
        </BoxLayout>
      </Background>
    );
  }
}

export default connect(null, { updatePassword })(ResetPasswordPage);