import React, {Component} from 'react';

const Message = React.createClass({
  render() {
    var divStyle = { color: this.props.message.color };
    var message;
    var content = this.props.message.content;

    // Handle images in content
    var ext = this.props.message.content.substr(-3, 3);
    if (ext === 'jpg' || ext === 'png' || ext === 'gif') {
      content = (
        <span className='content'>
          <img src={content} className='message-image' />
        </span>
      )
    } else {
      content = (
        <span className='content'>
          {content}
        </span>
      )
    }

    // Handle notifications vs. messages
    if (this.props.message.type === 'message system') {
      return (
        <div className={this.props.message.type}>
          {content}
        </div>
      )
    } else {
      return (
        <div className={this.props.message.type}>
          <span className="username" style={divStyle}>{this.props.message.username}</span>
          {content}
        </div>
      )
    }
  }
});

export default Message;