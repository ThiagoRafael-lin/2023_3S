import styled from "styled-components";

export const PatientModal = styled.View`
flex: 1;
align-items: center;
justify-content: center;
background-color: rgba(0, 0, 0, 0.60);

`

export const  ModalContent = styled.View`
padding: 30px 30px 10px;
width: 90%;
border-radius: 10px;
background-color: #fff;
align-items: center;

`

export const ModalText = styled.Text`
width: 90%;
font-size: 16px;
color: #5f5c6b;
line-height: 22px;
text-align: center;
margin-top: 10px;
margin-bottom: 30px;
font-family: Quicksand_500Medium;


`

export const ModalTextCancellation = styled(ModalText)`
margin-bottom: 10px;
padding-bottom: -30px;

`

export const LinkMidiumModal = styled.Text`

    color: #496BBA;
    font-family: 'MontserratAlternates_600SemiBold';
    font-size: 14px;
    text-decoration: underline;
    text-decoration-color: #496BBA;
    align-self: center;
    margin-top: 16px;

`

export const LinkMidiumVisualizar = styled(LinkMidiumModal)`
left: 100px;
bottom: 39px;
color: #C81D25;
text-decoration: none;



`
