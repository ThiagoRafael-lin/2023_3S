import styled from "styled-components";

export const BtnIncrement = styled.TouchableOpacity`

width: 30%;
justify-content: center;
align-items: center;
padding: 10px;
border-radius: 10px;
border-color: blueviolet;
border-width: 1;
margin-bottom: 30px;
` 

export const BtnDecrement = styled(BtnIncrement)`
border-color: purple;

`