import { ButtonCamera, ButtonModalVizualizarProntuario, ButtonPerfil, ButtonPerfilSair, ButtonSecondaryLocal, ButtonSecondaryVisu, ButtonSecondaryVisualizar, ButtonTitle, ButtonTitleVizualizar } from '../../components/Button/style'
import { LinkMidiumModal, LinkMidiumVisualizar } from '../../components/CancellationModal/style'
import { ContainerPerfil, Line, ScroolForm } from '../../components/Containers/style'
import { InputBoxShadow, TextInputShadow, TextInputShadowEmail, TextInputSubTitulo, TextInputTitle } from '../../components/Input/style'
import { InputProntuario, InputProntuarioDiag, InputProntuarioDiagPaciente, InputProntuarioExame, InputProntuarioPrescri, InputProntuarioResultado, LabelInput, LabelProntuarioDesc, LabelProntuarioDiag, LabelProntuarioExames, LabelProntuarioVisu } from '../../components/InputPerfil/style'
import { Logo, LogoVisu } from '../../components/Logo/style'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { InputProntuarioDesc, InputProntuarioVisu } from '../../components/Text/style'

export const VisualizarProntuario = ({ navigation }) => {
    return (

        <ScroolForm>

            <ContainerPerfil>

                <LogoVisu
                    source={require('../../../assets/ImagemMedicoGrande.png')}
                />

                <TextInputTitle>Dr. Claudio</TextInputTitle>
                <TextInputSubTitulo>Cliníco geral CRM-15286</TextInputSubTitulo>


                <LabelInput>

                    <LabelProntuarioDiag>Descrição da consulta</LabelProntuarioDiag>

                </LabelInput>
                <InputProntuarioVisu>
                    O paciente possuí uma
                    infecção no ouvido. Necessário repouse de 2 dias e acompanhamento médico constante
                </InputProntuarioVisu>

                <LabelInput>

                    <LabelProntuarioDesc>Diagnóstico do paciente</LabelProntuarioDesc>

                </LabelInput>
                <InputProntuarioDesc>
                    Infecção no ouvido
                </InputProntuarioDesc>

                <LabelInput>

                    <LabelProntuarioVisu>Prescrição médica</LabelProntuarioVisu>

                </LabelInput>
                <InputProntuarioVisu>
                    Medicamento: Advil{'\n'}
                    Dosagem: 50 mg{'\n'}
                    Frequência: 3 vezes ao dia{'\n'}
                    Duração: 3 dias
                </InputProntuarioVisu>

                <LabelInput>

                    <LabelProntuarioExames>Exames médicos</LabelProntuarioExames>

                </LabelInput>
                <InputProntuarioExame>
                    <MaterialCommunityIcons name="file-alert-outline" size={24} color="black" />
                    Nenhuma foto informada
                </InputProntuarioExame>

                <ButtonCamera onPress={() => navigation.navigate('Camera')}>

                    <ButtonModalVizualizarProntuario>
                        <MaterialCommunityIcons name="camera-plus-outline" size={24} color="#fff" />
                        <ButtonTitleVizualizar>Enviar</ButtonTitleVizualizar>
                    </ButtonModalVizualizarProntuario>

                </ButtonCamera>

                <ButtonSecondaryVisu>
                    <LinkMidiumVisualizar>Cancelar</LinkMidiumVisualizar>
                </ButtonSecondaryVisu>

                <Line></Line>

                <InputProntuarioDesc>
                    Resultado do exame de sangue : tudo normal
                </InputProntuarioDesc>

                <ButtonSecondaryVisualizar>
                    <LinkMidiumModal>Voltar</LinkMidiumModal>
                </ButtonSecondaryVisualizar>

            </ContainerPerfil>
        </ScroolForm>


    )
}