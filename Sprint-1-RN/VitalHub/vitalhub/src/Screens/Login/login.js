import { Container } from "../../components/Containers/style"
import { Logo } from "../../components/Logo/style"
import { Title } from "../../components/Title/style"
import { Input } from "../../components/Input/style"
import { ContentAccount, LinkAccount, LinkMidium, TextAccount } from "../../components/LinkCadastro/style"
import { Button, ButtonTitle } from "../../components/Button/style"
import { ButtonGoogle, ButtonTitleGoogle } from "../../components/ButtonGoogle/style"
import { AntDesign } from '@expo/vector-icons';


export const Login = ({ navigation }) => {

    async function Login() {
        navigation.navigate("Main")
    }

    return (

        <Container>

            <Logo
                source={require('../../../assets/VitaHub Logo.png')}
            />

            <Title> Entrar ou criar conta </Title>

            <Input

                placeholder='Usuário ou E-mail'

            />

            <Input

                placeholder='Senha'

            />

            <LinkMidium
                onPress={() => navigation.navigate('esqueceuSuaSenha')}>
                Esqueceu sua senha?
            </LinkMidium>

            <Button onPress={(e) => Login()}>
                <ButtonTitle>Entrar</ButtonTitle>
            </Button>

            <ButtonGoogle>
                <AntDesign name="google" size={20} color="#496BBA" />
                <ButtonTitleGoogle>
                    Entrar com Google
                </ButtonTitleGoogle>
            </ButtonGoogle>


            <ContentAccount>
                <TextAccount>
                    Não tem conta? <LinkAccount onPress={() => navigation.replace('CriarAConta')}> Crie uma agora!
                    </LinkAccount>
                </TextAccount>
            </ContentAccount>

        </Container>

    )
}