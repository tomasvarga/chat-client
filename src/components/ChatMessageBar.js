import React from 'react';
import PropTypes from 'prop-types';
import NewMessageBar from './NewMessageBar';

const ChatMessageBar = ({
  onClick, onPressEnter, onChange, text,
}) => (
  <NewMessageBar.Container>
    <NewMessageBar.Input autoFocus value={text} onKeyPress={onPressEnter} onChange={onChange} placeholder="Enter text..." />
    <NewMessageBar.Button value={text} onClick={onClick}>Send</NewMessageBar.Button>
  </NewMessageBar.Container>
);

ChatMessageBar.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onPressEnter: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ChatMessageBar;
