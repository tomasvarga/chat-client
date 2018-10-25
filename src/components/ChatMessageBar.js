import React from 'react';
import PropTypes from 'prop-types';
import NewMessageBar from './NewMessageBar';

const onEnterKeyPress = (key, value, onSubmit) => {
  if (key === 'Enter') {
    onSubmit(value);
  }
};

const ChatMessageBar = ({
  onSubmitMessage, onChange, text,
}) => (
  <NewMessageBar.Container>
    <NewMessageBar.Input
      autoFocus
      value={text}
      onKeyPress={e => onEnterKeyPress(e.key, e.target.value, onSubmitMessage)}
      onChange={e => onChange(e.target.value)}
      placeholder="Enter text..."
    />
    <NewMessageBar.Button
      value={text}
      onClick={e => onSubmitMessage(e.target.value)}
    >
      Send
    </NewMessageBar.Button>
  </NewMessageBar.Container>
);

ChatMessageBar.propTypes = {
  text: PropTypes.string.isRequired,
  onSubmitMessage: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ChatMessageBar;
