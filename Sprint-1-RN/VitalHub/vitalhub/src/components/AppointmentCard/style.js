import styled from "styled-components"
import { Title } from "../Title/style"

export const ContainerCardList = styled.View`
width: 90%;
margin: 0px auto;
margin-bottom: 12px;
padding: 10px;
border-radius: 5px;
flex-direction: row;
gap: 10px;
background-color: #ffffff;
/* elevation: 4px 4px 15px rgba(0, 0, 0, 0.18); */
box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.18);

`

export const ProfileImage = styled.Image`

width: 77px;
height: 80px;
border-radius: 5px;
position: absolute;

`

export const ContentCard = styled.View`

width: 70%;
gap: 11px;

`

export const DataProfileCard = styled.View`
gap: 6px;


`

export const ProfileName = styled(Title)`
font-size: 15px;
color: black;
margin-top: 0px auto;

`

export const ProfileData = styled.View`


flex-direction: row;
gap: 15px;

`

export const TextAge = styled.Text`

font-size: 14px;
font-family: Quicksand_500Medium;

`

export const TextBold = styled.Text`
font-family: Quicksand_600SemiBold;
font-size: 14px;
color: ${(props) => props.situacao == "pendente" ? "#49B3BA" : "#4E4B59"};


`

export const ViewRow = styled.View`
width: 100%;
flex-direction: row;
align-items: center;
justify-content: space-between;

`

export const ClockCard = styled.View`
flex-direction: row;
gap: 6px;
padding: 4px 23px;
border-radius: 5px;
align-items: center;

`

export const ButtonCard = styled.TouchableOpacity`
`

export const ButtonText = styled.Text`
font-size: 12px;
font-family: MontserratAlternates_500Medium;
color: ${(props) => props.situacao == "pendente" ? "#C81D25" : "#344F8F"};


`