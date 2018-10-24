import styled from 'styled-components';
import COLORS from '../constants/Colors';

const PanelContainer = styled.span`
   color: ${COLORS.WHITE};
   font-family: 'Verdana';
   width: 20%;
   min-height:100vh;
   position:fixed;
   background: ${COLORS.ORANGE};
   left: 0px;
   top: 0px;
`;

const PanelTitle = styled.span`
    font-size: 1.3em;
    padding-left: 1em;
    padding-bottom: 0.3em;
    display:block;
    height: 54px;
    line-height: 60px;
    border-bottom: 1px solid ${COLORS.DARKORANGE};
    cursor: pointer;

    &:hover{
        background: ${COLORS.WHITE};
        color: ${COLORS.ORANGE};
    }
`;

const Panel = {
  Container: PanelContainer,
  Title: PanelTitle,
};

export default Panel;
