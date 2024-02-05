import { useEffect, useState } from "react";
import { BoxInput } from "../../BoxInput";
import { FieldContentEstado, FieldContentMedium, FieldContentUF } from "../../BoxInput/style";
import { ContainerForm, ScroolForm } from "./style";
import { Alert } from "react-native";
import axios from "axios";


export function Home() {

    //states - váriaveis
    const [cep, setCep] = useState("");
    const [logradouro, setLogradouro] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState(""); 
    const [estado, setEstado] = useState("");
    const [uf, setUf] = useState("");

    //useEffect - váriaveis

    useEffect(() => {

        async function buscarCep () {
            try {
                if (cep != '' && length === 8) {
                    const endereco = await axios.get(`https://brasilaberto.com/api/v1/zipcode/${cep}`)

                    if (endereco.error) {
                        return;
                    }

                    setLogradouro(endereco.data.result.street)
                    setBairro(endereco.data.result.district)
                    setCidade(endereco.data.result.city)
                    setEstado(endereco.data.result.state)
                    setUf(endereco.data.result.stateShortname)

                    console.log(bairro);

                }
            } catch (error) {
                console.log("Erro ao buscar CEP");
            }
        }

         buscarCep();

    }, [cep])

    return (
        <>
            <ScroolForm>
                <ContainerForm>
                    <BoxInput
                        textLabel='Informar CEP'
                        placeholder="CEP..."
                        keyType="numeric"
                        maxLength={8}
                        editable={true}
                        fieldValue={cep}
                        onChangeText={(tx) => {setCep(tx)}}
                        // onChangeText={ e => setCep(e)}s
                    />
                    <BoxInput
                        textLabel='Logradouro'
                        placeholder="Logradouro..."
                        keyType="text"
                        fieldValue={logradouro}
                    // maxLength={9}
                    />
                    <BoxInput
                        textLabel='Bairro'
                        placeholder="Bairro..."
                        keyType="text"
                        fieldValue={bairro}

                    // maxLength={9}
                    />
                    <BoxInput
                        textLabel='Cidade'
                        placeholder="Cidade..."
                        keyType="text"
                        fieldValue={cidade}

                    // maxLength={9}
                    />
                    <FieldContentMedium>
                        <FieldContentEstado>

                            <BoxInput
                                textLabel='Estado'
                                placeholder="Estado..."
                                keyType="text"
                                fieldWidth={168}
                                fieldValue={estado}

                            // maxLength={9}
                            />
                        </FieldContentEstado>
                        <FieldContentUF>

                            <BoxInput
                                textLabel='UF'
                                placeholder="UF"
                                keyType="text"
                                maxLength={20}
                                fieldValue={uf}

                            />
                        </FieldContentUF>

                    </FieldContentMedium>

                </ContainerForm>
            </ScroolForm>
        </>
    )
}