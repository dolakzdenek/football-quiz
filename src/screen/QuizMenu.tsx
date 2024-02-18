import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { MainBox } from '../components/MainBox'
import { MainText } from '../components/MainText'
import { Button } from '../components/Button'
import quizList from '../../assets/trivia/facts/quizList.json'

const QuizMenu = () => {
  const navigation = useNavigation()

  const openQuiz = ({ id }) => {
    console.log('openQuiz', id)
    navigation.navigate('Quiz', { id })
  }
  return (
    <MainBox>
      <MainText variant='header'>QuizMenu</MainText>
      <FlatList
        data={quizList}
        renderItem={({ item }) => (<Button label={item.name} onPress={() => openQuiz(item)}
        />)}
      />
    </MainBox>
  )
}

export { QuizMenu }
