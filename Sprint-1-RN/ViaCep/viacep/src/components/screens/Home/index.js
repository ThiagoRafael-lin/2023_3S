import { useEffect, useState } from "react";
import { BoxInput } from "../../BoxInput/index";
import { ContainerForm, ScroolForm, ContainerInput } from "./style";
import api from "../../Services/services"

export function Home() {

    //states - variaveis
    const [endereco, setEndereco] = useState({
        cep: '',
        logradouro: null,
        bairro: null,
        cidade: null,
        estado: null,
        uf: null,
    });


    async function getEndereco() {
        try {
            const promise = await api.get(`https://api.postmon.com.br/v1/cep/${endereco.cep}`);
            console.warn('concluido!');
            setEndereco({
                ...endereco,
                logradouro: promise.data.logradouro,
                bairro: promise.data.bairro,
                estado: promise.data.estado_info.nome,
                cidade: promise.data.cidade,
                uf: promise.data.estado,
            });
            console.warm('Salvo!');

        } catch (error) {
            console.log('erro ocorrido');
        }
    }

    useEffect(() => {
        if (endereco.cep.length >= 8) {
            getEndereco();
        }
    }, [endereco.cep])

    return (
        <>
            <ScroolForm>
                <ContainerForm>
                    <BoxInput
                        textLabel='Informar CEP'
                        placeholder='CEP...'
                        KeyType='numeric'
                        MaxLenght={9}
                        editable={true}
                        onChangeText={event => setEndereco({ ...endereco, cep: event })}
                    />

                    <BoxInput
                        textLabel='Logradouro:'
                        placeholder='Logradouro...'
                        MaxLenght={20}
                        fieldValue={endereco.logradouro}
                    />
                    <BoxInput
                        textLabel='Bairro'
                        placeholder='Bairro...'
                        MaxLenght={20}

                        fieldValue={endereco.bairro}
                    />
                    <BoxInput
                        textLabel='Cidade'
                        placeholder='Cidade...'
                        MaxLenght={20}
                        fieldValue={endereco.cidade}
                    />
                    <ContainerInput>
                        <BoxInput
                            textLabel='Estado'
                            placeholder='Estado...'
                            MaxLenght={20}
                            fieldValue={endereco.estado}
                        />

                        <BoxInput
                            textLabel='UF'
                            placeholder='UF...'
                            MaxLenght={4}
                            fieldValue={endereco.uf}
                        />
                    </ContainerInput>

                </ContainerForm>
            </ScroolForm>
        </>


    )
}
