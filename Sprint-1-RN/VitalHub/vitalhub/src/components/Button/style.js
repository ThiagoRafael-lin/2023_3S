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
export const ButtonTitleVizualizar = styled.Text`

font-family: MontserratAlternates_600SemiBold;
color: white;
text-transform: uppercase;
/* padding-left: 60px; */

`

export const ButtonRecuperar = styled(Button)`
margin-top: 25px;
`

export const ButtonPerfil = styled(Button)`

gap: 30px;
margin-top: 20px;

`
export const ButtonPerfilMedico = styled(Button)`

gap: 30px;
margin-top: 20px;
margin-bottom: 20px;

`

export const ButtonPerfilSair = styled(Button)`

width: 50%;
background-color: #ACABB7;
border-color: #ACABB7;
margin-top: 20px;
margin-bottom: 40px;

`

export const ButtonPerfilProntuarioPreenchido = styled(Button)`
width: 90%;
background-color: #496BBA;
border-color: #496BBA;
margin-top: 20px;
margin-bottom: 40px;

`

export const ButtonModal = styled(Button)`
width: 80%;
margin-top: 70px;
margin-bottom: -50px;

`

export const ButtonModalCancellation = styled(ButtonModal)`
margin-top: 30px;
margin-bottom: 0px;
`

export const ButtonSecondary = styled(Button)`
background-color: transparent;
border: none;
margin-top: 40px;
margin-bottom: 0px;

`

export const ButtonSecondaryClinica = styled(ButtonSecondary)`
margin-top: 30px;
margin-bottom: 90px;

`

export const ButtonSecondaryLocal = styled.TouchableOpacity`
align-items: center;
margin-top: 90px;

`
export const ButtonSecondaryLocalConsulta = styled.TouchableOpacity`
align-items: center;
margin-top: 30px;

`

export const ButtonSecondaryVisu = styled.TouchableOpacity`
align-items: center;

`
export const ButtonSecondaryVisualizar = styled.TouchableOpacity`
align-items: center;
margin-top: 15px;
margin-bottom: 25px;
`

export const Stethoscope = styled.TouchableOpacity`

background-color: #49B3BA;
width: 60px;
height: 60px;
background-color: #49B3BA;
border-radius: 10px;
align-items: center;
justify-content: center;


`

export const ButtonModalAgendarConsulta = styled(ButtonModal)`
margin-top: 0px;

`

export const ButtonModalSelecionarData = styled(ButtonModal)`
margin-top: 80px;

`
export const ButtonModalVizualizarProntuario = styled(ButtonModal)`
/* margin-top: 80px; */
width: 195px;
flex-direction: row;
/* gap: -56px; */
background-color: #49B3BA;
border-color: #49B3BA;
gap: 10px;
align-self: flex-start;
margin-top: 30px;
margin-bottom: -10px;
margin-left: 22px;


`



export const ButtonModalVerProntuario = styled.TouchableOpacity`
/* border: 2px solid black; */
width: 77px;
height: 80px;
border-radius: 5px;
/* bottom: 123px; */
/* left: 40px; */

/* background-color: rgba(0, 0, 0, 0.6); */
`

export const ButtonModalPerfil = styled.TouchableOpacity`
/* border: 2px solid black; */
width: 77px;
height: 80px;
border-radius: 5px;
/* bottom: 123px; */
/* left: 40px; */

/* background-color: rgba(0, 0, 0, 0.6); */
`

export const ButtonCamera = styled.TouchableOpacity`
flex-direction: row;
align-self: flex-start;
gap: 5px;
align-items: center;

`
