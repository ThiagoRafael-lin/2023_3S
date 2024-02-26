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

export const MedicalInstrument = styled.View`
position: absolute;
left: 80%;
top: 145%;

`

export const ScheduleNivelConsulta = styled.View`

width: 90%;
height: 40px;
flex: 1;
flex-direction: row;
gap: 10px;
margin-top: -15px;


`

export const ClinicaCardContainer = styled.View`
width: 100%;
gap: 20px;
align-items: center;
background-color: #fff;

`



export const NameLocalization = styled.View`
width: 350px;
height: 94px;
/* right: 80px; */
flex-direction: row;
justify-content: space-evenly;
border: 2px solid #496BBA;
border-radius: 5px;

`

export const StarsContainer = styled.View`
width: 100px;
height: 80%;
/* justify-content: center; */
flex-direction: column; 
/* align-items: center;  */

`

export const Profile = styled.View`
width: 80%;
height: 80%;
justify-content: center;
left: 30px;

`

export const Day = styled.View`
width: 90%;
right: 20px;
padding: 5px;
flex-direction: row;
background-color: #E8FCFD;

`

export const Star = styled.View`
flex-direction: row;

`

export const CalendarContainer = styled.View`
margin-top: 20px;
gap: 10px;
align-items: center;
justify-content: center;

`

export const MedicalContainer = styled.View`
width: 100%;
align-items: center;
gap: 40px;


`

export const SelecionarMedicoContainer = styled.View`
width: 70%;
flex-direction: row;
align-items: center;
gap: 10px;

`

export const NomeEspecialidade = styled.View`
gap: 10px;
width: 80%;
flex-direction: column;

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




