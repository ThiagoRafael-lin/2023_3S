import styled from "styled-components";

export const Input = styled.TextInput.attrs({
    placeholderTextColor: "white"
})
`
margin-top: 30px;
border: 1px;
border-radius: 5px;
border-color: #F8F8F8;
padding-left: 16px;
width: 90%;
height: 53px;
font-family: MontserratAlternates_600SemiBold;
`

export const InputVerificar = styled(Input)`

width: 20%;
height: 68px;
font-size: 45px;


`

export const InputRedefinir = styled(Input)`

margin-top: 15px;
border: 2px;
border-color: white;


`

export const InputCriarConta = styled(InputRedefinir)`
border: 1px;
border-color: white;

`

