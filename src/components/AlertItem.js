import React from 'react';
import styled from 'styled-components';
import moment from '../helpers/moment';

import theme from '../styles/theme';
import trad from '../text/traductions';

const AlertWrapper = styled.div`
  display: flex;
  font-size: ${props => props.status === 'closed' ? theme.fonts.tiny : theme.fonts.small};
  ${props => props.status === 'closed' && 'font-style: italic;'};
  font-weight: ${props => props.status === 'opened' ? 'bold' : 300};
  width: 100%;
  word-break: break-all;

  p {
    margin: ${theme.spacing.xs} 0;
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

const AlertItem = (props) => (
  <AlertWrapper status={props.status}>
    <AlertName>{props.name}</AlertName>
    <AlertType>{props.alertType}</AlertType>
    <AlertStatus>{trad.alertStatus[props.status]}</AlertStatus>
    <AlertIdentifier>{props.identifier}</AlertIdentifier>
    <AlertLastUpdate>{props.lastUpdatedDate ? moment.unix(props.lastUpdatedDate).format('L LT') : moment.unix(props.createdAt).format('L LT')}</AlertLastUpdate>
    <Actions>
      <i onClick={() => props.closeAlert(props._id)} className="fa fa-times" />
    </Actions>
  </AlertWrapper>
)

export default AlertItem;
