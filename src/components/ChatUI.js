import styled from 'styled-components';
import COLORS from '../constants/Colors';
import ChatMessageBar from './ChatMessageBar';

const ChatContainer = styled.div`
    background: ${COLORS.ROMANTIC};
    min-height: 100vh;
    width: 80%;
`;

const MessageBubbles = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 100px;
`;

const ChatUI = {
  Container: ChatContainer,
  MessageBubbles,
  NewMessageBar: ChatMessageBar,
};

export default ChatUI;
