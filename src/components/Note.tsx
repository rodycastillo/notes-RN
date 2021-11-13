import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

interface Props  {
    title: string,
    description: string
}

export const Note = ({title, description}: Props) => {
    return (
        <View style={styles.note}>
            <View style={styles.header}>
                <Text style={ [styles.h1, styles.textWhite] }>{title}</Text>
            </View>
            <View style={styles.desc}>
                <Text style={ styles.h1 }>Descripción:</Text>
                <Text>{description}</Text>
            </View>
            <View style={ styles.btns }>
                <TouchableOpacity style={ [styles.btn, styles.btnEdit] }>
                    <Text style={ styles.textWhite }>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={ [styles.btn, styles.btnDelete] }>
                    <Text style={ styles.textWhite }>Eliminar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    note: {
        width: '100%',
        backgroundColor: '#e5e5e5',
        // height: 100, 
        borderRadius: 10,
        marginBottom: 20
    },
    header: {
        width: '100%',
        padding: 10,
        backgroundColor: '#212529',
        borderTopRightRadius: 10, 
        borderTopLeftRadius: 10
    },
    desc: {
        padding: 10,  
    },
    h1: {
        fontSize: 16,
        fontWeight:'bold'
    },
    btns: {
        flexDirection: 'row',
        padding: 15
    },
    btn: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        borderRadius: 7
    },
    btnDelete: {
        backgroundColor: '#C82333',
        marginLeft: 3
    },
    btnEdit: {
        backgroundColor: '#0069D9',
        marginRight: 3
    },
    textWhite: {
        color: 'white'
    }
})