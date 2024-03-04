import { Container } from "../Containers/style"
import { AntDesign } from '@expo/vector-icons';
import { ButtonCard, ButtonText, ClockCard, ContainerCardList, ContentCard, DataProfileCard, ProfileData, ProfileImage, ProfileName, TextAge, TextBold, ViewRow } from "./style";
import { ButtonModalVerProntuario } from "../Button/style";

export const AppointmentCard = ({
    situacao = "pendente",
    onPressCancel,
    onPressAppointment,
    setMedicalRecordModal,
    onPress,
    name
    
}) => {
    return (
        //Container principal
        <ContainerCardList>

            {/* arrumar o o botao de ver modal */}
            <ButtonModalVerProntuario>

                <ProfileImage
                    source={require('../../../assets/ImagemPerfilMedicoPequeno.png')}
                // onPress={() => setMedicalRecordModal(true)}


                />
            </ButtonModalVerProntuario>

            <ContentCard>

                <DataProfileCard>

                    <ProfileName>{name}</ProfileName>

                    <ProfileData>
                        <TextAge>22 anos</TextAge>
                        <TextBold>Rotina</TextBold>
                    </ProfileData>

                </DataProfileCard>

                <ViewRow>

                    <ClockCard situacao={situacao}>
                        <AntDesign name="clockcircle" size={14} color={situacao == "pendente" ? "#49B3BA" : "#8C8A97"} />
                        <TextBold situacao={situacao}>14:00</TextBold>
                    </ClockCard>

                    {/* valida e mostra o tipo de botão conforme a situação da consulta */}

                    {
                        situacao == "cancelado" ? (
                            <>
                            </>
                        ) : situacao == "pendente" ? (
                            <ButtonCard onPress={onPressCancel}>
                                <ButtonText situacao={situacao}>Cancelar</ButtonText>
                            </ButtonCard>
                        ) : (
                            <ButtonCard onPress={onPressAppointment}>
                                <ButtonText situacao={situacao}>Ver prontuário</ButtonText>
                            </ButtonCard>
                        )
                    }




                </ViewRow>


            </ContentCard>

        </ContainerCardList>


    )


}