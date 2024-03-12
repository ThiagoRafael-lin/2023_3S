import { ContainerTituloConsulta, LocalConsultaContainer, LocalContainerContentInput } from '../../components/Containers/style'
import { InputLocal, InputLocalContent } from '../../components/Input/style'
import { LabelEndereco, LabelEnderecoBairro, LabelEnderecoEndereco, LocalSubTitulo } from '../../components/Text/style'
import { LocalTitulo } from '../../components/Title/style'
import { LocalConsultaContent, LocalContainerContent, Mapa } from './style'
import { ButtonSecondaryClinica, ButtonSecondaryLocal, ButtonSecondaryLocalConsulta } from '../../components/Button/style';
import { LinkMidiumModal } from "../../components/CancellationModal/style";
import { MapLocation } from '../../components/MapLocation/MapLocation'


export const LocalConsulta = ({ navigation }) => {
    return (


        // container
        <LocalConsultaContainer>

            {/* imagem do mapa */}
            {/* <Mapa
                source={require('../../../assets/Mapa.png')}

            /> */}

            <MapLocation
            
            />

            {/* conteudo */}
            <LocalConsultaContent>

                {/* container do titulo */}
                <ContainerTituloConsulta>

                    {/* Nome da clinica */}
                    <LocalTitulo>Clínica Natureh</LocalTitulo>

                    {/* localidade da cliica */}
                    <LocalSubTitulo>São Paulo, SP</LocalSubTitulo>

                </ContainerTituloConsulta>

                {/* label do input */}
                <LabelEnderecoEndereco>Endereço</LabelEnderecoEndereco>

                {/* input */}
                <InputLocal
                    placeholder='Rua Vicenso Silva, 987'
                />


                {/* container do conteudo */}
                <LocalContainerContent>

                    {/* label do input */}
                    <LabelEndereco>Número</LabelEndereco>

                    {/* input */}
                    <InputLocalContent
                        placeholder='578'
                    />

                    {/* label do input */}
                    <LabelEnderecoBairro>Bairro</LabelEnderecoBairro>

                    {/* input */}
                    <InputLocalContent
                        placeholder='Moema-SP'
                    />

                </LocalContainerContent>

                <ButtonSecondaryLocalConsulta onPress={() => navigation.navigate('HomePaciente')}>
                    <LinkMidiumModal>Voltar</LinkMidiumModal>
                </ButtonSecondaryLocalConsulta>


            </LocalConsultaContent>


        </LocalConsultaContainer>



    )
}