import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Main from './ui/Main';

import SessionItem from './SessionItem';
import SensorItem from './SensorItem';
import SessionFilter from './SessionFilter';

import { getSessionPlace, getDeletedSession } from '../actions/sessions';
import { getParking } from '../actions/parkings';
import { getAlert } from '../actions/alerts';
import { getSensor } from '../actions/sensors';
import { sessionPerParking, filterSession } from '../selectors/sessions';
import theme from '../styles/theme';

import 'react-datepicker/dist/react-datepicker-cssmodules.css'

const SensorList = styled.div`
  background: white;
  border-radius: 10px;
  padding: ${theme.spacing.s};
  margin-bottom: ${theme.spacing.s};
`;

const SensorTitle = styled.div`
  border-bottom: 1px solid ${theme.colors.brandTertiary};
  display: flex;
  width: 100%;
`;

const SensorContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SessionList = styled.div`
  background: white;
  border-radius: 10px;
  padding: ${theme.spacing.s};
  margin-bottom: ${theme.spacing.s};
`;

const SessionsTitle = styled.div`
  border-bottom: 1px solid ${theme.colors.brandTertiary};
  display: flex;
  padding: ${theme.spacing.xs} 0;
  width: 100%;
`;

const Capteur = styled.div`
  width: 40%;
`;

const StartDate = styled.div`
  width: 30%;
`;

const EndDate = styled.div`
  width: 25%;
`;

const Actions = styled.div`
  max-width: 40px;
  min-width: 30px;
  text-align: right;
  width: 5%;
`;

class DashboardPage extends React.Component {
  componentDidMount() {
    if (!this.props.userDataLoaded) {
      this.props.getSessionPlace();
      this.props.getParking();
      this.props.getSensor();
    }
    if (!this.props.adminDataLoaded) {
      this.props.getAlert();
      this.props.getDeletedSession();
    }
  }

  render() {
    return (
      <Main pathName={this.props.location.pathname} >
        DashBoard
        <SensorList>
          <SensorTitle>Etat des capteurs</SensorTitle>
          <SensorContainer>
            {this.props.sensors.map((sensor, index) => <SensorItem
              key={index} {...sensor}
              session={this.props.sessionPlace.filter(session => (session.identifier === sensor.identifier && session.endDate === null)).length > 0}
              alert={this.props.alerts.filter(alert => (alert.identifier === sensor.identifier && alert.status === 'opened'))}
            />)}
          </SensorContainer>
        </SensorList>
				<SessionList>
					<SessionFilter />
          <SessionsTitle>
            <Capteur>Capteur</Capteur>
            <StartDate>Date de début</StartDate>
            <EndDate>Date de fin</EndDate>
            {this.props.userAdmin ? <Actions><i className="fa fa-wrench"/></Actions> : undefined}
          </SessionsTitle>
          {filterSession(this.props.sessionPlace, this.props.sorting, this.props.filter).map((session, index) => <SessionItem key={index} {...session} isAdmin={this.props.userAdmin} />)}
        </SessionList>
      </Main>
    );
  }
}

const mapStateToProps =  state => ({
  userAdmin: state.user.user.userType === 'admin',
  sessionPlace: state.sessions.sessionPlace,
  filter: state.sessionFilter.filter,
  sorting: state.sessionFilter.sorting,
  userDataLoaded: state.sessions.sessionPlaceLoaded && state.parkings.parkingsLoaded && state.sensors.sensorsLoaded,
  errorSession: state.sessions.errorLoading,
  parkings: state.parkings.parkings,
  errorParking: state.parkings.errorLoading,
  adminDataLoaded: state.alerts.alertsLoaded || state.user.user.userType !== 'admin',
  sensors: state.sensors.sensors,
  alerts: state.alerts.alerts,
  errorSensor: state.sensors.errorLoading,
  data: sessionPerParking(state.parkings.parkings, state.sessions.sessionPlace)
})

export default connect(mapStateToProps, {
  getSessionPlace,
  getParking,
  getAlert,
  getSensor,
  getDeletedSession
})(DashboardPage);
