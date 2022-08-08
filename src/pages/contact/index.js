import React from "react";
import "./style.css";
export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageItems: [{ key: '1', type: "left", message: "hello" }, { key: '2', type: "right", message: "what?" }, { key: '3', type: "left", message: "hello" }, { key: '4', type: "right", message: "what?" }],
      chatemp: '',
      inta: {
        sendw: { '1': 'send', '2': '发送' },
        onchatitle:{'1':'Online Chat','2':'在线客服'}
      }
    };
  }

  handleSend = () => {
    let messageOld = this.state.messageItems;
    const inputValue = this.state.chatemp;
    if (inputValue == '')
      return;
    messageOld.push({ key: toString(messageOld.length + 1), type: 'right', message: inputValue });
    messageOld.push({ key: toString(messageOld.length + 1), type: 'left', message: 'hi,biden. Dear old friend. welcome to Trump swimming club.' });
    let newState = { messageItems: [...messageOld] };
    this.setState({ ...newState });
  }

  onInputChange = (event) => {
    this.setState({ chatemp: event.target.value });
  }


  render() {
    console.log(this.state);
    const messages = this.state.messageItems.map((item) => {
      let messageItem = {};
      if (item && item.type == "left") {
        messageItem = (
          <div className="message-box" key={item.key}>
            <div className="message-box-left">{item.message}</div>
            <div className="triangle-left"></div>
          </div>
        );
      } else {
        messageItem = (
          <div className="message-box" key={item.key}>
            <div className="message-box-right">{item.message}</div>
            <div className="triangle-right"></div>
          </div>
        );
      }

      return messageItem;
    });
    return (
      <div>
        <div className="chat-title"> {this.state.inta.onchatitle[this.props.language]}</div>
        <div className="chat-box">
          <div className="chat-list">
            <div className="message-box">
              <div className="message-box-left">hello</div>
              <div className="triangle-left"></div>
            </div>
            {messages}
            <div id="msg_end"></div>
          </div>
          <div className="send-form">
            <input type="text" className="chat-input" value={this.state.chatemp} onChange={this.onInputChange} /> <button onClick={this.handleSend}>{this.state.inta.sendw[this.props.language]}</button>
          </div>
        </div>
      </div>
    );
  }
}
