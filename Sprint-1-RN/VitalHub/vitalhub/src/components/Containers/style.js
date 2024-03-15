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

export const Line = styled.View`
width: 89%;
background-color: black;
border: 1px solid #8C8A97;
border-radius: 2px;
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
top: 120%;

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
border: 2px solid #fff;
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
/* width: 100%; */
align-items: center;
gap: 20px;
margin-top: 50px;


`

export const  SelecionarMedicoContainer = styled.View`
width: 320px;
flex-direction: row;
align-items: center;
gap: 10px;
border: 2px solid white;
background-color: #fff;
padding: 5px;
border-radius: 5px;

`

export const NomeEspecialidade = styled.View`
gap: 10px;
width: 80%;
flex-direction: column;

`

export const MedicalContent = styled.View`

gap: 15px;
`

export const MedicoContainerButton = styled.View`
flex-direction: column;
right: 50px;

`

export const AgendarConsultaContainer = styled.View`
width: 100%;
align-items: center;

`

export const DownArrow = styled.View`
left: 160px;
bottom: 44px;

`

export const AgendarConsultaContainerPaciente = styled.View`
top: 50px;
left: 20px;
width: 90%;
background-color: #fff;
border-radius: 10px;

`

export const ContainerTituloSubtitulo = styled.View`
/* border: 1px solid black; */
align-self: flex-start;

`

export const LocalConsultaContainer = styled.View`
width: 100%;
align-items: center;

`

export const ContainerTituloConsulta = styled.View`
align-items: center;
justify-content: center;

`

export const ContainerVisu = styled.View`
width: 100%;

`

export const MapLocationContainer = styled.View`
width :100%;
height: 30%;

`

export const CameraContainer =styled.View`
width: 100%;
height: 100%;
justify-content: center;
align-items: center;

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




