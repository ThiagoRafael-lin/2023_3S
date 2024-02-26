import { CardMedical } from "../../components/CardMedical/CardMedical"
import { MedicalContainer } from "../../components/Containers/style"
import { TitleMedico } from "../../components/Title/style"

export const SelecionarMedico = () => {
    return (

        // container
        <MedicalContainer>

                {/* titulo do medico */}
            <TitleMedico>Selecionar médico</TitleMedico>

                {/* card */}
            <CardMedical

            />

        </MedicalContainer>


    )
}