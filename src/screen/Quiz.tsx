import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { MainBox } from '../components/MainBox'
import { MainText } from '../components/MainText'
import { getMashedQuizData } from '../helper/quizMasher'
import { useNavigation } from '@react-navigation/native'
import { Button } from '../components/Button'
import quizList from '../../assets/trivia/facts/quizList.json'
import { createStackNavigator } from '@react-navigation/stack';
import { levels } from '../../assets/trivia/facts/enums/enums'



const Quiz = (props) => {
  const quizId = props.route.params.id
  const quiz = getMashedQuizData({ id: quizId })
  const quizFromList = quizList.find(quiz => quiz.id === quizId)
  const Stack = createStackNavigator();
  const [score, setScore] = React.useState<Number>(0)

  const onFinalAnswer = (answer, level) => {
    if (answer.correct) {
      setScore(score + levels.find(l => l.id === level).score)
    }
  }

  if (quiz.length === 0) {
    return (
      <MainBox>
        <MainText variant='header'>No questions found</MainText>
      </MainBox>
    )
  }

  return (
    <MainBox>
      <MainText variant='header'>{quizFromList.name}</MainText>
      <MainText>{score.toString()}</MainText>

      <Stack.Navigator>
        {quiz.map((question, index) => (
          <Stack.Screen
            key={index}
            name={`Question ${index + 1}`}
          >
            {props => <QAView question={question} onFinalAnswer={onFinalAnswer} />}
          </Stack.Screen>
        ))}
      </Stack.Navigator>
    </MainBox>
  )
}


const QAView = ({ question, onFinalAnswer }) => {

  const onAnswer = (item) => {

    

    //onFinalAnswer(item, question.level)
  }

  return (
    <MainBox>
      <MainText variant="question">{question.question}</MainText>
      <FlatList
        data={question.answers}
        renderItem={({ item }) => (
          <Button label={item.answer} onPress={() => onAnswer(item)} />
        )}
      />
    </MainBox>
  )
}


export { Quiz }
