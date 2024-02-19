import styled from "styled-components";

export const Button = styled.TouchableOpacity`

border: 1px;
border-width: 1px;
padding: 10px;
width: 90%;
justify-content: center;
align-items: center;
border-color: #496BBA;
border-radius: 5px;
background-color: #496BBA;

`

export const ButtonTitle = styled.Text`

font-family: MontserratAlternates_600SemiBold;
color: white;
text-transform: uppercase;


`

export const ButtonRecuperar = styled(Button)`
margin-top: 25px;
`

export const ButtonPerfil = styled(Button)`

gap: 30px;
margin-top: 20px;
`

export const ButtonPerfilSair = styled(Button)`

width: 371px;
background-color: #ACABB7;
border-color: #ACABB7;
margin-top: 20px;
margin-bottom: 40px;

`

// export const BotoesConsulta = styled.TouchableOpacity`

// height: 10%;
// gap: 30px;
// display: flex;
// justify-content: row;

// `

// export const BotaoAgenda = styled(Button)`

// `
// export const BotaoRealizados = styled(Button)`

// `
// export const BotaoCancelar = styled(Button)`

// `