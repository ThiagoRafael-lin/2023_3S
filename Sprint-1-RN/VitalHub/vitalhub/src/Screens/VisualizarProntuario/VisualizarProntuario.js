import { ButtonPerfil, ButtonPerfilSair, ButtonSecondaryLocal, ButtonTitle } from '../../components/Button/style'
import { LinkMidiumModal } from '../../components/CancellationModal/style'
import { ContainerPerfil, ScroolForm } from '../../components/Containers/style'
import { InputBoxShadow, TextInputShadow, TextInputShadowEmail } from '../../components/Input/style'
import { InputProntuario, InputProntuarioDiag, InputProntuarioExame, InputProntuarioResultado, InputProntuarioVisu, LabelInput, LabelProntuarioDesc, LabelProntuarioDiag, LabelProntuarioExames, LabelProntuarioVisu } from '../../components/InputPerfil/style'
import { Logo, LogoVisu } from '../../components/Logo/style'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const VisualizarProntuario = () => {
    return (

        <ScroolForm>

            <ContainerPerfil>

                <LogoVisu
                    source={require('../../../assets/ImagemMedicoGrande.png')}
                />

                <TextInputShadow>Dr. Claudio</TextInputShadow>
                <TextInputShadowEmail>Cliníco geral CRM-15286</TextInputShadowEmail>


                <LabelInput>

                    <LabelProntuarioDiag>Descrição da consulta</LabelProntuarioDiag>

                </LabelInput>
                <InputProntuarioVisu
                    placeholder='O paciente possuí uma infecção no ouvido.
                    Necessário repouse de 2 dias e acompanhamento médico constante'

                />

                <LabelInput>

                    <LabelProntuarioDesc>Diagnóstico do paciente</LabelProntuarioDesc>

                </LabelInput>
                <InputProntuarioDiag
                    placeholder='Infecção no ouvido'

                />

                <LabelInput>

                    <LabelProntuarioVisu>Prescrição médica</LabelProntuarioVisu>

                </LabelInput>
                <InputProntuario
                    placeholder='Medicamento: Advil Dosagem: 50 mg Frequência: 3 vezes ao dia Duração: 3 dias'

                />

                <LabelInput>

                    <LabelProntuarioExames>Exames médicos</LabelProntuarioExames>

                </LabelInput>
                <InputProntuarioExame>
                    <MaterialCommunityIcons name="file-alert-outline" size={24} color="black" />
                    Nenhuma foto informada
                </InputProntuarioExame>


                {/* fazer os dois botoes "enviar" e "cancelar" */}



                <InputProntuarioResultado
                    placeholder='Resultado do exame de sangue : tudo normal'

                />

                <ButtonSecondaryLocal>
                    <LinkMidiumModal>Voltar</LinkMidiumModal>
                </ButtonSecondaryLocal>

            </ContainerPerfil>
        </ScroolForm>


    )
}