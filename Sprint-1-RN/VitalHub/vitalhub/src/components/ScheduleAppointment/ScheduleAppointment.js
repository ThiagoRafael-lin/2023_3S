import { Modal } from "react-native";
import { ButtonModal, ButtonSecondary, ButtonTitle } from "../Button/style";
import { LinkMidiumModal } from "../CancellationModal/style";
import { ScheduleContent, ScheduleLocalizacao, ScheduleModal } from "./style";
import { TitleScheduleModal } from "../Title/style";
import { InputNivelText, ScheduleInputText, ScheduleLabel, ScheduleLabelText } from "../Text/style";
import { ScheduleNivelConsulta } from "../Containers/style";
import { InputNivel, ScheduleInput } from "../Input/style";


export const ScheduleAppointment = ({
    visible,
    setShowModalSchedule,
    navigation,
    ...rest
}) => {
    return (

        <Modal {...rest} visible={visible} transparent={true} animationType="fade">

            {/* Container */}
            <ScheduleModal>

                {/* conteudo */}
                <ScheduleContent>

                    {/* titulo */}
                    <TitleScheduleModal>Agendar consulta</TitleScheduleModal>

                    {/* container do nivel da consulta */}
                    <ScheduleLabelText>Qual o nível da consulta</ScheduleLabelText>

                    <ScheduleNivelConsulta>

                        <InputNivel>
                            <InputNivelText>Rotina</InputNivelText>
                        </InputNivel>

                        <InputNivel>
                            <InputNivelText>Exame</InputNivelText>
                        </InputNivel>

                        <InputNivel>
                            <InputNivelText>Urgência</InputNivelText>
                        </InputNivel>

                       

                    </ScheduleNivelConsulta>

                    <ScheduleLocalizacao>

                        <ScheduleLabel>Informe a localização desejada</ScheduleLabel>

                        <ScheduleInput
                        placeholder="Informe a Localização"
                        placeholderTextColor="#34898F"
                        />
                            {/* <ScheduleInputText>Informe a localização</ScheduleInputText> */}

                    </ScheduleLocalizacao>

                    <ButtonModal onPress={() => navigation.navigate('SelecionarClinica')}>
                        <ButtonTitle>Continuar</ButtonTitle>
                    </ButtonModal>

                    <ButtonSecondary onPress={() => setShowModalSchedule(false)}>
                        <LinkMidiumModal>Cancelar</LinkMidiumModal>
                    </ButtonSecondary>

                </ScheduleContent>
            </ScheduleModal>
        </Modal>
    )
}