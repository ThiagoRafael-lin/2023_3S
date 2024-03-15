
import { StatusBar } from 'expo-status-bar';
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import { useEffect, useState, useRef } from 'react';
import { FontAwesome } from '@expo/vector-icons'
import { CameraContainer } from '../Containers/style';


export function CameraExpo({
    visible,
    setShowModalCamera,
    ...rest
}) {


    const cameraRef = useRef(null)
    const [tipoCamera, setTipoCamera] = useState(CameraType.front)
    const [openModal, setOpenModal] = useState(false)
    const [photo, setPhoto] = useState(null)

    useEffect(() => {
        (async () => {
            const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync()
        })();
    }, [])

    async function capturePhoto() {
        if (cameraRef) {
            const photo = await cameraRef.current.takePictureAsync()

            setPhoto(photo.uri)

            setOpenModal(true)

            console.log(photo);
        }
    }
    return (
        <Modal {...rest} visible={visible} animationType="fade">

            <CameraContainer>

                <Camera
                    ref={cameraRef}
                    style={styles.camera}
                    type={tipoCamera}
                    ratio='16:9'
                >
                    <View style={styles.viewFlip}>
                        <TouchableOpacity onPress={() => setTipoCamera(tipoCamera == CameraType.front ? CameraType.back : CameraType.front)} style={styles.btnFlip}>
                            <Text style={styles.textFlip}>Trocar</Text>
                        </TouchableOpacity>
                    </View>

                </Camera>
                <View style={styles.btns}>
                    <TouchableOpacity >
                        <Text style={styles.btnEnviar}>Enviar</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity >
                        <Text>Cancelar</Text>
                    </TouchableOpacity>

                </View>

                <TouchableOpacity onPress={() => capturePhoto()} style={styles.btnCapture}>
                    <FontAwesome name="camera" size={24} color="#fff" />
                </TouchableOpacity>

                <Modal animationType='slide' transparent={false} visible={openModal}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 20 }}>
                        <View style={{ margin: 10, flexDirection: 'row' }}>

                        </View>
                        <Image
                            style={{ width: '100%', height: 500, borderRadius: 15 }}
                            source={{ uri: photo }}
                        />
                    </View>
                </Modal>

            </CameraContainer >
        </Modal>
    )
}

const styles = StyleSheet.create({
    camera: {
        flex: 1,
        width: '100%',
        height: '%80'
    },
    viewFlip: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    btns: {
        padding: 20,
        flexDirection: 'row',
        gap: 80,
        alignItems: 'center',
    },
    btnEnviar: {
        backgroundColor: '#49B3BA',
        borderRadius: 10,
        padding: 10,
        color: 'white',
        width: '140%',
        textAlign: 'center',
    },
    btnFlip: {
        padding: 10,
    },
    textFlip: {
        fontSize: 20,
        color: '#fff',
        marginBottom: 20,
    },
    btnCapture: {
        padding: 20,
        margin: 20,
        borderRadius: 10,
        backgroundColor: '#121212',
        justifyContent: 'center',
        alignItems: 'center',
    },
});