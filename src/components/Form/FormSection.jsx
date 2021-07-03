import { Form, Label, Input, ButtomSubmit } from './FormSection.styled'

export default function FormSection(onSubmitButton, onChange, value) {
  return (
    <>
      <Form>
        <Label>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={() => onChange}
            value={value}
          />
        </Label>
        <ButtomSubmit
          type="submit"
          value="Add contact"
          onSubmit={() => onSubmitButton}
        >
          Add contact
        </ButtomSubmit>
      </Form>

      <input value={value} onChange={() => onChange}></input>
      <button onClick={() => onSubmitButton}></button>
    </>
  )
}
