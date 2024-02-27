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
                name={"Clínica Natureh"}
                localidade={"São Paulo, SP"}
            />
            <CardClinica
                name={"Diamond Pró-Mulher"}
                localidade={"São Paulo, SP"}
            />
            <CardClinica
                name={"Clinica Villa Lobos"}
                localidade={"Taboão, SP"}
            />
            <CardClinica
                name={"SP Oncologia Clínica"}
                localidade={"Taboão, SP"}
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