import styled from 'styled-components';
import COLORS from '../constants/Colors';

const DefaultBubble = styled.span`
    min-width: 44px;
    max-width: 400px;
    min-height: 30px;
    border-radius: 4px;
    display:block;
    background: ${COLORS.WHITE};
    padding: 15px;
    font-family: 'Verdana';
    text-align: justify;
    color: ${COLORS.WHITE};
    font-size: 1.2em;
    margin-top: 30px;
    margin-left: 1em;
    overflow-wrap: break-word;
`;

const OrangeBubble = styled(DefaultBubble)`
    background: ${COLORS.ORANGE};
    align-self: flex-start;
`;

const GrayBubble = styled(DefaultBubble)`
    background: ${COLORS.GRAY};
    position: relative;
    margin-right: 20px;
    align-self: flex-end;
`;

const Bubble = {
  Orange: OrangeBubble,
  Gray: GrayBubble,
};

export default Bubble;
