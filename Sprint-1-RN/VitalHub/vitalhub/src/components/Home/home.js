import { useState } from "react"
import { BtnListAppointment } from '../../components/FilterAppointment/BtnListAppointment';
import { CalendarHome } from "../CalendarHome/calendarHome"
import { ContainerConsulta } from "../Containers/style"
import { Header } from "../../components/Header/header"
import { FilterAppointment } from "./style";

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

            <FlatList>
{/* 
                <Card />

                <Card /> */}

            </FlatList>


        </ContainerConsulta>

    )
}