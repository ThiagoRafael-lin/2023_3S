import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



const BottomTab = createBottomTabNavigator();
import { ContentIcon, TextIcon } from './style';

import { FontAwesome, FontAwesome5 } from '@expo/vector-icons'

import { Perfil } from '../Perfil/perfil';
import { HomePaciente } from '../HomePaciente/HomePaciente';
import { Home } from '../Home/home';
import { PerfilMedico } from '../PerfilMedico/PerfilMedico';


export const Main = () => {
    return (

        <BottomTab.Navigator

            initialRouteName='HomePaciente'
            // initialRouteName='Home'

            screenOptions={({ route }) => ({
                tabBarStyle: { backgroundColor: "#ffffff", height: 80, paddingTop: 10 },
                tabBarActiveBackgroundColor: "transparent",
                tabBarShowLabel: false,
                headerShown: false,

                tabBarIcon: ({ focused }) => {
                    if (route.name === "HomePaciente"/*HomePaciente */) {

                        return (
                            <ContentIcon
                                tabBarActiveBackgroundColor={focused ? "#ECF2FF" : "transparent"}
                            >

                                <FontAwesome name="calendar" size={18} color={focused ? "#607EC5" : "#4E4b59"} />
                                {focused && <TextIcon>Agenda</TextIcon>}

                            </ContentIcon>
                        )

                    } else route.name === "Perfil" /* Perfil */
                    {
                        return (
                            <ContentIcon
                                tabBarActiveBackgroundColor={focused ? "#ECF2FF" : "transparent"}
                            >
                                <FontAwesome5 name="user-circle" size={18} color={focused ? "#607EC5" : "#4E4b59"} />
                                {focused && <TextIcon>Perfil</TextIcon>}

                            </ContentIcon>
                        )
                    }
                }
            })}

        >


            <BottomTab.Screen
                name="HomePaciente"
                // name="Home"
                component={HomePaciente}
                // component={Home}
            />

            <BottomTab.Screen
                name="perfil"
                // name="PerfilMedico"
                component={Perfil}
                // component={PerfilMedico}
            />

        </BottomTab.Navigator>
    )
}