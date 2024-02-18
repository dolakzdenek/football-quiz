import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { MMKV } from 'react-native-mmkv'
import { MainBox } from '../components/MainBox'
import { MainText } from '../components/MainText'
import { Input } from '../components/Input'
import { Button } from '../components/Button'

export const storage = new MMKV()

const Landing = () => {
  const [name, setName] = React.useState<string>(storage.getString('user.name') || '')
  const navigation = useNavigation()
  const flag = require('../../assets/images/flags/h240/ug.png')

  console.log('name', flag)

  const startQuiz = () => {
    console.log('Quiz Started', name)
    storage.set('user.name', name)
    navigation.navigate('QuizMenu')
  }

  return (
    <>
      <MainBox>
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <MainText
            variant="header"
          >
            Football Quiz
          </MainText>
          <Input
            value={name}
            onChangeText={setName}
            placeholder="Enter your name"
          />
          <View style={{ width: 150, height: 150, borderRadius: 150, overflow: "hidden", backgroundColor: 'white' }}>
            <Image source={flag} resizeMode="contain" />
          </View>
          <Button label="Start Quiz" onPress={startQuiz} />
        </View>
      </MainBox>
    </>
  )
}

const styles = StyleSheet.create({})

export { Landing }
