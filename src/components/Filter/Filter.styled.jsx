import styled from '@emotion/styled'

export const Label = styled.label``

export const Input = styled.input`
  width: 400px;
  padding: 15px;
  border: 2px solid #eee;
  border: 0;
  border-bottom: 1px solid #eee;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  border-radius: 10px;

  &:focus {
    border: 4px solid #eee;
    box-shadow: 0 0 15px 6px rgba(0, 0, 0, 0.06);
    outline: none;
  }
`
