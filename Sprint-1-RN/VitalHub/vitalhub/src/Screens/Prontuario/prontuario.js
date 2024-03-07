import { ButtonPerfil, ButtonPerfilSair, ButtonTitle } from '../../components/Button/style'
import { ContainerPerfil, ScroolForm } from '../../components/Containers/style'
import { InputBoxShadow, TextInputShadow, TextInputShadowEmail } from '../../components/Input/style'
import { InputPerfilPerfil, InputProntuario, InputProntuarioDiag, LabelInput, LabelPerfil, LabelProntuarioDesc, LabelProntuarioDiag } from '../../components/InputPerfil/style'
import { ContentAccount, ContentAccountProtuario, LinkMidium, LinkMidiumPront } from '../../components/LinkCadastro/style'
import { PerfilImage } from '../../components/PerfilImage/style'

export const Prontuario = ({ navigation }) => {
    return (

        <ScroolForm>
            <ContainerPerfil>

                <PerfilImage
                    source={require('../../../assets/perfilImage.jpg')}
                />


                <InputBoxShadow>
                    <TextInputShadow>
                        Richard Kosta
                    </TextInputShadow>
                    <TextInputShadowEmail>
                        22 anos richard.kosta@gmail.com
                    </TextInputShadowEmail>
                </InputBoxShadow>


                <LabelInput>

                    <LabelProntuarioDiag>
                        Descrição da consulta
                    </LabelProntuarioDiag>

                </LabelInput>
                <InputProntuario
                    placeholder='Descrição'

                />

                <LabelInput>

                    <LabelProntuarioDesc>
                        Diagnóstico do paciente
                    </LabelProntuarioDesc>

                </LabelInput>
                <InputProntuarioDiag
                    placeholder='Diagnóstico'

                />

                <LabelInput>

                    <LabelProntuarioDiag>
                        Descrição da consulta
                    </LabelProntuarioDiag>

                </LabelInput>
                <InputProntuario
                    placeholder='Prescrição medica'

                />

                <ButtonPerfil>
                    <ButtonTitle>
                        Salvar
                    </ButtonTitle>
                </ButtonPerfil>

                <ButtonPerfilSair onPress={() => navigation.replace('ProntuarioPreenchido')}>
                    <ButtonTitle>
                        Editar
                    </ButtonTitle>
                </ButtonPerfilSair>

                <ContentAccountProtuario>
                    <LinkMidiumPront
                        onPress={() => navigation.navigate('Login')}
                    >
                        Cancelar
                    </LinkMidiumPront>
                </ContentAccountProtuario>

            </ContainerPerfil>

        </ScroolForm>

    )


}