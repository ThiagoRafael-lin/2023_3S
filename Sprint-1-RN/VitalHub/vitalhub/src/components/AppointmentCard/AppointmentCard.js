import { Container } from "../Containers/style"
import { AntDesign } from '@expo/vector-icons';
import { ButtonCard, ButtonText, ClockCard, ContainerCardList, ContentCard, DataProfileCard, ProfileData, ProfileImage, ProfileName, TextAge, TextBold, ViewRow } from "./style";
import { ButtonModalVerProntuario } from "../Button/style";
import { useState } from "react";

export const AppointmentCard = ({
    situacao = "pendente",
    onPressCancel,
    onPressAppointment,
    setMedicalRecordModal,
    onPress,
    name,
    navigation,

}) => {

    const [profile, setProfile] = useState("Paciente")

    return (
        //Container principal
        <ContainerCardList >

            {/* arrumar o o botao de ver modal */}
            <ButtonModalVerProntuario onPress={() => navigation.navigate('ModalMedicalRecord')}>

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
                            <ButtonCard onPress={profile !== "Paciente" ? onPressAppointment : () => navigation.replace("Prontuario")}>
                                <ButtonText situacao={situacao} onPress={() => navigation.navigate('VisualizarProntuario'/*MedicalRecordModal*/ /*arrumar isso*/)}>Ver prontuário</ButtonText>
                            </ButtonCard>
                        )
                    }


                    {/* versão antiga pelo que sei funcionando */}

                    {/* {
                        situacao == "cancelado" ? (
                            <>
                            </>
                        ) : situacao == "pendente" ? (
                            <ButtonCard onPress={onPressCancel}>
                                <ButtonText situacao={situacao}>Cancelar</ButtonText>
                            </ButtonCard>
                        ) : (
                            <ButtonCard onPress={onPressAppointment}>
                                <ButtonText situacao={situacao} onPress={() => navigation.replace('VisualizarProntuario')}>Ver prontuário</ButtonText>
                            </ButtonCard>
                        )
                    } */}




                </ViewRow>


            </ContentCard>

        </ContainerCardList>


    )


}