import { ButtonModal, ButtonSecondaryClinica, ButtonTitle } from '../Button/style'
import { LinkMidiumModal } from '../CancellationModal/style'
import { MedicoContainerButton, NomeEspecialidade, SelecionarMedicoContainer } from '../Containers/style'
import { ImagePerfilMedico } from '../Logo/style'
import { Especialidade, NomeMedico } from '../Text/style'

export const CardMedical = ({
    name,
    profissao,
    source,


}) => {
    return (

        // Container
        <SelecionarMedicoContainer>

            {/* imagem do perfil */}
            <ImagePerfilMedico
                source={source}
            />

            {/* container do nome e especialidade  */}
            <NomeEspecialidade>

                {/* nome do medico */}
                <NomeMedico>{name}</NomeMedico>

                {/* especialidade do medico */}
                <Especialidade>{profissao}</Especialidade>

            </NomeEspecialidade>

           
        </SelecionarMedicoContainer>

    )
}