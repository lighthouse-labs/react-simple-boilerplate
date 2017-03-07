import React, {Component} from 'react';
import Message from './Message.jsx';

const MessageList = React.createClass({
  render() {
    return (
      <div id="message-list">
        {this.props.messages.map((message) => {
          return <Message message={message} key={message.uuid}/>
        })}
      </div>
    );
  }
});

export default MessageList;

