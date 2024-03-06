import { ButtonModal, ButtonModalSelecionarData, ButtonSecondaryClinica, ButtonTitle } from "../../components/Button/style"
import CalendarComponent from "../../components/CalendarComponent/CalendarComponent"
import { LinkMidiumModal } from "../../components/CancellationModal/style"
import { AgendarConsultaContainer, DownArrow } from "../../components/Containers/style"
import { Input, InputSelecionarData } from "../../components/Input/style"
import { LabelHorarioDisponivel } from "../../components/Text/style"
import { TitleAgendar } from "../../components/Title/style"
import { FontAwesome6 } from '@expo/vector-icons';
import InputSelect from "../../components/InputSelect/InputSelect"
import { useState } from "react"
import { AgendarConsulta } from "../../components/AgendarConsulta/AgendarConsulta"


export const SelecionarData = ({
    navigation
}) => {

    const [showModalAgendarConsulta, setShowModalAgendarConsulta] = useState(false);

    return (

        <AgendarConsultaContainer>

            <TitleAgendar>Selecionar data</TitleAgendar>

            <CalendarComponent />

            <LabelHorarioDisponivel>Selecione um horário disponível</LabelHorarioDisponivel>

            <InputSelect />


            {/* modal de ver consulta agendada */}
            <AgendarConsulta
                visible={showModalAgendarConsulta}
                setShowModalAgendarConsulta={setShowModalAgendarConsulta}
                navigation={navigation}
            />

            <ButtonModalSelecionarData onPress={() => setShowModalAgendarConsulta(true)}>
                <ButtonTitle>Continuar</ButtonTitle>
            </ButtonModalSelecionarData>

            <ButtonSecondaryClinica onPress={() => navigation.navigate('HomePaciente')}>
                <LinkMidiumModal>Cancelar</LinkMidiumModal>
            </ButtonSecondaryClinica>

        </AgendarConsultaContainer>


    )

}