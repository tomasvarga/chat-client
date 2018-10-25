import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Bubble from './Bubble';
import ChatUI from './ChatUI';
import Loading from './Loading';

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
      messages, userId, text, handleSubmitMessage, handleKeysPress, loadingText, isLoading,
    } = this.props;
    return (
      <ChatUI.Container>
        {isLoading && <Loading.Chat>{loadingText}</Loading.Chat>}
        <ChatUI.MessageBubbles>
          {(messages) && messages.map(message => ((message.userId === userId)
            ? <Bubble.Gray key={message.id}>{message.text}</Bubble.Gray>
            : <Bubble.Orange key={message.id}>{message.text}</Bubble.Orange>
          ))}
          <div ref={this.messagesEnd} />
        </ChatUI.MessageBubbles>
        <ChatUI.NewMessageBar
          text={text}
          onSubmitMessage={handleSubmitMessage}
          onChange={handleKeysPress}
        />
      </ChatUI.Container>
    );
  }
}

Chat.defaultProps = {
  loadingText: 'Loading...',
};

Chat.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
  userId: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  handleSubmitMessage: PropTypes.func.isRequired,
  handleKeysPress: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  loadingText: PropTypes.string,
};

export default Chat;
