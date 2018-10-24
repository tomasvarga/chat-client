import styled from 'styled-components';
import COLORS from '../constants/Colors';

const Contact = styled.a`
    padding-left: 1.5em;
    display:block;
    height: 44px;
    font-size: 1.1em;
    line-height: 44px;
    cursor: pointer;
    
    &:hover{
        background: ${COLORS.DARKORANGE};
    }
`;

export default Contact;
