import React from 'react';

class ContactCard extends React.Component {
  
  render() {
    return (
          <div className="card">
            <label className="contact-name">{this.props.name}</label>    
            <label>{this.props.email}</label>   
            <label>{this.props.workP}</label>  
            <label>{this.props.mobileP}</label> 
          </div>
          );
  }
};


export default ContactCard;