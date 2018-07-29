import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { connect } from 'react-redux';

import CloseSessionIcon from './CloseSessionIcon';

import { dispatchDelSession } from '../actions/sessions';

import theme from '../styles/theme';

const SessionsWrapper = styled.div`
  display: flex;
  font-size: ${theme.fonts.small};
  font-weight: 300;
  width: 100%;

  p {
    margin: ${theme.spacing.xs} 0;
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
  min-width: 30px;
  text-align: right;
  width: 5%;
`;

const DeleteIcon = styled.i`
  cursor: pointer;
`;

const SessionItem = (props) => (
  <SessionsWrapper>
    <Capteur>{props.identifier}</Capteur>
    <StartDate>{moment.unix(props.startDate).locale('fr').format('L LT')}</StartDate>
    <EndDate>{props.endDate ? (props.endDate.toString() === '-999' ? 'Non clôturée' : moment.unix(props.endDate).locale('fr').format('L LT')) : '-'}</EndDate>
    {props.isAdmin ? 
      <Actions>
        <CloseSessionIcon {...props}/>
        <DeleteIcon onClick={() => props.dispatchDelSession(props._id)} className="fa fa-trash-alt" />
      </Actions>
    : undefined}
  </SessionsWrapper>
)

export default connect(null, { dispatchDelSession })(SessionItem);
