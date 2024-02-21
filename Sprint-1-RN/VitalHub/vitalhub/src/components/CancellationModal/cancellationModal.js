import { Modal } from "react-native"
import { LinkMidiumModal } from "./style"
import { ButtonSecondary } from "../Button/style"
import { ModalContent, ModalText, PatientModal } from "./style"
import { TitleModal } from "../Title/style"
import { ButtonModal, ButtonTitle } from "../Button/style"



export const CancellationModal = ({
    visible,
    setShowModalCancel,
    ...rest
}) => {
    return (
        <>
            <Modal {...rest} visible={visible} transparent={true} animationType="fade">
                {/* Container */}
                <PatientModal>
                    {/* Content */}
                    <ModalContent>
                        <TitleModal>Cancelar Consulta</TitleModal>
                        {/* Description */}
                        <ModalText>
                            Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu horário, deseja mesmo cancelar essa consulta?
                        </ModalText>

                        {/* Button */}
                        <ButtonModal>
                            <ButtonTitle>Confirmar </ButtonTitle>
                        </ButtonModal>

                        <ButtonSecondary onPress={() => setShowModalCancel(false)}>
                            <LinkMidiumModal>Cancelar</LinkMidiumModal>
                        </ButtonSecondary>

                    </ModalContent>

                </PatientModal>
            </Modal>
        </>
    )
}