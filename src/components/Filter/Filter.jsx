import { Input, Label } from './Filter.styled'

export default function Filter({ value, onChange }) {
  return (
    <Label>
      Find contacts by name
      <Input name="filter" onChange={onChange} value={value}></Input>
    </Label>
  )
}
