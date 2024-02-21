import { useState } from "react"
import { BtnListAppointment } from '../../components/FilterAppointment/BtnListAppointment';
import { CalendarHome } from "../CalendarHome/calendarHome"
import { ContainerConsulta } from "../Containers/style"
import { Header } from "../../components/Header/header"
import { FilterAppointment } from "./style";
import { ListComponent } from "../List/list";
import { AppointmentCard } from "../AppointmentCard/AppointmentCard";
import { CancellationModal } from "../CancellationModal/cancellationModal";
import { MedicalRecordModal } from "../MedicalRecordModal/MedicalRecordModal";

const Consultas = [

    { id: 1, nome: "Carlos", situacao: "pendente" },
    { id: 2, nome: "Carlos", situacao: "realizado" },
    { id: 3, nome: "Carlos", situacao: "cancelado" },
    { id: 4, nome: "Carlos", situacao: "realizado" },
    { id: 5, nome: "Carlos", situacao: "cancelado" },

];

export const Home = () => {

    // state para o estado da lista(cards)
    const [statusLista, setStatusLista] = useState("pendente");

    // state para a exibição dos modais
    const [showModalCancel, setShowModalCancel] = useState (false); 
    const [showModalAppointment, setShowModalAppointment] = useState (false); 


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
                    clickButton={statusLista === "pendente"}
                    onPress={() => setStatusLista("pendente")}
                />
                <BtnListAppointment
                    textButton={'Realizadas'}
                    clickButton={statusLista === "realizado"}
                    onPress={() => setStatusLista("realizado")}
                />
                <BtnListAppointment
                    textButton={'Canceladas'}
                    clickButton={statusLista === "cancelado"}
                    onPress={() => setStatusLista("cancelado")}
                />
            </FilterAppointment>

            {/* cards */}

            {/* <AppointmentCard /> */}
            <ListComponent
                data={Consultas}
                keyExtractor={(item) => item.id}

                renderItem={({ item }) =>
                    statusLista == item.situacao && (

                        <AppointmentCard
                            situacao={item.situacao}
                            onPressCancel={() => setShowModalCancel(true)}
                            onPressAppointment={() => setShowModalAppointment(true)}

                        />
                    )
                }
                // showsVerticalScrollIndicator={false}
            />

            {/* modal Cancelar */}
            <CancellationModal
            visible={showModalCancel}
            setShowModalCancel={setShowModalCancel}
            />


            {/* Modal ver Prontuario */}

            <MedicalRecordModal
            visible={showModalAppointment}
            setShowModalAppointment={setShowModalAppointment}
            />
        </ContainerConsulta>
    );
};