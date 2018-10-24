import PropTypes from 'prop-types';
import React from 'react';
import Contact from './Contact';

const ContactsList = ({ contacts, userId }) => (
  <div>
    {contacts.map(contact => (
      (userId === contact.userId)
        ? <Contact key={contact.userId}>{`${contact.name} (you)`}</Contact>
        : <Contact key={contact.userId}>{contact.name}</Contact>
    ))}
  </div>
);

ContactsList.propTypes = {
  contacts: PropTypes.instanceOf(Array).isRequired,
  userId: PropTypes.number.isRequired,
};

export default ContactsList;
