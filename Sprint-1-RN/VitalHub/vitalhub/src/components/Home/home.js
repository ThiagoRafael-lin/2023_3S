import { useState } from "react"
import { BtnListAppointment } from '../../components/FilterAppointment/BtnListAppointment';
import { CalendarHome } from "../CalendarHome/calendarHome"
import { ContainerConsulta } from "../Containers/style"
import { Header } from "../../components/Header/header"
import { FilterAppointment } from "./style";
import { ListComponent } from "../List/list";
import { AppointmentCard } from "../AppointmentCard/AppointmentCard";

const Consultas = [

    { id: 1, nome: "Carlos", situacao: "pendente" },
    { id: 2, nome: "Carlos", situacao: "realizado" },
    { id: 3, nome: "Carlos", situacao: "cancelado" },
    { id: 4, nome: "Carlos", situacao: "realizado" },
    { id: 5, nome: "Carlos", situacao: "cancelado" },

];

export const Home = () => {

    const [statusLista, setStatusLista] = useState("pendente");

    return (

        <ContainerConsulta>

            {/* Header */}
            <Header />

            {/* CalendarHome */}
            <CalendarHome />



            {/* Filtros (Botões) */}

            {/* Container */}
            <FilterAppointment>
                <BtnListAppointment
                    textButton={'Agendadas'}
                    clickButton={statusLista === "Pendente"}
                    onPress={() => setStatusLista("Pendente")}
                />
                <BtnListAppointment
                    textButton={'Realizadas'}
                    clickButton={statusLista === "Realizado"}
                    onPress={() => setStatusLista("Realizado")}
                />
                <BtnListAppointment
                    textButton={'Canceladas'}
                    clickButton={statusLista === "Cancelado"}
                    onPress={() => setStatusLista("Cancelado")}
                />
            </FilterAppointment>

            {/* cards */}
            {/* <AppointmentCard /> */}



            {/* arrumar o card que não aparece */}
            <ListComponent
                data={Consultas}
                keyExtractor={(item) => item.id}

                renderItem={({ item }) =>
                    statusLista == item.situacao && (

                        <AppointmentCard
                            situacao={item.situacao}

                        />

                    )
                }
            />

        </ContainerConsulta>

    )
}