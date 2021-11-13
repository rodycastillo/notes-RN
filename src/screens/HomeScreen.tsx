import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Note } from '../components/Note';

interface Notes {
    title: string,
    description: string
}
const data: Notes[] = [
    {
        title: 'Nota 1',
        description: 'Lorem ipsum dolor porro ducimus nisi laudantium, quia atque ullam, magnam labore minima assumenda ea quod excepturi beatae quibusdam dicta non veritatis qui eligendi, temporibus sit! At totam cum aperiam obcaecati deleniti expedita distinctio voluptate debitis asperiores itaque?'
    },
    {
        title: 'Nota 2',
        description: 'Lorem ipsum dolor porro ducimus nisi laudantium, quia atque ullam, magnam labore minima assumenda ea quod excepturi beatae quibusdam dicta non veritatis qui eligendi, temporibus sit! At totam cum aperiam obcaecati deleniti expedita distinctio voluptate debitis asperiores itaque?'
    },
    {
        title: 'Nota 3',
        description: 'Lorem ipsum dolor porro ducimus nisi laudantium, quia atque ullam, magnam labore minima assumenda ea quod excepturi beatae quibusdam dicta non veritatis qui eligendi, temporibus sit! At totam cum aperiam obcaecati deleniti expedita distinctio voluptate debitis asperiores itaque?'
    },
    {
        title: 'Nota 4',
        description: 'Lorem ipsum dolor porro ducimus nisi laudantium, quia atque ullam, magnam labore minima assumenda ea quod excepturi beatae quibusdam dicta non veritatis qui eligendi, temporibus sit! At totam cum aperiam obcaecati deleniti expedita distinctio voluptate debitis asperiores itaque?'
    },
    {
        title: 'Nota 5',
        description: 'Lorem ipsum dolor porro ducimus nisi laudantium, quia atque ullam, magnam labore minima assumenda ea quod excepturi beatae quibusdam dicta non veritatis qui eligendi, temporibus sit! At totam cum aperiam obcaecati deleniti expedita distinctio voluptate debitis asperiores itaque?'
    }
]

export const HomeScreen = () => {
    return (
        <View style={ styles.container }>
            <ScrollView>
            {
                data.map((e, i) => (
                    <Note title={e.title} description={e.description} key={ i }/>
                ))
            }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        marginBottom: 20
    }
})