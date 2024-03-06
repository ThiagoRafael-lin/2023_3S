import { ButtonRecuperar, ButtonTitle } from "../../components/Button/style"
import { Container } from "../../components/Containers/style"
import { InputCriarConta } from "../../components/Input/style"
import { ContentAccount, LinkMidium } from "../../components/LinkCadastro/style"
import { Logo } from "../../components/Logo/style"
import { Title } from "../../components/Title/style"
import { TextCriar } from "../../components/Text/style"

export const CriarAConta = ({ navigation }) => {
    
    return (

        <Container>

            <Logo
                source={require('../../../assets/VitaHub Logo.png')}
            />

            <Title>
                Criar Conta
            </Title>

            <TextCriar>
                Insira seu endereço de e-mail e senha para realizar seu cadastro.
            </TextCriar>

            <InputCriarConta
                placeholder='Usuário ou E-mail'
            />

            <InputCriarConta
                placeholder='Senha'
            />

            <InputCriarConta
                placeholder='Confirmar senha'
            />

            <ButtonRecuperar onPress={() => navigation.replace('Login')}>
                <ButtonTitle>
                    Cadastrar
                </ButtonTitle>
            </ButtonRecuperar>


            <ContentAccount>
                <LinkMidium
                    onPress={() => navigation.replace('Login')}
                >
                    Cancelar
                </LinkMidium>
            </ContentAccount>

        </Container>

    )
}