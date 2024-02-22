import { ContainerHeader } from "../Containers/style"
import { Text } from "../Text/style"
import { BoxUser, DataUser, ImageUser, NomeUser, TextDefault } from "./style"
import { MaterialIcons } from '@expo/vector-icons';

export const HeaderPaciente = () => {
    return (
        <ContainerHeader>
            <BoxUser>
                <ImageUser 
                     source={require('../../../assets/ImagePerfilPequena.png')}
                />
                <DataUser>
                    <TextDefault>Bem vindo</TextDefault>
                    <NomeUser>Richard Kosta</NomeUser>
                    
                </DataUser>
                 </BoxUser>
                <MaterialIcons name="notifications" size={25} color="white" />           
        </ContainerHeader>

    )


}