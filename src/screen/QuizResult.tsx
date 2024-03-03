import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { MMKV } from 'react-native-mmkv'
import { MainBox } from '../components/MainBox'
import { MainText } from '../components/MainText'
import { Input } from '../components/Input'
import { Button } from '../components/Button'
import { Flag } from '../components/misc/Flag'

export const storage = new MMKV()

const QuizResult = (props) => {
  const name = storage.getString('user.name') || ''
  const country = storage.getString('user.country') || ''
  const score = props.route.params.score
  const navigation = useNavigation()

  useEffect(() => {
    const results = storage.getString('user.results') //can be undefined when no results are found
    console.log('results', results)
    const resultsArray = results ? JSON.parse(results) : []
    resultsArray.push({ name, country, score })
    storage.set('user.results', JSON.stringify(resultsArray))
    return () => {

    }
  }, [score])


  const playMore = () => {
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
            {name} Result
          </MainText>

          <MainText
            variant="header"
          >
            {score}
          </MainText>
          <Button label="Play More" onPress={playMore} />
        </View>
      </MainBox>
    </>
  )
}

const styles = StyleSheet.create({})

export { QuizResult }
