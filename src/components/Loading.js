import styled from 'styled-components';
import COLORS from '../constants/Colors';
import LoadingPanel from './LoadingPanel';

const LoadingChat = styled.div`
    background: ${COLORS.WILDSAND};
    z-index: 1;
    opacity: 0.9;
    position: absolute;
    top: 0px;
    width: 80%;
    min-height: 100vh;
    font-size: 2em;
    text-align: center;
    line-height: 100vh;
    color: ${COLORS.APPLEBLOSSOM};
`;

const Loading = {
  Panel: LoadingPanel,
  Chat: LoadingChat,
};

export default Loading;
