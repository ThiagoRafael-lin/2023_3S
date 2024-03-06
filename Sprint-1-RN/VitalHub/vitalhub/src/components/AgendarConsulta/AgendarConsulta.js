import { Modal } from "react-native"
import { AgendarConsultaContent } from "./style"
import { AgendarConsultaContainerPaciente, ContainerTituloSubtitulo } from "../Containers/style"
import { AgendarSubTitulo, AgendarSubTituloConteudo, AgendarTitulo, AgendarTituloConteudo } from "../Text/style"
import { ButtonModal, ButtonModalAgendarConsulta, ButtonSecondaryClinica, ButtonTitle } from "../Button/style"
import { LinkMidiumModal } from "../CancellationModal/style"
import { ScheduleModal, ScheduleModalAgendarConsulta } from "../ScheduleAppointment/style"

export const AgendarConsulta = ({
    visible,
    setShowModalAgendarConsulta,
    navigation,
    ...rest
}) => {
    return (

        <Modal {...rest} visible={visible} transparent={true} animationType="fade">

            <ScheduleModalAgendarConsulta>


                {/* container */}
                <AgendarConsultaContainerPaciente>

                    {/* agendar consulta conteudo */}
                    <AgendarConsultaContent>

                        {/* titulo */}
                        <AgendarTitulo>Agendar consulta</AgendarTitulo>

                        {/* subtitulo */}
                        <AgendarSubTitulo>Consulte os dados selecionados para a sua consulta</AgendarSubTitulo>


                        {/* container do conteudo */}
                        <ContainerTituloSubtitulo>

                            {/* titulo do conteudo */}
                            <AgendarTituloConteudo>Data da consulta</AgendarTituloConteudo>

                            {/* subtitulo do conteudo */}
                            <AgendarSubTituloConteudo>1 de Novembro de 2023</AgendarSubTituloConteudo>

                        </ContainerTituloSubtitulo>



                        {/* container do conteudo */}
                        <ContainerTituloSubtitulo>

                            {/* titulo do conteudo */}
                            <AgendarTituloConteudo>Médico(a) da consulta</AgendarTituloConteudo>

                            {/* subtitulo do conteudo */}
                            <AgendarSubTituloConteudo>Dra Alessandra</AgendarSubTituloConteudo>
                            <AgendarSubTituloConteudo>Demartologa, Esteticista</AgendarSubTituloConteudo>

                        </ContainerTituloSubtitulo>



                        {/* container do conteudo */}
                        <ContainerTituloSubtitulo>

                            {/* titulo do conteudo */}
                            <AgendarTituloConteudo>Local da consulta</AgendarTituloConteudo>

                            {/* subtitulo do conteudo */}
                            <AgendarSubTituloConteudo>São Paulo, SP</AgendarSubTituloConteudo>

                        </ContainerTituloSubtitulo>



                        {/* container do conteudo */}
                        <ContainerTituloSubtitulo>

                            {/* titulo do conteudo */}
                            <AgendarTituloConteudo>Tipo da consulta</AgendarTituloConteudo>

                            {/* subtitulo do conteudo */}
                            <AgendarSubTituloConteudo>Rotina</AgendarSubTituloConteudo>

                        </ContainerTituloSubtitulo>



                        {/* titulo do conteudo */}

                        <ButtonModalAgendarConsulta onPress={() => navigation.navigate('HomePaciente')}>
                            <ButtonTitle>Continuar</ButtonTitle>
                        </ButtonModalAgendarConsulta>

                        <ButtonSecondaryClinica onPress={() => navigation.navigate('HomePaciente')}>
                            <LinkMidiumModal>Cancelar</LinkMidiumModal>
                        </ButtonSecondaryClinica>

                    </AgendarConsultaContent>

                </AgendarConsultaContainerPaciente>

            </ScheduleModalAgendarConsulta>


        </Modal>
    )
}