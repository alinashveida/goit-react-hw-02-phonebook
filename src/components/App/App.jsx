import React, { Component } from 'react'
import { Title, SubTitle } from './App.styled'
import ContactForm from '../Form/ContactForm'
import ContactsListSection from '../ContactsList/ContactsList'
import Filter from '../Filter/Filter'
import shortid from 'shortid'

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  }

  forSubmitHendler = (data) => {
    console.log(data)

    const newContact = {
      id: shortid.generate(),
      name: data.name,
      number: data.number,
    }
    this.setState((prevState) => ({
      contacts: [newContact, ...prevState.contacts],
    }))
  }

  onChangeFilter = (event) => {
    const value = event.target.value
    this.setState({
      [event.target.name]: value,
    })
  }

  getFilterContacts = () => {
    const { filter, contacts } = this.state

    const normalizedFilter = filter.toLowerCase()

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter),
    )
  }

  render() {
    const filterContacts = this.getFilterContacts()

    return (
      <div>
        <Title>Phonebook</Title>

        <ContactForm onSubmit={this.forSubmitHendler}></ContactForm>

        <SubTitle>Contacts</SubTitle>

        <Filter value={this.state.filter} onChange={this.onChangeFilter} />

        <ContactsListSection contacts={filterContacts} />
      </div>
    )
  }
}
