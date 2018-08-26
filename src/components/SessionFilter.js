import React from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import { connect } from 'react-redux';
import moment from '../helpers/moment'

import { updateStartDate, updateEndDate, updateText } from '../actions/sessionFilter'

import theme from '../styles/theme';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  padding: 0 ${theme.spacing.m} ${theme.spacing.m};
  width: 100%;
`;

const Search = styled.div`
  align-items: center;
  display: flex;
  width: 50%;
`;
const SearchInput = styled.input`
  border-bottom: thin solid ${theme.colors.brandTertiary};
  border-left: none;
  border-right: none;
  border-top: none;
  padding: 10px;
  width: 100%
  &:focus{
    outline-width: 0;
  }
`;

const Selector = styled.i`
  padding-right: ${theme.spacing.s};
`;

const Range = styled.div`
  align-items: center;
  display: flex;
  width: 50%;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  max-width: 30rem;
`;

const Dates = styled.div`
  font-size: ${theme.fonts.tiny};
  font-weight: 200;
  margin: 0 ${theme.spacing.s};
  width: 100%;
`;

const DateInput = styled.input`
  border: none;
  color: ${theme.colors.brandPrimary};
  font-size: ${theme.fonts.tiny};;
  font-weight: 500;
  padding: 3px;
  width: 100%
  &:focus{
    outline-width: 0;
  }
`;

const SessionFilter = (props) => (
  <Wrapper>
    <Search>
      <Selector className="fas fa-search" />
      <SearchInput type="text" value={props.text} onChange={(e) => {
        e.preventDefault()
        props.updateText(e.target.value)
      }} />
    </Search>
    <Range>
      <Container>
        <Dates>
          Session entre le
        <DatePicker
            selected={props.startDate}
            selectsStart
            startDate={props.startDate}
            endDate={props.endDate}
            onChange={props.updateStartDate}
            customInput={<DateInput />}
          />
        </Dates>
        <Dates>
          et le
        <DatePicker
            selected={props.endDate}
            selectsEnd
            startDate={props.startDate}
            endDate={props.endDate}
            onChange={props.updateEndDate}
            customInput={<DateInput />}
          />
        </Dates>
      </Container>
    </Range>
  </Wrapper>
)

const mapStateToProps = state => ({
  startDate: moment.unix(state.sessionFilter.filter.startDate),
  endDate: moment.unix(state.sessionFilter.filter.endDate),
  text: state.sessionFilter.filter.text 
})

export default connect(mapStateToProps, { updateStartDate, updateEndDate, updateText })(SessionFilter);