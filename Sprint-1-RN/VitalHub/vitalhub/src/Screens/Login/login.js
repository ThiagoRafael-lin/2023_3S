import { Link } from "@react-navigation/native"
import { Text } from "react-native"
import { Container } from "../../components/Containers/style"
import { Logo } from "../../components/Logo/style"
import { Title } from "../../components/Title/style"
import { Input } from "../../components/Input/style"
import { LinkMidium } from "../../components/LinkCadastro/style"
import { Button } from "../../components/Button/style"



export const Login = () => {
    return (

        <Container>

            <Logo
        source={require('../../../assets/VitaHub Logo.png')}
            />

            <Title> Entrar ou criar conta </Title>

            <Input 

            placeholder = 'Usuario ou E-Mail'

            />
            
            <Input
            
            placeholder = 'Senha'
            
            /> 

            <LinkMidium> Esqueceu sua senha? </LinkMidium>

            <Button>
                {/* <ButtonTitle>Entrar</ButtonTitle> */}
            </Button>

            {/* <ButtonGoogle>
                <ButtonTitleGoogle>Entrar com Google</ButtonTitleGoogle>
            </ButtonGoogle>

            <ContentAccount>
                <TextAccount>Não tem conta? Crie uma conta agora!</TextAccount>
            </ContentAccount>  */}

        </Container>

    )
}