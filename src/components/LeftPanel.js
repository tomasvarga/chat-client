import React from 'react';
import PropTypes from 'prop-types';
import ContactsList from './ContactsList';
import Panel from './Panel';

const LeftPanel = ({ contacts, userId }) => (
  <Panel.Container>
    <Panel.Title>Contacts</Panel.Title>
    <ContactsList contacts={contacts} userId={userId} />
  </Panel.Container>
);

LeftPanel.propTypes = {
  contacts: PropTypes.instanceOf(Array).isRequired,
  userId: PropTypes.number.isRequired,
};

export default LeftPanel;
