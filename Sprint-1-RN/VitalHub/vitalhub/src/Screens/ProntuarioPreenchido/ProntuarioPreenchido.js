import { ButtonPerfil, ButtonPerfilProntuarioPreenchido, ButtonPerfilSair, ButtonTitle } from '../../components/Button/style'
import { ContainerPerfil, ScroolForm } from '../../components/Containers/style'
import { TextInputSubTitulo, TextInputTitle } from '../../components/Input/style'
import { LabelInput, LabelProntuarioDesc, LabelProntuarioDiag, LabelProntuarioVisu } from '../../components/InputPerfil/style'
import { ContentAccountProtuario, LinkMidiumPront } from '../../components/LinkCadastro/style'
import { LogoVisu } from '../../components/Logo/style'
import { InputProntuarioDesc, InputProntuarioVisu } from '../../components/Text/style'

export const ProntuarioPreenchido = ({ navigation }) => {
    return (
        <ScroolForm>

            <ContainerPerfil>

                <LogoVisu
                    source={require('../../../assets/perfilImage.jpg')}
                />

                <TextInputTitle>Richard Kosta</TextInputTitle>
                <TextInputSubTitulo>22 anos         richard.kosta@gmail.com</TextInputSubTitulo>


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

                <ButtonPerfil onPress={() => navigation.navigate('Prontuario')}>
                    <ButtonTitle>
                        Salvar
                    </ButtonTitle>
                </ButtonPerfil>

                <ButtonPerfilProntuarioPreenchido onPress={() => navigation.navigate('Prontuario')}>
                    <ButtonTitle>
                        Editar
                    </ButtonTitle>
                </ButtonPerfilProntuarioPreenchido>

                <ContentAccountProtuario onPress={() => navigation.navigate('Home')}>
                    <LinkMidiumPront>
                        Cancelar
                    </LinkMidiumPront>
                </ContentAccountProtuario>

            </ContainerPerfil>
        </ScroolForm>
    )
}