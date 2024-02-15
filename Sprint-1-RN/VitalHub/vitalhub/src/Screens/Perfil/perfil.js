import { Container, ScrollForm } from '../../components/Containers/style'
import { Input, TextInputShadow, TextInputShadowEmail, } from '../../components/Input/style'
import { ContainerPerfil, ScroolForm } from '../../components/Containers/style'
import { InputBoxShadow } from '../../components/Input/style'
import { PerfilImage } from '../../components/PerfilImage/style'
import { Text } from 'react-native'


import { InputPerfil, InputPerfilPerfil, LabelInput, LabelInput2, LabelInput3, LabelInput4, LabelInput5, LabelInput6, LabelPerfil, LabelPerfil2 } from '../../components/InputPerfil/style'
import { Button, ButtonPerfil, ButtonTitle, ButtonPerfilSair } from '../../components/Button/style'



export const Perfil = () => {
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
                        richard.kosta@gmail.com
                    </TextInputShadowEmail>
                </InputBoxShadow>


                <LabelInput>

                    <LabelPerfil>
                        Data de nascimento
                    </LabelPerfil>

                </LabelInput>
                <InputPerfilPerfil
                    placeholder='04/05/1999'

                />

                <LabelInput2>

                    <LabelPerfil>
                        CPF
                    </LabelPerfil>

                </LabelInput2>
                <InputPerfilPerfil
                    placeholder='859********'

                />

                <LabelInput3>

                    <LabelPerfil>
                        Endereço
                    </LabelPerfil>

                </LabelInput3>
                <InputPerfilPerfil
                    placeholder='Rua Vicenso Silva, 987'

                />

                <LabelInput4>

                    <LabelInput5>
                        <LabelPerfil2>
                            CEP
                        </LabelPerfil2>

                        <InputPerfilPerfil
                            placeholder='06548-909'
                        />
                    </LabelInput5>

                    <LabelInput6>
                        <LabelPerfil2>
                            Cidade
                        </LabelPerfil2>

                        <InputPerfilPerfil
                            placeholder='Moema-SP'

                        />
                    </LabelInput6>

                </LabelInput4>

                <ButtonPerfil>
                    <ButtonTitle>
                        Salvar
                    </ButtonTitle>
                </ButtonPerfil>

                <ButtonPerfil>
                    <ButtonTitle>
                        Editar
                    </ButtonTitle>
                </ButtonPerfil>

                <ButtonPerfilSair>
                    <ButtonTitle>
                        sair do app
                    </ButtonTitle>
                </ButtonPerfilSair>


            </ContainerPerfil>
        </ScroolForm>
    )

}