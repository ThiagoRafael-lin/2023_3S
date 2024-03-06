import { Container } from "../../components/Containers/style"
import { Logo } from "../../components/Logo/style"
import { Title } from "../../components/Title/style"
import { Text } from "../../components/Text/style"
import { InputRedefinir } from "../../components/Input/style"
import { ButtonRecuperar, ButtonTitle } from "../../components/Button/style"


export const redefinirSenha = ({navigation}) => {
    return (
        <Container>

            <Logo
                source={require('../../../assets/VitaHub Logo.png')}
            />

            <Title>
                Redefinir Senha
            </Title>
            <Text>
                Insira e confirme a sua nova senha
            </Text>

            <InputRedefinir
                placeholder='Nova Senha'
            />
            <InputRedefinir
                placeholder='Confirmar nova senha'
            />

            <ButtonRecuperar onPress={() => navigation.replace('Login')}>
                <ButtonTitle>
                    Confirmar nova senha
                </ButtonTitle>
            </ButtonRecuperar>

        </Container>


    )
}