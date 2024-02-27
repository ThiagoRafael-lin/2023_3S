import { CalendarContainer, ClinicaCardContainer, Container, Day, NameLocalization, Profile, Star, StarsContainer } from "../../components/Containers/style"
import { TitleClinica } from "../../components/Title/style"
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ClinicaContentCard } from "./style";
import { NumberStar, ProfileLocalization, ProfileNameClinica, TextDay } from "../../components/Text/style";
import { ClockCard, TextBold } from "../AppointmentCard/style";

export const CardClinica = ({
    name,
    localidade,
}) => {
    return (

        // Containers
        // <CardContainer>
        <ClinicaCardContainer>


            {/* conteudo */}
            <ClinicaContentCard>

            <NameLocalization>

                <Profile>
                    <ProfileNameClinica>{name}</ProfileNameClinica>
                    <ProfileLocalization>{localidade}</ProfileLocalization>
                </Profile>

                <StarsContainer>

                    <CalendarContainer>


                        <Star>
                            <AntDesign name="star" size={20} color="#F9A620" />
                            <NumberStar>4,5</NumberStar>
                        </Star>

                        <Day>
                            <MaterialCommunityIcons name="calendar" size={20} color="#49B3BA" />
                            <TextDay>Seg-Sex</TextDay>
                        </Day>



                    </CalendarContainer>

                </StarsContainer>


            </NameLocalization>





            </ClinicaContentCard>



        </ClinicaCardContainer>

        // </CardContainer>
    )
}