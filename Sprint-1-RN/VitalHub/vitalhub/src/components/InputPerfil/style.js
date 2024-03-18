import styled from "styled-components";
import { Input } from "../Input/style";

export const InputPerfil = styled.TextInput.attrs({
    placeholderTextColor: "black"
})
    `
margin-top: 30px;
border: 1px;
border-radius: 5px;
background-color: #F5F3F3;
border-color: #F5F3F3;
padding-left: 16px;
width: 90%;
height: 53px;
font-family: MontserratAlternates_600SemiBold;


`

export const InputPerfilPerfil = styled(InputPerfil)`
font-family: MontserratAlternates_500Medium;
`
export const InputProntuario = styled(InputPerfil).attrs({
    placeholderTextColor: "#49B3BA"
})`
font-family: MontserratAlternates_500Medium;
background-color: white;
border-color: #49B3BA;
height: 121px;
padding-bottom: 70px;
padding-left: 15px;

`

export const InputProntuarioPrescri = styled(InputProntuario)`



`

export const InputProntuarioExame = styled(InputProntuario)`
font-size: 15px;
font-family: Quicksand_600SemiBold;
left: 1px;
background-color: #F5F3F3;
border-color: #F5F3F3;
text-align: center;
padding-bottom: 10px;
padding-right: 10px;


`

export const ContainerFoto = styled.View`
    width: 90%;
    height: 111px;
    background-color: #F5F3F3;
    border-radius: 5px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 5px;
    margin-top: 30px;
`


// export const InputProntuarioVisu = styled(InputProntuario).attrs({
//     placeholderTextColor: "#000"
// })`
// padding-bottom: 0px;
// padding-left: 12px;
// padding-bottom: 40px;
// background-color: #F5F3F3;
// border-color: #F5F3F3;

// `
export const InputProntuarioDiag = styled(InputPerfil).attrs({
    placeholderTextColor: "#49B3BA"
})`
font-family: MontserratAlternates_500Medium;
background-color: white;
border-color: #49B3BA;
height: 53px;


`

export const InputProntuarioDiagPaciente = styled(InputPerfil).attrs({
    placeholderTextColor: "#000"
})`
font-family: MontserratAlternates_500Medium;


`

export const LabelInput = styled.SafeAreaView`

bottom: -20px;
right: 110px;

`
export const InputProntuarioResultado = styled(InputProntuario)`
height: 103px;
padding-bottom: 10px;

`
export const LabelInput2 = styled(LabelInput)`

bottom: -20px;
right: 170px;

`
export const LabelInput3 = styled(LabelInput)`

bottom: -20px;
right: 150px;

`
export const LabelInput4 = styled.SafeAreaView`

display: flex;
align-items: center;
justify-content: s;
gap: 80px;
flex-direction: row;

`
export const LabelInput5 = styled.SafeAreaView`

width: 144px;
gap: -20px;

`
export const LabelInput6 = styled.SafeAreaView`

width: 144px;
gap: -20px;

`

export const LabelPerfil = styled.Text`
font-size: 15px;
font-family: Quicksand_600SemiBold;

`
export const LabelProntuarioDesc = styled.Text`
font-size: 15px;
font-family: Quicksand_600SemiBold;
left: 24px;

`
export const LabelProntuarioDiag = styled.Text`
font-size: 15px;
font-family: Quicksand_600SemiBold;
left: 15px;

`
export const LabelProntuarioExames = styled.Text`
font-size: 15px;
font-family: Quicksand_600SemiBold;
left: -6px;

`
export const LabelProntuarioVisu = styled.Text`
font-size: 15px;
font-family: Quicksand_600SemiBold;
left: 1px;

`

export const LabelPerfil2 = styled.Text`
margin-top: 20px;
font-family: Quicksand_600SemiBold;

`
