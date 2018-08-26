import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import moment from '../helpers/moment';

import asyncComponent from '../helpers/asyncComponent';

import { dispatchDelSession, reactiveDeletedSession } from '../actions/sessions';

import theme from '../styles/theme';

const CloseSessionIcon = asyncComponent(() => import(/* webpackChunkName: 'closesession' */'./CloseSessionIcon')) 

const SessionsWrapper = styled.div`
  display: flex;
  font-size: ${theme.fonts.small};
  font-weight: 300;
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
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 40px;
  min-width: 30px;
  width: 5%;
`;

const DeleteIcon = styled.i`
  cursor: pointer;
`;

const SessionItem = (props) => {
  if (props.isAdmin) {
    return (
      <SessionsWrapper>
        <Capteur>{props.identifier}</Capteur>
        <StartDate>{moment.unix(props.startDate).format('L LT')}</StartDate>
        <EndDate>{props.endDate ? (props.endDate.toString() === '-999' ? 'Non clôturée' : moment.unix(props.endDate).format('L LT')) : '-'}</EndDate>
        {props.active ?
          <Actions>
            <CloseSessionIcon {...props} />
            <DeleteIcon onClick={() => props.dispatchDelSession(props._id)} className="fa fa-trash-alt" />
          </Actions>
          : <Actions>
            <DeleteIcon onClick={() => props.reactiveDeletedSession(props._id)} className="fa fa-undo-alt" />
          </Actions>}
      </SessionsWrapper>
    );
  }
  return (
    <SessionsWrapper>
      <Capteur>{props.identifier}</Capteur>
      <StartDate>{moment.unix(props.startDate).locale('fr').format('L LT')}</StartDate>
      <EndDate>{props.endDate ? (props.endDate.toString() === '-999' ? 'Non clôturée' : moment.unix(props.endDate).format('L LT')) : '-'}</EndDate>
    </SessionsWrapper>
  );
}

export default connect(null, { dispatchDelSession, reactiveDeletedSession })(SessionItem);
