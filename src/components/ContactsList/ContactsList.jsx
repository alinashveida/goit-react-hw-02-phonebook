import { ContactsList, ContactItem } from './ContactsList.styled'
import { AiOutlineUser } from 'react-icons/ai'

export default function ContactsListSection({ contacts }) {
  return (
    <ContactsList>
      {contacts.map((contact) => (
        <ContactItem key={contact.id}>
          <AiOutlineUser /> {contact.name}: {contact.number}
        </ContactItem>
      ))}
    </ContactsList>
  )
}
