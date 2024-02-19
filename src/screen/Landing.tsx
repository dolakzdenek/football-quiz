import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { MMKV } from 'react-native-mmkv'
import { MainBox } from '../components/MainBox'
import { MainText } from '../components/MainText'
import { Input } from '../components/Input'
import { Button } from '../components/Button'
import { Flag } from '../components/misc/Flag'

export const storage = new MMKV()

const Landing = () => {
  const [name, setName] = React.useState<string>(storage.getString('user.name') || '')
  const [country, setCountry] = React.useState<string>(storage.getString('user.country') || '')
  const navigation = useNavigation()

  const startQuiz = () => {
    console.log('Quiz Started', name)
    storage.set('user.name', name)
    storage.set('user.country', country)
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
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
            <Input
              value={country}
              onChangeText={setCountry}
              placeholder="Select your country"
            />
            <View style={{ position: 'absolute', right: -30 }}>
              <Flag code={country} />
            </View>
          </View>
          <Button label="Start Quiz" onPress={startQuiz} />
        </View>
      </MainBox>
    </>
  )
}

const styles = StyleSheet.create({})

export { Landing }
