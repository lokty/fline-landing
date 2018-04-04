import React, { Component } from 'react';


class Modal extends Component {

  constructor(props) {
    super(props);
    this.state = { name: '', surname: '', email: '', submitted: false, success: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  sendEmail(name, target, text) {
    let _this = this;
    (function () {
      var data = new FormData();
      if (!text) {
        data.append("from",  "Fline Confirmation Robot <robot@flineocr.com>");
        data.append("to", target);
        data.append("subject", "Fline Demo Request Confirmation");
        data.append("html",
        '<html><p><strong>Hello ' + name +
        '!</strong></p>You are getting this email as a confirmation of your demo request. We will send you more details about it (time and instructions) later.<br/></p>' +
        '<p>Vasilev Ivan, Project Manager</p></html>');
      } else {
        data.append("from",  "Fline Email Robot <robot@flineocr.com>");
        data.append("to", 'ivan@flineocr.com');
        data.append("subject", "Fline Demo Request");
        data.append("text", text.name + " " + text.surname + ", " + text.email);
      }

      var xhr = new XMLHttpRequest();
      xhr.withCredentials = true;

      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
          _this.setState({ success: true });
        }
      });

      xhr.open("POST", "https://api.mailgun.net/v3/mg.flineocr.com/messages");
      xhr.setRequestHeader ("Authorization", "Basic " + btoa("api:key-2df17391a50cd9eb9af61a8296ce008f" ));
      xhr.setRequestHeader("Cache-Control", "no-cache");

      xhr.send(data);

    }());
  }

  handleChange(event, key) {
    this.setState({ [key]: event.target.value });
  }

  handleClose() {
    this.props.closeModal();
  }

  handleSubmit(event) {
    this.setState({ submitted: true })
    event.preventDefault();
    if (this.state.name && this.state.surname && this.state.email) {
      this.sendEmail(this.state.name, this.state.email);
      this.sendEmail(null, null, { name: this.state.name, surname: this.state.surname, email: this.state.email });
    }
  }

  render() {
    return (
			<div className="modal">
       <div className="modal-background" onClick={ this.handleClose }></div>
       <div className="modal-wrapper">
        <div className="header">
          Schedule demo
        </div>
        { !this.state.success ?
        <form className="form">
          <input className={ (!this.state.name && this.state.submitted) ? 'error' : '' }
                 name="name"
                 value={this.state.name}
                 onChange={(e) => {this.handleChange(e, 'name')}}
                 placeholder="Name" />
          <input className={ (!this.state.surname && this.state.submitted) ? 'error' : '' }
                 name="surname"
                 value={this.state.surname}
                 onChange={(e) => {this.handleChange(e, 'surname')}}
                 placeholder="Surname" />
          <input className={ (!this.state.email && this.state.submitted) ? 'error' : '' }
                 name="email"
                 value={this.state.email}
                 onChange={(e) => {this.handleChange(e, 'email')}}
                 placeholder="Email" />
          <div onClick={ this.handleSubmit } style={{ marginTop: '40px' }} className="action-button">Send request</div>
        </form> :
        <div style={{ marginTop: '40px' }}>Thank you for the request, we sent you a confirmation letter</div> }
       </div>
      </div>
    );
  }
}

export default Modal;
