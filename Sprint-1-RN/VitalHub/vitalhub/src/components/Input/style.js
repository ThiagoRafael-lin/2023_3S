import { TextInput } from "react-native";
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

export const InputBoxShadow = styled.SafeAreaView`

margin-top: -52px;
background-color: white;
width: 80%;
height: 110px;
elevation: 15;
border-radius: 5px;
align-items: center;
justify-content: center;


`

export const InputConsulta = styled.SafeAreaView`

width: 100%px;
height: 144px;


`

export const TextInputShadow = styled.Text`

font-family: MontserratAlternates_600SemiBold;
font-size: 16px;

`

export const TextInputPerfilMedico = styled.Text`
font-family: MontserratAlternates_600SemiBold;
font-size: 16px;
margin-top: 20px;
margin-bottom: 10px;

`

export const TextInputTitle = styled(TextInputShadow)`

font-size: 20px;
`

export const TextInputShadowEmail = styled(TextInputShadow)`

font-family: Quicksand_500Medium;

`

export const TextInputCRMMedico = styled.Text`
font-family: Quicksand_500Medium;
color: #5F5C6B;

`

export const TextInputSubTitulo = styled.Text`

font-family: Quicksand_500Medium;
font-size: 16px;
color: #5F5C6B;

;

`

export const InputNivel = styled.TouchableOpacity`

flex: 1;
flex-direction: row;
width: 88px;
height: 50px;
border: 2px solid #60BFC5;
border-radius: 5px;
align-items: center;
justify-content: center;

`

export const ScheduleInput = styled.TextInput`
margin-top: 50px;
border: 2px solid #60BFC5;
border-radius: 5px;
align-items: start;
justify-content: center;
width: 112%;
height: 63px;
right: 18px;
padding: 10px;
font-family: MontserratAlternates_600SemiBold;

`

export const InputSelecionarData = styled(Input).attrs({
    placeholderTextColor: "#34898F"
})`
/* border-color: #49B3BA; */
border: 2px solid #49B3BA;

`

export const InputLocal = styled(Input).attrs({
    placeholderTextColor: "#33303E"
})`
background-color: #F5F3F3;
border-color: #F5F3F3;
margin-left: 20px;

`
export const InputLocalContent = styled(Input).attrs({
    placeholderTextColor: "#33303E"
})`
background-color: #F5F3F3;
border-color: #F5F3F3;
right: 70px;

`

