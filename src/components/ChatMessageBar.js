import React from 'react';
import PropTypes from 'prop-types';
import NewMessageBar from './NewMessageBar';

const onEnterKeyPress = (event, onSubmitMessage) => {
  if (event.key === 'Enter') {
    onSubmitMessage(event);
  }
};

const ChatMessageBar = ({
  onSubmitMessage, onChange, text,
}) => (
  <NewMessageBar.Container>
    <NewMessageBar.Input autoFocus value={text} onKeyPress={e => onEnterKeyPress(e, onSubmitMessage)} onChange={onChange} placeholder="Enter text..." />
    <NewMessageBar.Button value={text} onClick={onSubmitMessage}>Send</NewMessageBar.Button>
  </NewMessageBar.Container>
);

ChatMessageBar.propTypes = {
  text: PropTypes.string.isRequired,
  onSubmitMessage: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ChatMessageBar;
