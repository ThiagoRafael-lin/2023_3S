import { StyleSheet, Text, View } from "react-native"

const jogo = ({ name, valor }) => {
    return (

        <View style={styles.container}>

            <Text>Nome: {name}</Text>
            <Text>Valor: {valor}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#c1c1c1',
        padding: 10,
        margin: 10,
        borderRadius: 5

    }
})



export default jogo;