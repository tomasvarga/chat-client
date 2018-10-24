import styled from 'styled-components';
import PrimaryButton from './PrimaryButton';
import COLORS from '../constants/Colors';

const Container = styled.div`
    background: ${COLORS.WHITE};
    height: 64px;
    width: 80%;
    position: fixed;
    bottom: 0px;
    display: flex;
`;

const Input = styled.input`
    height: 63px;
    outline: 0;
    font-size: 1.2em;
    padding-left: 1em;
    border:none;
    margin:0px;
    flex-grow: 1;
`;

const Button = styled(PrimaryButton)`
     align-self: flex-end;
     position: relative;
     bottom: 10px;
     margin-right: 10px;
`;

const NewMessage = {
  Container,
  Input,
  Button,
};

export default NewMessage;
