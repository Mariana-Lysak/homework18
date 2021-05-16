import React, { Component } from 'react';
import Contact from "./Contact";
import "./Contact.css";

const contacts = [{
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male"
}, {
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female"
}, {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666"
}, {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female"
}, {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male"
}, {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male"
}]

class Contacts extends Component {
    state = {
        contacts: contacts,
        search: "",
    }

    handleSearchChange = (event) => {
        this.setState({ 
            search: event.target.value,
        }, () => {
            if (this.state.search !== "") {
                this.setState({ 
                    contacts: contacts.filter(contact => { 
                        contact.lastName.toLowerCase().includes(this.state.search.toLowerCase());
                    })
                })
            } else {
                this.setState({ 
                    contacts: contacts,
                })
            }
        })
    }

    render() {
        return (
            <div className = "container">
                <div>
                    <input className="search" placeholder="Search"  value={ this.state.search } onChange={ this.handleSearchChange }/>
                </div>
                <div>
                { this.state.contacts.map((contact, i) => ( <Contact contact={ contact } key={ i } />))} 
                </div>
            </div>
        )
    }
}

export default Contacts;