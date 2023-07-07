import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import {  scheduleNotification } from './Notifications'

export default function Timer({title}) {
    const [second, setSecond] = useState(300)

    useEffect(() => {
        let timer
        if (second > 0) {
            timer = setTimeout(() => setSecond(second - 1),1000)
        }
        if (second === 0) {
            scheduleNotification(title, `Se acabo el tiempo para realizar la tarea ${title}`)
        }
        return () => clearTimeout(timer)
    }, [second])

    const minutes = Math.floor(second / 60)
    const formatSeconds = second % 60

    return (
        <View>
            <Text>{`${minutes}:${formatSeconds < 10 ? '0' : ''}${formatSeconds}`}</Text>
        </View>
    )
}