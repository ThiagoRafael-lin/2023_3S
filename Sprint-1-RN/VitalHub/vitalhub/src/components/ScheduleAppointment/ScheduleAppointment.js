import { Modal } from "react-native";
import { ButtonModal, ButtonSecondary, ButtonTitle } from "../Button/style";
import { LinkMidiumModal } from "../CancellationModal/style";
import { ScheduleContent, ScheduleLocalizacao, ScheduleModal } from "./style";
import { TitleScheduleModal } from "../Title/style";
import { ScheduleLabel, ScheduleLabelText } from "../Text/style";
import { ScheduleNivelConsulta } from "../Containers/style";
import { InputNivel, ScheduleInput } from "../Input/style";


export const ScheduleAppointment = ({
    visible,
    setShowModalSchedule,
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

                        <InputNivel
                            placeholder='Rotina'
                        />
                        <InputNivel
                            placeholder='Exame'
                        />
                        <InputNivel
                            placeholder='Urgência'
                        />

                    </ScheduleNivelConsulta>

                    <ScheduleLocalizacao>

                        <ScheduleLabel>Informe a localização desejada</ScheduleLabel>
                        <ScheduleInput
                            placeholder='Informe a localização'
                        />

                    </ScheduleLocalizacao>

                    <ButtonModal>
                        <ButtonTitle>Confirmar</ButtonTitle>
                    </ButtonModal>

                    <ButtonSecondary onPress={() => setShowModalSchedule(false)}>
                        <LinkMidiumModal>Cancelar</LinkMidiumModal>
                    </ButtonSecondary>

                </ScheduleContent>
            </ScheduleModal>
        </Modal>
    )
}