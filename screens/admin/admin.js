import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default function Admin ({navigation}) {
    return (
        <View style={styles.mainContainer}>
            <Text>Admin Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        paddingTop: 20,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})