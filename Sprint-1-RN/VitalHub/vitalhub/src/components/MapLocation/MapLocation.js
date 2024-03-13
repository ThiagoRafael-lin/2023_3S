import { ActivityIndicator, StyleSheet, Text } from "react-native";

import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps"
import {
    requestForegroundPermissionsAsync, // Solicita a permissao de localizacao
    getCurrentPositionAsync, // Captura a localizacao atual

    watchPositionAsync, // Captura em tempos a localizacao
    LocationAccuracy // Precisao da captura
} from 'expo-location'

import MapViewDirections from 'react-native-maps-directions'

import { useEffect, useRef, useState } from "react";
import { MapLocationContainer } from "../Containers/style";
import { mapskey } from "../../../Utils/mapsKey";

export const MapLocation = () => {
    const mapReference = useRef(null)


    const [initialPosition, setInitialPosition] = useState({
        latitude: -23.615034,
        longitude: -46.570755,
    })

    const [finalPosition, setFinalPosition] = useState({
        latitude: -23.7141,
        longitude: -46.4137,
    })

    async function CapturarLocalizacao() {
        const { granted } = await requestForegroundPermissionsAsync()

        if (granted) {
            const currentPosition = await getCurrentPositionAsync()

            await setInitialPosition(currentPosition)

            console.log(initialPosition);
        }
    }

    async function RecarregarVisualizacaoMapa() {
        if (mapReference.current && initialPosition) {
            await mapReference.current.fitToCoordinates(
                [
                    {
                        latitude: initialPosition.coords.latitude, longitude: initialPosition.coords.longitude
                    },
                    {
                        latitude: finalPosition.latitude, longitude: finalPosition.longitude
                    }
                ],
                {
                    edgePadding: { top: 60, right: 60, bottom: 60, left: 60 },
                    animated: true
                }
            )
        }
    }

    useEffect(() => {
        CapturarLocalizacao()

        // captura a localização em tempo real
        watchPositionAsync({
            accuracy: LocationAccuracy.High,
            timeInterval: 1000,
            distanceInterval: 1
        }, async (response) => {
            await setInitialPosition(response)

            mapReference.current?.animateCamera({
                pitch: 60,
                center: response.coords
            })
        })
    }, [1000])

    useEffect(() => {
        RecarregarVisualizacaoMapa()
    }, [initialPosition])

    return (
        // container
        <MapLocationContainer>

            <MapView
                ref={mapReference}
                initialRegion={{
                    latitude: -23.615034,
                    longitude: -46.570755,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005
                }}
                style={styles.map}
            >

                <Marker
                    coordinate={{
                        latitude: -23.615034,
                        longitude: -46.570755,
                    }}
                    title='Meu local'
                />

                {/* fazer mapDirection */}

                <MapViewDirections
                    origin={initialPosition.coords}
                    destination={{
                        latitude: finalPosition.latitude,
                        longitude: finalPosition.longitude,
                        latitudeDelta: 0.005,
                        longitudeDelta: 0.005
                    }}
                    apikey={mapskey}

                    strokeWidth={5}
                    strokeColor="#496bba"
                />

                <Marker
                    coordinate={{
                        latitude: -23.7141,
                        longitude: -46.4137,
                    }}
                    title='Clinica'
                    pinColor="blue"
                />

            </MapView>
        </MapLocationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        flex: 1,
        width: "100%",
    }
});

