import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import moment from '../helpers/moment'
 
import Main from './ui/Main';
import SessionItem from './SessionItem';
import { filterSession } from '../selectors/sessions';
import { getDeletedSession } from '../actions/sessions';

import theme from '../styles/theme';


const SessionList = styled.div`
  background: white;
  border-radius: 10px;
  padding: ${theme.spacing.s};
  margin-bottom: ${theme.spacing.s};
`;

const SessionsTitle = styled.div`
  border-bottom: 1px solid ${theme.colors.brandTertiary};
  display: flex;
  width: 100%;

  p {
    margin: ${theme.spacing.s} 0;
  }
`;

const Capteur = styled.p`
  width: 40%;
`;

const StartDate = styled.p`
  width: 30%;
`;

const EndDate = styled.p`
  width: 25%;
`;

const Actions = styled.p`
  text-align: right;
  width: 5%;
`;

const AdminPage = (props) => {
  if (!props.deletedSessionLoaded) props.getDeletedSession();
  return (
    <Main pathName={props.location.pathname} >
      Admin (version de dev)
      <SessionList>
        <SessionsTitle>
          <Capteur>Capteur</Capteur>
          <StartDate>Date de début</StartDate>
          <EndDate>Date de fin</EndDate>
          <Actions><i className="fa fa-wrench" /></Actions>
        </SessionsTitle>
        {props.filteredSession.map((session, index) => <SessionItem key={index} {...session} isAdmin />)}
      </SessionList>
      <p>Pour ajouter des entités, users, parking, stations, capteurs ou encore vélos, vous devez utiliser Postman avec le token suivant en header 'x-auth' : </p>
      <p style={{ wordBreak: 'break-all'}}>{props.token}</p>
      <h3>Entités</h3>
      <div>route: /entity</div>
      <div>body :
        "name": "Bik'Box",
        "description": "Optimisez vos parkings vélos"
      </div>
      <h3>User</h3>
      <div>route: /adminusers (un email est envoyé à chaque nouveau user)</div>
      <div>body :
        "_entity": "_id d'une entité existante",
        "userType": "admin", (valeurs possibles : 'admin', 'entityManager', 'admin')
        "email": "email@me.com"
      </div>
      <p></p>
      <div>route: /adminusers/entity (pour donner accès à une entité à un user donnée</div>
      <div>body :
        "userId": "_id du user auquel on souhaite donner accès",
        "entiyId": "_id de l'entité auquelle le user doit avoir accès"
      </div>
      <h3>Parking</h3>
      <div>route: /parking</div>
      <div>body :
        "name": "parking1",
        "description": "Parking Bik'Box",
        "address": "Paris",
        "_entity": "_id d'une entité existante"
      </div>
      <h3>Station</h3>
      <div>route: /station</div>
      <div>body :
        "name": "station1",
        "identifier": "bb1",
        "_parking": "_id d'un parking existante",
        "_entity": "_id d'une entité existante",
        "firmwareVersion": "0.1",
        "voltage": "120V"
      </div>
      <h3>Capteur</h3>
      <div>route: /sensor</div>
      <div>body :
        "identifier": "bb1c1",
        "_station": "_id d'une station existante",
        "_entity": "_id d'une entité existante",
        "_parking": "_id du parking",
        "firmwareVersion": "0.1",
        "voltage": "120V"
      </div>
      <h3>Vélo</h3>
      <div>route: /bike</div>
      <div>body :
        "identifier": "bike1",
        "_entity": "_id d'une entité existante",
        "_user": "_id d'un user" (facultatif)
      </div>
    </Main>
  );
}

const mapStateToProps = state => ({
  token: state.user.authToken,
  filteredSession: filterSession(state.sessions.deletedSession, { value: 'startDate', order: -1 }, {
    text: '', 
    startDate: moment(0).startOf('day').unix(),
    endDate: moment().endOf('day').unix()}),
  deletedSessionLoaded: state.sessions.deletedSessionLoaded
})

export default connect(mapStateToProps, { getDeletedSession })(AdminPage);
