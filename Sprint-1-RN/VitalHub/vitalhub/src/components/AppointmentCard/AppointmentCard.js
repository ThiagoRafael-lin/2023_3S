import { Container } from "../Containers/style"
import { AntDesign } from '@expo/vector-icons';
import { ButtonCard, ButtonText, ClockCard, ContainerCardList, ContentCard, DataProfileCard, ProfileData, ProfileImage, ProfileName, TextAge, TextBold, ViewRow } from "./style";

export const AppointmentCard = ({
    situacao = "pendente",
    onPressCancel,
    onPressAppointment


}) => {
    return (
        //Container principal
        <ContainerCardList>

            <ProfileImage
                source={require('../../../assets/imagePaciente.png')}
            />

            <ContentCard>

                <DataProfileCard>

                    <ProfileName>Gustavo Magalhães</ProfileName>

                    <ProfileData>
                        <TextAge>19 anos</TextAge>
                        <TextBold>Rotina</TextBold>
                    </ProfileData>

                </DataProfileCard>

                <ViewRow>

                    <ClockCard situacao={situacao}>
                        <AntDesign name="clockcircle" size={14} color={situacao == "pendente" ? "#49B3BA" : "#8C8A97"} />
                        <TextBold situacao={situacao} color={"#49B3BA"}>14:00</TextBold>
                    </ClockCard>

                    {/* valida e mostra o tipo de botão conforme a situação da consulta */}

                    {
                        situacao == "cancelado" ? (
                            <>
                            </>
                        ) : situacao == "pendente" ? (
                            <ButtonCard>
                                <ButtonText situacao={situacao}>Cancelar</ButtonText>
                            </ButtonCard>
                        ) : (
                            <ButtonCard>
                                <ButtonText situacao={situacao}>Ver prontuário</ButtonText>
                            </ButtonCard>
                        )
                    }




                </ViewRow>


            </ContentCard>

        </ContainerCardList>


    )


}