import React, {Component} from 'react';
class App extends Component {
  render() {
    return (
      <h1>Hello React :)</h1>
    );
  }
}
export
default App;

// From GitHub https://github.com/amorriscode/chatty

/*import React from 'react';
import ReactDOM from 'react-dom';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';

const App = React.createClass({
  getInitialState: function () {
    var data = {
      currentUser: {
        name: 'Anonymous',
        color: 'black'
      },
      messages: [], // messages coming from the server will be stored here as they arrive
      userCount: 0
    };

    return {data: data};
  },
  componentDidMount: function () {
    // console.log("componentDidMount <App />");
    this.socket = new WebSocket("ws://localhost:4000");
    this.socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      var newState = this.state;
      switch (message.type) {
        case 'userColor':
          newState.data.currentUser.color = message.color;
          break;
        case 'incomingMessage':
          message.type = 'message';
          newState.data.messages.push(message);
          break;
        case 'incomingNotification':
          message.type = 'message system';
          newState.data.messages.push(message);
          break;
        case 'userCount':
          newState.data.userCount = message.content;
          break;
        default:
          console.log('Unknown message type: ', message.type);
          break;
      }
      this.setState({data: newState.data});
    }
  },
  handleMsg(e) {
    // Guard statement!
    if (e.key === 'Enter') {
      var typedMsg = e.target.value;
      var msg = {
        type: 'postMessage',
        username: this.state.data.currentUser.name,
        color: this.state.data.currentUser.color,
        content: typedMsg
      };
      this.socket.send(JSON.stringify(msg));
    }
  },
  handleUser(e) {
    if (e.key === 'Enter') {
      var oldUser = this.state.data.currentUser.name;
      var newUser = e.target.value;

      // Update username before sending notification
      var newState = this.state;
      newState.data.currentUser.name = newUser;
      this.setState({data: newState.data});

      var msg = {
        type: 'postNotification',
        username: newUser,
        content: oldUser + ' changed their name to ' + newUser
      };
      this.socket.send(JSON.stringify(msg));
    }
  },

  render: function () {
    return (
      <div>
        <nav>
          <h1>Chatty</h1>
          <span className='userCount'>{this.state.data.userCount}
            users online</span>
        </nav>
        <MessageList messages={this.state.data.messages}/>
        <ChatBar
          currentUser={this.state.data.currentUser}
          handleUser={this.handleUser}
          onKeyUp={this.handleMsg}/>
      </div>
    );
  }
});
export default App;*/