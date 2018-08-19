import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Main from './ui/Main';
import AlertItem from './AlertItem';
import { getAlert, closeAlert, readAlert } from '../actions/alerts';
import { filterAlert } from '../selectors/alerts'

import theme from '../styles/theme';

const AlertsList = styled.div`
  background: white;
  border-radius: 10px;
  padding: ${theme.spacing.s};
`;

const AlertsTitle = styled.div`
  border-bottom: 1px solid ${theme.colors.brandTertiary};
  display: flex;
  width: 100%;
  word-break: break-all;
  p {
    margin: ${theme.spacing.s} 0;
  }
`;

const AlertName = styled.p`
  width: 25%;
`;

const AlertType = styled.p`
  width: 15%;
`;

const AlertStatus = styled.p`
  width: 15%;
`;

const AlertIdentifier = styled.p`
  width: 20%;
`;

const AlertLastUpdate = styled.p`
  width: 30%;
`;

const Actions = styled.p`
  width: 5%;
`;

class AlertPage extends React.PureComponent {
  componentDidMount() {
    if (!this.props.adminDataLoaded) {
      this.props.getAlert();
    }
  }

  render() {
    return (
      <Main pathName={this.props.location.pathname} >
        Alerts
        <AlertsList>
          <AlertsTitle>
            <AlertName>Nom</AlertName>
            <AlertType>Type</AlertType>
            <AlertStatus>Statut</AlertStatus>
            <AlertIdentifier>Capteur/Station</AlertIdentifier>
            <AlertLastUpdate>Dernière mise à jour</AlertLastUpdate>
            <Actions></Actions>
          </AlertsTitle>
          {this.props.alerts.map((alert, index) => <AlertItem key={index} {...alert} closeAlert={this.props.closeAlert} readAlert={this.props.readAlert}/>)}
        </AlertsList>
      </Main>
    );
  }
}

const mapStateToProps = state => ({
  adminDataLoaded: state.alerts.alertsLoaded,
  alerts: filterAlert(state.alerts.alerts, state.alertFilter)
})

export default connect(mapStateToProps, { getAlert, closeAlert, readAlert })(AlertPage);
