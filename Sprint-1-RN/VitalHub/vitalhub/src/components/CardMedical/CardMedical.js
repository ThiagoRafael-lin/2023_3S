import { NomeEspecialidade, SelecionarMedicoContainer } from '../Containers/style'
import { ImagePerfilMedico } from '../Logo/style'
import { Especialidade, NomeMedico } from '../Text/style'

export const CardMedical = () => {
    return (

        // Container
        <SelecionarMedicoContainer>

                {/* imagem do perfil */}
            <ImagePerfilMedico
                source={require('../../../assets/medicoImagePerfil.png')}
            />

                {/* container do nome e especialidade  */}
            <NomeEspecialidade>

                    {/* nome do medico */}
                <NomeMedico>Dra Alessandra</NomeMedico>

                {/* especialidade do medico */}
                <Especialidade>Demartologa, Esteticista</Especialidade>

            </NomeEspecialidade>


        </SelecionarMedicoContainer>

    )
}