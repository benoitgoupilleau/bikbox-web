import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Main from './ui/Main';
import AlertItem from './AlertItem';
import { getAlert } from '../actions/alerts';

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
  width: 30%;
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

class AlertPage extends React.Component{
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
          </AlertsTitle>
          {this.props.alerts.map((alert, index) => <AlertItem key={index} {...alert} />)}
        </AlertsList>
      </Main>
    );
  }
}

const mapStateToProps = state => ({
  adminDataLoaded: state.alerts.alertsLoaded,
  alerts: state.alerts.alerts
})

export default connect(mapStateToProps, { getAlert })(AlertPage);
