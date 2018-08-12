import React from 'react';
import styled from 'styled-components';
import ReactModal from 'react-modal';
import DatePicker from 'react-datepicker';
import { connect } from 'react-redux';
import moment from '../helpers/moment';

import Button from './ui/Button';

import { dispatchUpdateSession } from '../actions/sessions'

import theme from '../styles/theme';

const Icon = styled.i`
  padding-right: 5px;
`;

const modalStyles = {
  overlay: {
    alignItems: 'center',
    background: 'fade-out(white, 0.3)',
    bottom:0,
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    left:0,
    position: 'fixed',
    right:0,
    top:0,
    width: '100vw',
    zIndex: 3
  },
  content: {
    backgroundColor: theme.colors.brandPrimary,
    bottom: 'auto',
    display: 'flex',
    flexDirection: 'column',
    left: 'auto',
    position: 'relative',
    right: 'auto',
    textAlign: 'center',
    top: 'auto',
    width: '26.5rem'
  }
}

const ModalTitle = styled.h1`
  font-size: ${theme.fonts.medium};
  font-weight: 300;
  padding-bottom: ${theme.spacing.m};
`;

const Session = styled.p`
  font-size: ${theme.fonts.tiny};
  font-weight: 300;
`;

const CloseIcon = styled.i`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const StyledButton = styled(Button)`
  margin-top: ${theme.spacing.m};
`;


class CloseSessionIcon extends React.Component {
  constructor(props) {
    const now = (props.endDate && props.endDate.toString() !== '-999') ? moment.unix(props.endDate) : moment();
    const remainder = 30 - (now.minute() % 30);
    const startDate = moment(now).add(remainder, 'minutes');
    super(props);
    this.state = {
      showModal: false,
      startDate
    };
  }

  handleOpenModal = () => {
    this.setState({ showModal: true });
  }

  handleCloseModal = () => {
    this.setState({ showModal: false });
  }

  saveModal = () => {
    const endDate = moment(this.state.startDate).unix();
    this.setState({ showModal: false });
    this.props.dispatchUpdateSession(this.props._id, endDate)
  }

  handleChange = (date) => {
    this.setState({
      startDate: date
    });
  }

  render() {
    return (
      <Icon>
        <i onClick={this.handleOpenModal} className="fa fa-calendar-times" />
        <ReactModal
          isOpen={this.state.showModal}
          onRequestClose={this.handleCloseModal}
          style={modalStyles}
        >
          <ModalTitle>Sélectionner une date de fin</ModalTitle>
          <Session>{`Session ${this.props.identifier}, début : ${moment.unix(this.props.startDate).format('L LT')}`}</Session>
          <CloseIcon className="fa fa-times" onClick={this.handleCloseModal}/>
          <DatePicker
            dateFormat="LLL"
            inline
            locale="fr-fr"
            onChange={this.handleChange}
            selected={this.state.startDate}
            showTimeSelect
            timeFormat="HH:mm"
          />
          <StyledButton onClick={this.saveModal}>Enregistrer</StyledButton>
        </ReactModal>
      </Icon>
    );
  }
}

export default connect(null, { dispatchUpdateSession })(CloseSessionIcon);
