import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { MMKV } from 'react-native-mmkv'
import { MainBox } from '../components/MainBox'
import { MainText } from '../components/MainText'
import { Input } from '../components/Input'
import { Button } from '../components/Button'
import { flags } from '../../../assets/images/flags'


const Flag = ({ code }) => {
  const flagSrc = flags[code.toLowerCase()]
  return (
    <View style={{ borderRadius: 150, overflow: "hidden", backgroundColor: 'transparent', alignContent: 'center', alignItems: 'center', height: 30, width: 45 }}>
      <Image source={flagSrc} resizeMode={'contain'} style={{ flex: 1 }} />
    </View>

  )
}
export { Flag }
