import styled from 'styled-components';
import COLORS from '../constants/Colors';

const Loading = styled.div`
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
    animation: fadeOut2 1s;
    visibility: hidden;

    @keyframes fadeOut2 {
        99% {visibility: visible;}
        100% {visibility: hidden;}
    }
`;

export default Loading;
