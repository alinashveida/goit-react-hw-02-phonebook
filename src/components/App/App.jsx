import React, { Component } from 'react'

import Section from '../../Section/Section'
import FormSection from '../Form/FormSection'
import ContactsListSection from '../ContactsList/ContactsList'

export default class App extends Component {
  state = {
    contacts: [],
    name: '',
  }

  onChangeInput = (event) => {
    event.preventDefault()
    // this.setState({ value: event.target.value })
    const value = event.target.value
    console.log(value)
    this.setState({
      name: value,
    })
  }

  onSubmitButton = (event) => {
    event.preventDefault()
    // this.props.onSubmit(this.state.name)
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, this.state.name],
    }))
    console.log('hello')
  }

  render() {
    const { contacts } = this.state
    return (
      <>
        <Section title="Phonebook">
          <FormSection
            onSubmitButton={this.onSubmitButton}
            onChange={this.onChangeInput}
            value={this.state.value}
          ></FormSection>
        </Section>
        <Section title="Contacts">
          <ContactsListSection contacts={contacts}></ContactsListSection>
        </Section>
      </>
    )
  }
}
