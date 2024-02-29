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
                        source={require('../../../assets/imagemPerfilGrande.png')}
                    />

                    {/* titulo/nome */}
                    <TitleRecordModal>Niccole Sarga</TitleRecordModal>

                    {/* Container */}
                    <RecordModalInfo>

                        {/* idade do paciente */}
                        <AgePatiente>22 anos</AgePatiente>

                        {/* email do paciente */}
                        <EmailPatiente>niccole.sarga@gmail.com</EmailPatiente>

                    </RecordModalInfo>

                    {/* botão Confirmar */}
                    <ButtonModal>

                        {/* titulo do botão */}
                        <ButtonTitle>Inserir Prontuário</ButtonTitle>

                    </ButtonModal>

                    {/* botão cancelar */}
                    <ButtonSecondary onPress={() => setMedicalRecordModal(false)}>

                        {/* titulo do botão */}
                        <LinkMidiumModal>Cancelar</LinkMidiumModal>

                    </ButtonSecondary>

                </RecordContent>
            </RecordModal>

        </Modal>
    )

}