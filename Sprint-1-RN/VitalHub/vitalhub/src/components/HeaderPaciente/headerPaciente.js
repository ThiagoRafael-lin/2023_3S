import { ButtonModalPerfil } from "../Button/style";
import { ContainerHeader } from "../Containers/style"
import { Text } from "../Text/style"
import { BoxUser, DataUser, ImageUser, NomeUser, TextDefault } from "./style"
import { MaterialIcons } from '@expo/vector-icons';

export const HeaderPaciente = ({ navigation }) => {
    return (
        <ContainerHeader>
            <BoxUser>
                <ButtonModalPerfil onPress={() => navigation.navigate('Perfil')}>

                    <ImageUser
                        source={require('../../../assets/ImagePerfilPequena.png')}

                    />
                </ButtonModalPerfil>
                <DataUser>
                    <TextDefault>Bem vindo</TextDefault>
                    <NomeUser>Richard Kosta</NomeUser>

                </DataUser>
            </BoxUser>
            <MaterialIcons name="notifications" size={25} color="white" />
        </ContainerHeader>

    )


}