import styled from 'styled-components';
import COLORS from '../constants/Colors';

const Client = styled.div`
    min-height: 100vh;
    width: 100%;
    display:block;
    background: ${COLORS.ORANGE};
    justify-content: flex-end;
    align-items: center;
    display: flex;
    flex-direction: row;
`;

export default Client;
