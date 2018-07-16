import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import theme from '../styles/theme';

const SensorWrapper = styled.div`
  color: ${(props) => (props.alert ? 'red' : (props.session ? 'orange' : 'lightgreen'))};
  font-size: ${theme.fonts.small};
  font-weight: 300;
  margin: ${theme.spacing.s};
`;


const SensorItem = (props) => (
  <SensorWrapper session={props.session} alert={props.alert}>
  {props.identifier}
  </SensorWrapper>
)

export default SensorItem;
