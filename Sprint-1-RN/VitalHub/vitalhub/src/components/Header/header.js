import { ButtonModalPerfil } from "../Button/style";
import { ContainerHeader } from "../Containers/style"
import { Text } from "../Text/style"
import { BoxUser, DataUser, ImageUser, NomeUser, TextDefault } from "./style"
import { MaterialIcons } from '@expo/vector-icons';

export const Header = ({ navigation }) => {
    return (
        <ContainerHeader>
            <BoxUser>
                <ButtonModalPerfil onPress={() => navigation.navigate('PerfilMedico')}>

                    <ImageUser
                        source={require('../../../assets/medicoConsulta.png')}
                    />
                </ButtonModalPerfil>
                <DataUser>
                    <TextDefault>Bem vindo</TextDefault>
                    <NomeUser>Dr. Claudio</NomeUser>

                </DataUser>
            </BoxUser>
            <MaterialIcons name="notifications" size={25} color="white" />
        </ContainerHeader>

    )


}