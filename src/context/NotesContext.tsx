import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState, createContext } from 'react'
import api from '../api/api';

type NotesContextProps = {
    note: 
    addNote: (item : Object) => Promise<void>
    updateNote: (item : Object) => Promise<void>
    deleteNote: ( id: number ) => Promise <void>
    activeEdition: (id: number ) => Promise <void>
    getNotes: ( config: any ) => void
}

export const NotesContext = createContext({} as NotesContextProps);

export const NotesProvider = ({children}: any) => {

    const [notes, setnotes] = useState([])
    
    useEffect(() => {
        token()
        getNotes()
    }, [])

    const token = async ()  => {
        await AsyncStorage.getItem('token')
    }

    const getNotes = async () => {
        let config ={
            headers: {
                token: token
            }
        }
        const response  = await api.get<>('/nota', config)
        setnotes(response.data)
    }
}

