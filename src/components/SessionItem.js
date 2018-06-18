import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

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
  width: 30%;
`;

const SessionItem = (props) => (
  <SessionsWrapper>
    <Capteur>{props.identifier}</Capteur>
    <StartDate>{moment(props.startDate).locale('fr').format('L LT')}</StartDate>
    <EndDate>{props.endDate ? moment(props.endDate).locale('fr').format('L LT') : '-'}</EndDate>
  </SessionsWrapper>
)

export default SessionItem;
