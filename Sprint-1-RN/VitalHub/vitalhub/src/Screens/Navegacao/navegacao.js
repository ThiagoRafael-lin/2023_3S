import { Button, View } from "react-native"

export const Navegacao = ({ navigation }) => {
    return (
        <View>
            <Button
                title="Login"
                onPress={() => navigation.navigate("Login")}
            />
            <Button
                title="Verificar o E-mail"
                onPress={() => navigation.navigate("verificarEmail")}
            />
            <Button
                title="Redefinir a senha"
                onPress={() => navigation.navigate("redefinirSenha")}
            />
            <Button
                title="Criar a Conta"
                onPress={() => navigation.navigate("criarAConta")}
            />
            
        </View>
    )
}