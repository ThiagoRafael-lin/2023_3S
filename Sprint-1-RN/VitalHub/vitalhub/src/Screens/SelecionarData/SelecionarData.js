import { ButtonModal, ButtonSecondaryClinica, ButtonTitle } from "../../components/Button/style"
import CalendarComponent from "../../components/CalendarComponent/CalendarComponent"
import { LinkMidiumModal } from "../../components/CancellationModal/style"
import { AgendarConsultaContainer, DownArrow } from "../../components/Containers/style"
import Dropdown from "../../components/Dropdown/Dropdown"
import { Input, InputSelecionarData } from "../../components/Input/style"
import { LabelHorarioDisponivel } from "../../components/Text/style"
import { TitleAgendar } from "../../components/Title/style"
import { FontAwesome6 } from '@expo/vector-icons';

export const SelecionarData = () => {
    return (

        <AgendarConsultaContainer>

            <TitleAgendar>Selecionar data</TitleAgendar>

            <CalendarComponent />

            <LabelHorarioDisponivel>Selecione um horário disponível</LabelHorarioDisponivel>

            <Dropdown />

            {/* <InputSelecionarData

                placeholder='Selecionar horário'

            />
            <DownArrow>
                <FontAwesome6 name="sort-down" size={24} color="#34898F" />
            </DownArrow> */}

            <ButtonModal>
                <ButtonTitle>Continuar</ButtonTitle>
            </ButtonModal>

            <ButtonSecondaryClinica>
                <LinkMidiumModal>Cancelar</LinkMidiumModal>
            </ButtonSecondaryClinica>

        </AgendarConsultaContainer>


    )

}