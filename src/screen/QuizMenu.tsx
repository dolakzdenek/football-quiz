import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { MainBox } from '../components/MainBox'
import { MainText } from '../components/MainText'
import { Button } from '../components/Button'

const QuizMenu = () => {
  const navigation = useNavigation()

  const openQuiz = ({ id }) => {
    console.log('openQuiz', id)
    navigation.navigate('Quiz')
  }
  return (
    <MainBox>
      <MainText variant='header'>QuizMenu</MainText>
      <FlatList
        data={[
          { name: 'Quiz 1', id: 1 },
          { name: 'Quiz 2', id: 2 },
          { name: 'Quiz 3', id: 3 },
          { name: 'Quiz 4', id: 4 },
          { name: 'Quiz 5', id: 5 }
        ]}
        renderItem={({ item }) => (<Button label={item.name} onPress={() => openQuiz(item)}
        />)}

      />
    </MainBox>
  )
}

export { QuizMenu }
