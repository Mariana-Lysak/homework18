import React, { Component } from 'react';

class Contact extends Component{
    render(){
        return (
            <div className ="contact">
                <h3> { this.props.contact.firstName } { this.props.contact.lastName } </h3>
                <p> { this.props.contact.phone }</p>
                <p> { this.props.contact.gender? this.props.contact.gender : "unknown"}</p>
            </div>
        )
    }
}

export default Contact;