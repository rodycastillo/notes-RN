import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react'
import { useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { RootStackParams } from '../../navigation/StackNavigation';

interface Props extends NativeStackScreenProps<RootStackParams, 'Login'>{}

export const Register = ({navigation}: Props) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = () => {
        if(name.length === 0 || email.length === 0 || password.length === 0) {
            Alert.alert('Complete los campos correctamente')
            return;
        }
        console.log({name, email, password});
        navigation.navigate('Login')
        
    }

    return (
        <View style={ styles.container }>
            <Text style={ styles.h1 }>Register</Text>
            <Text style={ styles.label }>Nombre:</Text>
            <TextInput
                style={ styles.input }
                placeholder="Nombre"
                onChangeText={ setName }
                value={ name }
            />
            <Text style={ styles.label }>Correo:</Text>
            <TextInput
                style={ styles.input }
                placeholder="Correo"
                onChangeText={setEmail}
                value={email}
            />
            <Text style={ styles.label }>Contraseña:</Text>
            <TextInput
                style={ styles.input }
                placeholder="Contraseña"
                onChangeText={setPassword}
                value={password}
            />
            <TouchableOpacity
                style={ styles.btnLogin }
                onPress={ login }
            >
                <Text style={ styles.btnTxt }>Registrarme</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={ styles.btnRegister }
                onPress={() => navigation.navigate('Login')}
            >
                <Text style={ styles.btnTxtRegister }>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#e3e3e3',
        justifyContent: 'center',
        alignItems: 'center',
    },
    h1:{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 50
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10
    },
    input: {
        backgroundColor: 'white',
        width: '70%',
        marginBottom: 20,
        padding: 5,
        borderRadius: 7
    },
    btnLogin: {
        backgroundColor: '#0069D9',
        paddingVertical: 15,
        borderRadius: 50,
        width: '40%',
        alignItems: 'center'
    },
    btnTxt: {
        color: 'white',
        fontWeight: '800',
        textTransform: 'uppercase',
        fontSize: 16
    },
    btnRegister: {
        marginTop: 30,
        position: 'absolute',
        bottom: '20%',
        right: '5%'
    },
    btnTxtRegister: {
        color: 'black',
        fontWeight: '800',
        textTransform: 'uppercase',
        fontSize: 14,
        // textDecorationLine: 'underline'
    }

})
