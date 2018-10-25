import React from 'react';
import PropTypes from 'prop-types';
import ContactsList from './ContactsList';
import Panel from './Panel';
import Loading from './Loading';

const LeftPanel = ({ contacts, userId, isLoading }) => (
  <Panel.Container>
    {isLoading && <Loading.Panel />}
    <Panel.Title>Contacts</Panel.Title>
    <ContactsList contacts={contacts} userId={userId} />
  </Panel.Container>
);

LeftPanel.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    userId: PropTypes.number.isRequired,
  })).isRequired,
  userId: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default LeftPanel;
