import { Modal } from "react-native"
import { LinkMidiumModal } from "./style"
import { ButtonModalCancellation, ButtonSecondary } from "../Button/style"
import { ModalContent, ModalText, PatientModal } from "./style"
import { TitleModal } from "../Title/style"
import { ButtonModal, ButtonTitle } from "../Button/style"

import * as Notification from "expo-notifications"

Notification.requestPermissionsAsync();

Notification.setNotificationHandler({
    handleNotification: async () => ({

        //Mostrar um alerta quando a notificacao for recebida
        shouldShowAlert: true,

        //Reproduz som ao receber a notificacao
        shouldPlaySound: true,

        //Mostrar quantidade de notificacoes no icone do app
        shouldSetBadge: false

    })
})

export const CancellationModal = ({
    visible,
    setShowModalCancel,
    navigation,
    ...rest
}) => {

    const handleCallNotifications = async () => {

        //obtem o status da permissao
        const { status } = await Notification.getPermissionsAsync();

        //verifica se o usuario permitiu as notificaçoes
        if (status != 'granted') {
            alert('Você não ativou as notificações')
            return;
        }

        //Agenda uma notificação
        await Notification.scheduleNotificationAsync({
            content: {
                title: "Consulta finalizada",
                body: "Notificação recebida",
                sound: "Notification.mp3"
            },
            trigger: null
        })
    }

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
                        <ButtonModalCancellation onPress={() => setShowModalCancel(false)}>
                            <ButtonTitle onPress={handleCallNotifications}>Confirmar</ButtonTitle>
                        </ButtonModalCancellation>

                        <ButtonSecondary onPress={() => setShowModalCancel(false)}>
                            <LinkMidiumModal>Cancelar</LinkMidiumModal>
                        </ButtonSecondary>

                    </ModalContent>

                </PatientModal>
            </Modal>
        </>
    )
}