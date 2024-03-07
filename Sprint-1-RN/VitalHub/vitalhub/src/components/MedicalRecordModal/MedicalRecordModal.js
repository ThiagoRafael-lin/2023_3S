import { ButtonModal, ButtonSecondary, ButtonTitle } from "../Button/style"
import { LinkMidiumModal } from "../CancellationModal/style"
import { TitleModal, TitleRecordModal } from "../Title/style"
import { Modal } from "react-native"
import { AgePatiente, EmailPatiente, ImageRecordModal, RecordContent, RecordModal } from "./style"
import { RecordModalInfo } from "../Containers/style"

export const MedicalRecordModal = ({
    visible,
    setShowModalAppointment,
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
                    <ButtonModal onPress={() => navigation.navigate('Prontuario')}>

                        {/* titulo do botão */}
                        <ButtonTitle>Inserir Prontuário</ButtonTitle>

                    </ButtonModal>

                    {/* botão cancelar */}
                    <ButtonSecondary onPress={() => navigation.navigate('Home')}/*onPress={setShowModalAppointment}*/>

                        {/* titulo do botão */}
                        <LinkMidiumModal>Cancelar</LinkMidiumModal>

                    </ButtonSecondary>

                </RecordContent>
            </RecordModal>

        </Modal>

    )

}