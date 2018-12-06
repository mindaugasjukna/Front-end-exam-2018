import React, { Component } from "react";

class Message extends Component {
  render() {
    return (
      <tr className="messenger">
        <td className="date">{this.props.message.date}</td>
        <td className="email">{this.props.message.email}</td>
        <td className="institute">{this.props.message.institute}</td>
        <td className="message">{this.props.message.message}</td>
        <td className="name">{this.props.message.name}</td>
      </tr>
    );
  }
}

export default Message;
