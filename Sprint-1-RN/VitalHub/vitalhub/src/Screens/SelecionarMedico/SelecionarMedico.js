import { ButtonModal, ButtonSecondaryClinica, ButtonTitle } from "../../components/Button/style"
import { LinkMidiumModal } from "../../components/CancellationModal/style"
import { CardMedical } from "../../components/CardMedical/CardMedical"
import { MedicalContainer, MedicalContent } from "../../components/Containers/style"
import { TitleMedico } from "../../components/Title/style"

export const SelecionarMedico = () => {
    return (

        // container
        <MedicalContainer>

            {/* <MedicalContent> */}
                {/* titulo do medico */}
                <TitleMedico>Selecionar médico</TitleMedico>

                {/* card */}
                <CardMedical
                    name={'Dra Alessandra'}
                    profissao={'Demartologa, Esteticista'}
                    source={require('../../../assets/medicoImagePerfil.png')}

                />
                <CardMedical
                    name={'Dr Kumushiro'}
                    profissao={'Cirurgião, Cardiologista'}
                    source={require('../../../assets/DrKumushiro.png')}
                    />
                <CardMedical
                    name={'Dr Rodrigo Santos'}
                    profissao={'Clínico, Pediatra'}
                    source={require('../../../assets/DrRodrigo santos.png')}
                />

            {/* </MedicalContent> */}

            <ButtonModal>
                <ButtonTitle>Continuar</ButtonTitle>
            </ButtonModal>

            <ButtonSecondaryClinica>
                <LinkMidiumModal>Cancelar</LinkMidiumModal>
            </ButtonSecondaryClinica>


        </MedicalContainer>


    )
}