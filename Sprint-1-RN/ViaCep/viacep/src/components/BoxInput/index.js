import { FieldContent } from "./style"
import { Label } from "../Label"
import { Input } from "../Input"

export const BoxInput = ({
    fieldWidth = 100,
    editable = false,
    textLabel,
    placeholder,
    fieldValue = null,
    onChangeText = null,
    keyType = "default",
    maxLength
}) => {
    return (
        <FieldContent fieldWidth={fieldWidth}>
            <Label textLabel={textLabel}/>

            <Input
                editable={editable}
                placeholder={placeholder}
                keyType={keyType}
                maxLength={maxLength}
                value={fieldValue}
                onChangeText={onChangeText}

            />
        </FieldContent>
        
    )
}
