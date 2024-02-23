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

export const  InputBoxShadow = styled.SafeAreaView`

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

export const TextInputShadowEmail = styled(TextInputShadow)`

font-family: Quicksand_500Medium;

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

