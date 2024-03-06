import { Container } from "../../components/Containers/style"
import { Logo } from "../../components/Logo/style"
import { Title } from "../../components/Title/style"
import { Text } from "../../components/Text/style"
import { Input } from "../../components/Input/style"
import { ButtonRecuperar, ButtonTitle } from "../../components/Button/style"
import { ContentAccount, LinkMidium } from "../../components/LinkCadastro/style"

export const esqueceuSuaSenha = ({ navigation }) => {

    
    return (

        <Container>

            <Logo
                source={require('../../../assets/VitaHub Logo.png')}
            />

            <Title> Recuperar Senha </Title>

            <Text>
                Digite abaixo seu email cadastrado que enviaremos um link para recuperação de senha
            </Text>

            <Input

                placeholder='Usuário ou E-mail'

            />

            <ButtonRecuperar onPress={() => navigation.replace('verificarEmail')} >
                <ButtonTitle>
                    Continuar
                </ButtonTitle>
            </ButtonRecuperar>


            <ContentAccount>
                <LinkMidium
                    onPress={() => navigation.navigate('Login')}
                >
                    Cancelar
                </LinkMidium>
            </ContentAccount>

        </Container>
    )
}