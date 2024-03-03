import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { MMKV } from 'react-native-mmkv'
import { MainText } from '../MainText'

const Scoreboard = ({ score }) => {
  return (
    <View style={{ position: 'absolute', right: 15, top: 15 }}>
      <MainText style={{
        fontSize: 20,
        fontWeight: 'bold',
      }}>{score.toString()} Points</MainText>

    </View >

  )
}
export { Scoreboard }
