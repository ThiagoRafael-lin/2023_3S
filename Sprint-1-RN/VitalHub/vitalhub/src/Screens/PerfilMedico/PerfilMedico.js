import { ButtonPerfil, ButtonPerfilMedico, ButtonTitle } from '../../components/Button/style'
import { ContainerPerfil, ScroolForm } from '../../components/Containers/style'
import { InputBoxShadow, TextInputCRMMedico, TextInputPerfilMedico, TextInputShadow, TextInputShadowEmail } from '../../components/Input/style'
import { InputPerfilPerfil, LabelInput, LabelInput2, LabelInput3, LabelInput4, LabelInput5, LabelInput6, LabelPerfil, LabelPerfil2 } from '../../components/InputPerfil/style'
import { PerfilImage } from '../../components/PerfilImage/style'



export const PerfilMedico = () => {
    return (

        <ScroolForm>
            <ContainerPerfil>
                <PerfilImage
                    source={require('../../../assets/ImagemMedicoGrande.png')}
                />


                <TextInputPerfilMedico>
                    Dr. Claudio
                </TextInputPerfilMedico>
                <TextInputCRMMedico>
                    CRM-15286
                </TextInputCRMMedico>


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

                <ButtonPerfilMedico>
                    <ButtonTitle>
                        Editar
                    </ButtonTitle>
                </ButtonPerfilMedico>

            </ContainerPerfil>
        </ScroolForm>

    )
}