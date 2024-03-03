import { useNavigation } from '@react-navigation/native'
import React, { useMemo } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { MainBox } from '../components/MainBox'
import { MainText } from '../components/MainText'
import { Button } from '../components/Button'
import quizList from '../../assets/trivia/facts/quizList.json'
import { categories, levels } from '../../assets/trivia/facts/enums/enums'
import { QuizMenuSelector } from '../navigation/MainNavigator'
import { createStackNavigator } from '@react-navigation/stack'
import { SelectLevel } from './quizSelector/SelectLevel'
import { SelectCategories } from './quizSelector/SelectCategory'

const QuizMenu = () => {
  const navigation = useNavigation()
  const Stack = createStackNavigator()

  const [selectedQuiz, setSelectedQuiz] = React.useState({
    levels: [],
    categories: []
  })

  const openQuiz = ({ id }) => {
    console.log('openQuiz', id)
    navigation.navigate('Quiz', { id })
  }

  const onChangeSelectedQuiz = ({ levels, categories }) => {
    setSelectedQuiz({ ...selectedQuiz, levels: levels !== undefined ? levels : selectedQuiz?.levels, categories: categories !== undefined ? categories : selectedQuiz?.categories });
  }

  useMemo(() => console.log('onChangeSelectedQuiz', selectedQuiz), [selectedQuiz])


  return (
    <MainBox>
      <Stack.Navigator
        screenOptions={{ headerLeft: null, headerShown: false }} // Add this line to prevent going back
      >
        <Stack.Screen
          name={"SelectLevel"}
        >
          {props => <SelectLevel {...props} onSelect={onChangeSelectedQuiz} />}
        </Stack.Screen>
        <Stack.Screen
          name={"SelectCategory"}
        >
          {props => <SelectCategories {...props} onSelect={onChangeSelectedQuiz} />}
        </Stack.Screen>
      </Stack.Navigator>

    </MainBox>
  )
}

export { QuizMenu }
