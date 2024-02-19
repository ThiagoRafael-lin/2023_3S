import { ButtonTabsStyle, ButtonTextStyle } from "./style"



export const BtnListAppointment = ({
    textButton,
    clickButton = false,
    onPress,

z
}) => {
    return (
        <ButtonTabsStyle clickButton={clickButton} onPress={onPress}>
            <ButtonTextStyle clickButton={clickButton}> {textButton} </ButtonTextStyle>
        </ButtonTabsStyle>



    )
}