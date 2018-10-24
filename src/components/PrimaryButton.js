import styled from 'styled-components';
import COLORS from '../constants/Colors';

const PrimaryButton = styled.button`
    border: 1px solid ${COLORS.ORANGE};
    border-radius: 8px;
    color: ${COLORS.ORANGE};
    background: none;
    height: 44px;
    width: 120px;
    font-size: 1.2em;
    cursor: pointer;

    &:hover{
        background: ${COLORS.ORANGE};
        color: ${COLORS.WHITE};
    }
`;

export default PrimaryButton;
