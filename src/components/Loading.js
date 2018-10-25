import styled from 'styled-components';
import COLORS from '../constants/Colors';

const Loading = styled.div`
    background: ${COLORS.WILDSAND};
    z-index: 1;
    opacity: 0.9;
    position: absolute;
    top: 0px;
    width: 100%;
    min-height: 100vh;
    font-size: 2em;
    text-align: center;
    line-height: 100vh;
    color: ${COLORS.APPLEBLOSSOM};
`;

export default Loading;
