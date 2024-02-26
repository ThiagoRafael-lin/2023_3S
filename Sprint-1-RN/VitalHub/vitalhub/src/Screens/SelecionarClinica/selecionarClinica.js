import { CardClinica } from "../../components/CardClinica/CardClinica"
import { ClinicaCardContainer } from "../../components/Containers/style"
import { TitleClinica } from "../../components/Title/style"
import { ButtonModal, ButtonSecondaryClinica, ButtonTitle } from "../../components/Button/style";
import { LinkMidiumModal } from "../../components/CancellationModal/style";

export const SelecionarClinica = () => {
    return (

        // Container
        <ClinicaCardContainer>

            <TitleClinica>Selecionar clínica</TitleClinica>

            <CardClinica

            />
            <CardClinica

            />
            <CardClinica

            />
            <CardClinica

            />

            <ButtonModal>
                <ButtonTitle>Continuar</ButtonTitle>
            </ButtonModal>

            <ButtonSecondaryClinica>
                <LinkMidiumModal>Cancelar</LinkMidiumModal>
            </ButtonSecondaryClinica>



        </ClinicaCardContainer>
    )
}