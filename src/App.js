import React, { Component } from 'react';
import Client from './components/Client';
import GlobalStyle from './global/style';
import Chat from './components/Chat';
import Panel from './components/LeftPanel';
import Dummy from './Dummy';

class App extends Component {
  state = {
    userId: 1,
    data: Dummy.Data,
    text: '',
    contacts: Dummy.Contacts,
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

  addNewMessage = (text) => {
    const { userId, data } = this.state;
    if (!text) {
      return null;
    }
    const lastId = data.length - 1;
    const newId = (lastId + 1);
    const newMessage = { id: newId, userId, text };
    this.setState({ data: [...data, newMessage], text: '' });
    return null;
  }

  handleEnterKeyPress = (event) => {
    if (event.key !== 'Enter') {
      return null;
    }
    const text = event.target.value;
    this.addNewMessage(text);
    return null;
  }

  handleSendButtonPress = (event) => {
    const text = event.target.value;
    this.addNewMessage(text);
  }

  handleKeysPress = (event) => {
    const newText = event.target.value;
    this.setState({ text: newText });
  }

  render() {
    const {
      data, userId, text, contacts,
    } = this.state;
    return (
      <Client>
        <GlobalStyle />
        <Panel contacts={contacts} userId={userId} />
        <Chat
          data={data}
          userId={userId}
          text={text}
          loadingText={this.getLoadingText()}
          handleKeysPress={this.handleKeysPress}
          handleSendButtonPress={this.handleSendButtonPress}
          handleEnterKeyPress={this.handleEnterKeyPress}
        />
      </Client>
    );
  }
}

export default App;
