import React, { Component } from 'react';
import Client from './components/Client';
import GlobalStyle from './global/style';
import Chat from './components/Chat';
import LeftPanel from './components/LeftPanel';
import DUMMYDATA from './constants/DummyData';

class App extends Component {
  state = {
    userId: -1,
    messages: [],
    text: '',
    contacts: [],
    isLoading: true,
  }

  componentDidMount() {
    const promise = new Promise(resolve => setTimeout(resolve, 1000));
    promise.then(() => {
      this.setState({
        messages: DUMMYDATA.MESSAGES,
        contacts: DUMMYDATA.CONTACTS,
        isLoading: false,
        userId: 1,
      });
    });
  }

  getLoadingText = () => {
    const currentDate = new Date();
    const h = currentDate.getHours();
    if (h >= 1 && h < 12) {
      return 'Good morning!';
    }
    if (h >= 12 && h < 17) {
      return 'Good afternoon!';
    }
    if (h >= 17 && h < 22) {
      return 'Good evening!';
    }
    return 'Well, hello sleepy.';
  }

  handleKeysPress = (value) => {
    this.setState({ text: value });
  }

  handleSubmitMessage = (value) => {
    if (value) {
      const { userId, messages } = this.state;
      const newId = messages.length;
      const newMessage = { id: newId, userId, text: value };
      this.setState({ messages: [...messages, newMessage], text: '' });
    }
  }

  render() {
    const {
      messages, userId, text, contacts, isLoading,
    } = this.state;
    return (
      <Client>
        <GlobalStyle />
        <LeftPanel
          contacts={contacts}
          userId={userId}
          isLoading={isLoading}
        />
        <Chat
          messages={messages}
          userId={userId}
          text={text}
          isLoading={isLoading}
          loadingText={this.getLoadingText()}
          handleKeysPress={this.handleKeysPress}
          handleSubmitMessage={this.handleSubmitMessage}
        />
      </Client>
    );
  }
}

export default App;
