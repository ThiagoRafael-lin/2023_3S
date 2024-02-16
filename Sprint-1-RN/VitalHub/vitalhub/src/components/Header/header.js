import { ContainerHeader } from "../Containers/style"
import { Text } from "../Text/style"
import { BoxUser, DataUser, ImageUser, NomeUser, TextDefault } from "./style"
import { MaterialIcons } from '@expo/vector-icons';

export const Header = () => {
    return (
        <ContainerHeader>
            <BoxUser>
                <ImageUser 
                     source={require('../../../assets/medicoConsulta.png')}
                />
                <DataUser>
                    <TextDefault>Bem vindo</TextDefault>
                    <NomeUser>Dr. Claudio</NomeUser>
                    
                </DataUser>
                 </BoxUser>
                <MaterialIcons name="notifications" size={25} color="white" />           
        </ContainerHeader>

    )


}