import { Modal } from 'react-native'
import { ButtonModal, ButtonSecondary, ButtonTitle } from '../Button/style'
import { LinkMidiumModal } from '../CancellationModal/style'
import { RecordModalInfo } from '../Containers/style'
import { AgePatiente, EmailPatiente, ImageRecordModal, RecordContent, RecordModal } from '../MedicalRecordModal/style'
import { TitleRecordModal } from '../Title/style'


export const ModalMedicalRecord = ({
    visible,
    setShowModalAppointment,
    setMedicalRecordModal,
    navigation,
    ...rest
}) => {

    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">

            {/* Container */}
            <RecordModal>

                {/* conteudo */}
                <RecordContent>

                    {/* imagem de perfil */}
                    <ImageRecordModal
                        source={require('../../../assets/ImagemMedicoMedio.png')}
                    />

                    {/* titulo/nome */}
                    <TitleRecordModal>Dr. Claudio</TitleRecordModal>

                    {/* Container */}
                    <RecordModalInfo>

                        {/* idade do paciente */}
                        <AgePatiente>Cliníco geral</AgePatiente>

                        {/* email do paciente */}
                        <EmailPatiente>CRM-15286</EmailPatiente>

                    </RecordModalInfo>

                    {/* botão Confirmar */}
                    <ButtonModal onPress={() => navigation.navigate('LocalConsulta')} >

                        {/* titulo do botão */}
                        <ButtonTitle>Ver local da consulta</ButtonTitle>

                    </ButtonModal>

                    {/* botão cancelar */}
                    <ButtonSecondary onPress={() => navigation.navigate('HomePaciente')}>

                        {/* titulo do botão */}
                        <LinkMidiumModal>Cancelar</LinkMidiumModal>

                    </ButtonSecondary>

                </RecordContent>
            </RecordModal>

        </Modal>
    )

}