import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { MMKV } from 'react-native-mmkv'
import { MainBox } from '../components/MainBox'
import { MainText } from '../components/MainText'
import { Input } from '../components/Input'
import { Button } from '../components/Button'

export const storage = new MMKV()

const Landing = () => {
  const [name, setName] = React.useState<string>(storage.getString('user.name') || '')
  const navigation = useNavigation()

  const startQuiz = () => {
    console.log('Quiz Started', name)
    storage.set('user.name', name)
    navigation.navigate('QuizMenu')
  }

  return (
    <>
      <MainBox>
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
        <Button label="Start Quiz" onPress={startQuiz} />
      </MainBox>
    </>
  )
}

const styles = StyleSheet.create({})

export { Landing }
