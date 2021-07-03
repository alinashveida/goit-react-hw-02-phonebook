import { ContactsList, ContactItem } from './ContactsList.styled'

export default function ContactsListSection({ contacts }) {
  return (
    <ContactsList>
      {contacts.map((contact) => (
        <ContactItem key={contact}>{contact}</ContactItem>
      ))}
    </ContactsList>
  )
}
