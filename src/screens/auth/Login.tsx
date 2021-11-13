import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react'
import { useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { RootStackParams } from '../../navigation/StackNavigation';

interface Props extends NativeStackScreenProps<RootStackParams, 'Login'>{}

export const Login = ({navigation}: Props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = () => {
        if(email.length === 0 || password.length === 0) {
            Alert.alert('Complete los campos correctamente')
            return;
        }
        console.log({'email: ': email, 'password':password});
        navigation.navigate('DrawerNavigation')
        
    }

    return (
        <View style={ styles.container }>
            <Text style={ styles.h1 }>Login</Text>
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
                <Text style={ styles.btnTxt }>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={ styles.btnRegister }
                onPress={() => navigation.navigate('Register')}
            >
                <Text style={ styles.btnTxtRegister }>Registrarme</Text>
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
