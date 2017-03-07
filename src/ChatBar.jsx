import React from 'react';

const ChatBar = React.createClass({
  getInitialState: () => {
    return {value: ""};
  },
  render: function () {
    return (
      <footer>
        <input
          id="username"
          type="text"
          placeholder="Your Name (Optional)"
          onKeyUp={this.props.handleUser}/>
        <input
          id="new-message"
          type="text"
          placeholder="Type a message and hit ENTER"
          onKeyUp={this.props.onKeyUp}/>
      </footer>
    );
  }
});
export default ChatBar;