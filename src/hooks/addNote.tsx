import React from 'react'
import api from '../api/api'

const addNote = async (item: Object) => {    
    const response = await api.post('/post-nota', item)
}
