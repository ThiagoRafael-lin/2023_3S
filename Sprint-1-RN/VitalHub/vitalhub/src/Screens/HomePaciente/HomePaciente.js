import { useState } from "react"
import { BtnListAppointment } from '../../components/FilterAppointment/BtnListAppointment';
import { CalendarHome } from "../../components/CalendarHome/calendarHome"
import { ContainerConsulta, MedicalInstrument } from "../../components/Containers/style"
import { Header } from "../../components/Header/header";
import { ListComponent } from "../../components/List/list";
import { AppointmentCard } from "../../components/AppointmentCard/AppointmentCard";
import { CancellationModal } from "../../components/CancellationModal/cancellationModal";
import { MedicalRecordModal } from "../../components/MedicalRecordModal/MedicalRecordModal";
import { HeaderPaciente } from "../../components/HeaderPaciente/headerPaciente";
import { FontAwesome6 } from '@expo/vector-icons';
import { ButtonModalVerProntuario, Stethoscope } from "../../components/Button/style";
import { ScheduleAppointment } from "../../components/ScheduleAppointment/ScheduleAppointment";
import { FilterAppointment } from "../Home/style";
import { ModalMedicalRecord } from "../../components/ModalMedicalRecord/ModalMedicalRecord";

const Consultas = [

    { id: 1, nome: "Carlos", situacao: "pendente" },
    { id: 2, nome: "Carlos", situacao: "realizado" },
    { id: 3, nome: "Carlos", situacao: "cancelado" },
    { id: 4, nome: "Carlos", situacao: "realizado" },
    { id: 5, nome: "Carlos", situacao: "cancelado" },

];

export const HomePaciente = ({ 
    navigation,
 }) => {

    // state para o estado da lista(cards)
    const [statusLista, setStatusLista] = useState("pendente");

    // state para a exibição dos modais
    const [showModalCancel, setShowModalCancel] = useState(false);
    const [showModalAppointment, setShowModalAppointment] = useState(false);
    const [showModalSchedule, setShowModalSchedule] = useState(false);
    const [showMedicalRecordModal, setMedicalRecordModal] = useState(false);

    return (

        <ContainerConsulta>

            {/* Header */}
            <HeaderPaciente
            navigation={navigation}
            />

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
                            name={"Dr.Claudiu"}
                            navigation={navigation}
                        />
                    )
                }
            // showsVerticalScrollIndicator={false}
            />



            {/* <ButtonModalVerProntuario
                visible={showMedicalRecordModal}
                setMedicalRecordModal={setMedicalRecordModal}
                onPress={() => setMedicalRecordModal(true)}>
            </ButtonModalVerProntuario> */}



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
                navigation={navigation}
            />

            {/* Modal para ver o prontuario paciente */}

            <ModalMedicalRecord
                visible={showMedicalRecordModal}
                setMedicalRecordModal={setMedicalRecordModal}
                navigation={navigation}
            />


            <MedicalInstrument>
                <Stethoscope onPress={() => setShowModalSchedule(true)}>
                    <FontAwesome6 name="stethoscope" size={24} color="white" />
                </Stethoscope>
            </MedicalInstrument>


        </ContainerConsulta>
    );
};