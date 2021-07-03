import styled from '@emotion/styled'

export const Form = styled.form`
  padding: 24px;

  & input {
    display: block;
    margin-bottom: 12px;
  }
`

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

export const ButtomSubmit = styled.button`
  text-decoration: none;
  display: inline-block;
  padding: 15px 30px;
  margin: 10px 20px;
  border-radius: 10px;
  box-shadow: 0 0 40px 40px #f137a6 inset, 0 0 0 0 #f137a6;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  letter-spacing: 2px;
  color: white;
  transition: 0.15s ease-in-out;

  border: none;

  &:hover {
    box-shadow: 0 0 10px 0 #f137a6 inset, 0 0 10px 4px #f137a6;
    color: #f137a6;
    background: #a4dada;
  }
`

// export const ButtomInput = styled.input``
