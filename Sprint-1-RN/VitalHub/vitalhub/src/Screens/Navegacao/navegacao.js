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
                onPress={() => navigation.navigate("CriarAConta")}
            />
            <Button
                title="Perfil"
                onPress={() => navigation.navigate("Perfil")}
            />
            <Button
                title="Prontuario"
                onPress={() => navigation.navigate("Prontuario")}
            />
            <Button
                title="Home"
                onPress={() => navigation.navigate("Home")}
            />
            <Button
                title="HomePaciente"
                onPress={() => navigation.navigate("HomePaciente")}
            />
            <Button
                title="Selecionar a Clinica"
                onPress={() => navigation.navigate("SelecionarClinica")}
            />
            <Button
                title="Selecionar o Medico"
                onPress={() => navigation.navigate("SelecionarMedico")}
            />
            <Button
                title="Selecionar a Data"
                onPress={() => navigation.navigate("SelecionarData")}
            />
            <Button
                title="Local da Consulta"
                onPress={() => navigation.navigate("LocalConsulta")}
            />
            <Button
                title="Visualizar o Prontuario"
                onPress={() => navigation.navigate("VisualizarProntuario")}
            />
            
        </View>
    )
}