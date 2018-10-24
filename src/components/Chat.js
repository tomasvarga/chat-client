import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Bubble from './Bubble';
import ChatUI from './ChatUI';
import FakeLoading from './Loading';

class Chat extends Component {
  messagesEnd = React.createRef();

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    this.messagesEnd.current.scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    const {
      data, userId, text, handleSendButtonPress, handleEnterKeyPress, handleKeysPress, loadingText,
    } = this.props;
    return (
      <ChatUI.Container>
        <FakeLoading>{loadingText}</FakeLoading>
        <ChatUI.MessageBubbles>
          {(data) && data.map(message => ((message.userId === userId)
            ? <Bubble.Gray key={message.id}>{message.text}</Bubble.Gray>
            : <Bubble.Orange key={message.id}>{message.text}</Bubble.Orange>
          ))}
          <div ref={this.messagesEnd} />
        </ChatUI.MessageBubbles>
        <ChatUI.NewMessageBar
          text={text}
          onClick={handleSendButtonPress}
          onPressEnter={handleEnterKeyPress}
          onChange={handleKeysPress}
        />
      </ChatUI.Container>
    );
  }
}

Chat.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
  userId: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  handleSendButtonPress: PropTypes.func.isRequired,
  handleEnterKeyPress: PropTypes.func.isRequired,
  handleKeysPress: PropTypes.func.isRequired,
  loadingText: PropTypes.string,
};

Chat.defaultProps = {
  loadingText: 'Loading...',
};

export default Chat;
