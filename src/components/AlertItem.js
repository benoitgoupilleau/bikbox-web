import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import theme from '../styles/theme';

const AlertWrapper = styled.div`
  display: flex;
  font-size: ${theme.fonts.small};
  font-weight: 300;
  width: 100%;
  word-break: break-all;

  p {
    margin: ${theme.spacing.xs} 0;
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

const AlertItem = (props) => (
  <AlertWrapper>
    <AlertName>{props.name}</AlertName>
    <AlertType>{props.alertType}</AlertType>
    <AlertStatus>{props.status}</AlertStatus>
    <AlertIdentifier>{props.identifier}</AlertIdentifier>
    <AlertLastUpdate>{props.lastUpdatedDate ? moment.unix(props.lastUpdatedDate).locale('fr').format('L LT') : moment.unix(props.createdAt).locale('fr').format('L LT')}</AlertLastUpdate>
  </AlertWrapper>
)

export default AlertItem;
