import { BoxInput } from "../../BoxInput";
import { ContainerForm, ScroolForm } from "./style";

export function Home () {
    return(
        <>
            <ScroolForm>
                <ContainerForm>
                    <BoxInput
                        textLabel='Informar CEP'
                        placeholder="CEP..."
                        keyType="numeric"
                        maxLength={9}
                    />
                    <BoxInput
                        textLabel='Informar CEP'
                        placeholder="CEP..."
                        keyType="numeric"
                        maxLength={9}
                    />
                    <BoxInput
                        textLabel='Informar CEP'
                        placeholder="CEP..."
                        keyType="numeric"
                        maxLength={9}
                    />
                </ContainerForm>
            </ScroolForm>
        </>
    )
}