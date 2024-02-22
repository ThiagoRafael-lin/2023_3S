import { useState } from "react"
import { BtnListAppointment } from '../FilterAppointment/BtnListAppointment';
import { CalendarHome } from "../CalendarHome/calendarHome"
import { ContainerConsulta, MedicalInstrument } from "../Containers/style"
import { Header } from "../Header/header"
// import { FilterAppointment } from "./style";
import { FilterAppointment } from "../Home/style";
import { ListComponent } from "../List/list";
import { AppointmentCard } from "../AppointmentCard/AppointmentCard";
import { CancellationModal } from "../CancellationModal/cancellationModal";
import { MedicalRecordModal } from "../MedicalRecordModal/MedicalRecordModal";
import { HeaderPaciente } from "../HeaderPaciente/headerPaciente";
import { FontAwesome6 } from '@expo/vector-icons';
import { Stethoscope } from "../Button/style";
import { ScheduleAppointment } from "../ScheduleAppointment/ScheduleAppointment";

const Consultas = [

    { id: 1, nome: "Carlos", situacao: "pendente" },
    { id: 2, nome: "Carlos", situacao: "realizado" },
    { id: 3, nome: "Carlos", situacao: "cancelado" },
    { id: 4, nome: "Carlos", situacao: "realizado" },
    { id: 5, nome: "Carlos", situacao: "cancelado" },

];

export const HomePaciente = () => {

    // state para o estado da lista(cards)
    const [statusLista, setStatusLista] = useState("pendente");

    // state para a exibição dos modais
    const [showModalCancel, setShowModalCancel] = useState(false);
    const [showModalAppointment, setShowModalAppointment] = useState(false);
    const [showModalSchedule, setShowModalSchedule] = useState(false);

    return (

        <ContainerConsulta>

            {/* Header */}
            <HeaderPaciente />

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

            {/* Modal ver Prontuario do medico */}

            <MedicalRecordModal
                visible={showModalAppointment}
                setShowModalAppointment={setShowModalAppointment}
            />

            {/* Modal para agendar consulta */}

            <ScheduleAppointment
                visible={showModalSchedule}
                setShowModalSchedule={setShowModalSchedule}
            />


            <MedicalInstrument>
                <Stethoscope onPress={() => setShowModalSchedule(true)}>
                    <FontAwesome6 name="stethoscope" size={24} color="white" />
                </Stethoscope>
            </MedicalInstrument>


        </ContainerConsulta>
    );
};