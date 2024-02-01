import styled from "styled-components";
import { useFonts, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';



export const HeaderContainer = styled.View`
    background-color: #FECC2B;
    height: 20%;
    border-radius: 0px 0px 15px 15px;
    justify-content: center;
    align-items: center;
    elevation: 10; /*box-shadow no android */
    shadowColor: black;
    flex-direction:row ;


`

export const HeaderContent = styled.SafeAreaView`
margin-top: 30px;

`

export const TextHeader = styled.Text`


font-size: 24px;
font-family: "Roboto_500Medium";
color: "#333E33";


`