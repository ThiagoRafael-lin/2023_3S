import { LinearGradient } from "expo-linear-gradient";
import styled, { css } from "styled-components";

export const Container = styled.SafeAreaView`

flex: 1;
align-items: center;
background-color: #49B3BA;

`

export const ContainerConsulta = styled.SafeAreaView`
background-color: #fafafa;
`

export const ContainerVerificacao = styled.SafeAreaView`

flex-direction: row;
/* gap: 20px; */
width: 80%;
justify-content: space-between;

`

export const ContainerPerfil = styled(Container)`

background-color: white;
`
export const ScroolForm = styled.ScrollView `

height: 100%;

`

export const RecordModalInfo = styled.View`
flex-direction: row;
gap: 20px;
justify-content: center;
width: 80%;
height: 30px;

`

export const ContainerHeader = styled(LinearGradient).attrs({
    colors: ["#60bfc5", "#496BBA"],
    start: {x: -0.05, y: 1.08},
    end: {x:1, y:0}
})`

width: 100%;
padding: 20px 20px 22px 20px;

border-radius: 0px 0px 15px 15px;
box-shadow: 0px 4px 15px #00000014;


flex-direction: row;
align-items: center;
justify-content: space-between;
`;
export const ButtonTextStyle = styled.Text`
    font-size: 12px;
    font-family: "MontserratAlternates_600SemiBold";
    
    ${props => props.clickButton ?
        css`
    color: #fbfbfb;`
        : css`
   color: #607ec5`}
    
`;



