import { StyleSheet } from "react-native";

import MapView, { Marker } from "react-native-maps"

import { MapLocationContainer } from "../Containers/style";
import { useRef } from "react";

export const MapLocation = () => {
    const mapReference = useRef(null)

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

                <Marker
                    coordinate={{
                        latitude: -26.615034,
                        longitude: -48.570755,
                    }}
                    title='Meu local'
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

