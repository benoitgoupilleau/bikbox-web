import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import theme from '../styles/theme';

const SensorWrapper = styled.div`
  color: ${(props) => (props.session ? 'orange' : 'lightgreen')};
  font-size: ${theme.fonts.small};
  font-weight: 300;
  margin: ${theme.spacing.s};
  position: relative;
`;

const Badge = styled.div`
  align-items: center;
  background: red;
  border-radius: 20px;
  color: white;
  display: flex;
  flex-direction: column;
  font-size: ${theme.fonts.tiny};
  height: 20px;
  justify-content: center;
  position: absolute;
  right: -15px;
  text-align: center;
  top: -10px;
  width: 20px;
`;

const SensorItem = (props) => {
  const nbAlerts = props.alert.length >= 100 ? '+99' : props.alert.length;
  return (
    <SensorWrapper session={props.session} hasAlert={props.alert.length > 0}>
      {props.identifier}
      {props.alert.length > 0 ? <Badge><p>{nbAlerts}</p></Badge> : undefined}
    </SensorWrapper>
  )
}

export default SensorItem;
