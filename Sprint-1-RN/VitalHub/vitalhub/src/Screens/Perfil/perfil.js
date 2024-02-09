import { Container } from '../../components/Containers/style'
import { Input, TextInputShadow, TextInputShadowEmail, } from '../../components/Input/style'
import { ContainerPerfil } from '../../components/Containers/style'
import { InputBoxShadow } from '../../components/Input/style'
import { PerfilImage } from '../../components/PerfilImage/style'
import { Text } from 'react-native'


import { InputPerfil, LabelInput, LabelInput2, LabelInput3, LabelPerfil } from '../../components/InputPerfil/style'



export const Perfil = () => {
    return (
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
            <InputPerfil
                placeholder='04/05/1999'

            />

            <LabelInput2>

                <LabelPerfil>
                    CPF
                </LabelPerfil>

            </LabelInput2>
            <InputPerfil
                placeholder='859********'

            />

            <LabelInput3>

                <LabelPerfil>
                    Endereço
                </LabelPerfil>

            </LabelInput3>
            <InputPerfil
                placeholder='Rua Vicenso Silva, 987'

            />

 {/* terminar de fazer os ultimo dois campos e colocar o css "flex-direction: row;" */}

 {/* e colocar a componente de ScrollView para poder rolar a tela */}

            <InputPerfil
                placeholder='Rua Vicenso Silva, 987'

            />

            <InputPerfil
                placeholder='Rua Vicenso Silva, 987'

            />




        </ContainerPerfil>



    )

}