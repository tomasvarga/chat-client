import React from 'react';
import styled from 'styled-components';
import COLORS from '../constants/Colors';

const LoadingContactList = styled.div`
    width: 100%;
    position: absolute;
    min-height: 100vh;
    text-align: center;
    line-height: 100vh;
`;

const LoadingContact = styled.div`
    margin-left: 1.5em;
    display: block;
    height: 22px;
    font-size: 1.1em;
    line-height: 44px;
    background: ${COLORS.DARKORANGE};
    border-radius: 22px;
    margin-top: 15px;
    width: 60%;
`;

const LoadingContactShort = styled(LoadingContact)`
    width: 40%;
`;

const LoadingContactHeader = styled(LoadingContact)`
    height: 44px;
    width: 80%;
    margin-left: 1em;
    margin-top: 10px;
`;

const LoadingPanel = () => (
  <LoadingContactList>
    <LoadingContactHeader />
    <LoadingContactShort />
    <LoadingContact />
    <LoadingContactShort />
  </LoadingContactList>
);

export default LoadingPanel;
