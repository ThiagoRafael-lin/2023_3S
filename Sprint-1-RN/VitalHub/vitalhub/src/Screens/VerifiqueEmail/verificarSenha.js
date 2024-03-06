import { Container, ContainerVerificacao } from "../../components/Containers/style"
import { Logo } from "../../components/Logo/style"
import { Title } from "../../components/Title/style"
import { TextVerificarEmail, TextEmail } from "../../components/Text/style"
import { InputVerificar } from "../../components/Input/style"
import { ButtonRecuperar, ButtonTitle } from "../../components/Button/style"
import { ContentAccount, LinkMidium } from "../../components/LinkCadastro/style"

export const verificarEmail = ({ navigation }) => {
    return (
        <Container>

            <Logo
                source={require('../../../assets/VitaHub Logo.png')}
            />

            <Title> Verifique seu e-mail </Title>

            <TextVerificarEmail>
                Digite o código de 4 dígitos enviado para o e-mail
            </TextVerificarEmail>
            <TextEmail>
                username@email.com
            </TextEmail>

            <ContainerVerificacao>

                <InputVerificar
                    placeholder='0'
                />
                <InputVerificar
                    placeholder='0'
                />
                <InputVerificar
                    placeholder='0'
                />
                <InputVerificar
                    placeholder='0'
                />

            </ContainerVerificacao>

            <ButtonRecuperar onPress={() => navigation.replace('redefinirSenha')}>
                <ButtonTitle>
                    Entrar
                </ButtonTitle>
            </ButtonRecuperar>


            <ContentAccount>
                <LinkMidium>
                    Reenviar código
                </LinkMidium>
            </ContentAccount>



        </Container>
    )
}