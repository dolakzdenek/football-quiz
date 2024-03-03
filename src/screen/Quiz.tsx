import React, { useCallback, useEffect, useState } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { MainBox } from '../components/MainBox'
import { MainText } from '../components/MainText'
import { getMashedQuizData } from '../helper/quizMasher'
import { useNavigation } from '@react-navigation/native'
import { Button } from '../components/Button'
import quizList from '../../assets/trivia/facts/quizList.json'
import { createStackNavigator } from '@react-navigation/stack';
import { levels } from '../../assets/trivia/facts/enums/enums'
import { Scoreboard } from '../components/misc/Scoreboard'



const Quiz = (props) => {
  const quizId = props.route.params.id
  const quizFromList = quizList.find(quiz => quiz.id === quizId)
  const Stack = createStackNavigator();
  const [score, setScore] = React.useState<Number>(0)
  const [quiz, setQuiz] = React.useState([])
  const navigation = useNavigation()

  useEffect(() => {
    setQuiz(getMashedQuizData({ id: quizId }))
    return () => {
      setQuiz([])
      setScore(0)
    }
  }, [])


  const onFinalAnswer = ({ answer, level, questionProps, index }) => {
    const calculatedScore = score + (levels.find(l => l.id === level).score * Number(answer.correct))
    setScore(calculatedScore)
    if (index + 1 === quiz.length) {
      return navigation.navigate('QuizResult', { score: calculatedScore })
    }
    return questionProps.navigation.navigate(`Question ${index + 2}`)
  }

  if (quiz.length === 0) {
    return (
      <MainBox>
        <MainText variant={'header'}>No questions found</MainText>
      </MainBox>
    )
  }

  return (
    <MainBox>
      <MainText variant={'header'}>{quizFromList.name}</MainText>
      <Scoreboard score={score} />

      <Stack.Navigator
        screenOptions={{ headerLeft: null, headerShown: false }} // Add this line to prevent going back
      >
        {quiz.map((question, index) => (
          <Stack.Screen
            key={index}
            name={`Question ${index + 1}`}
          >
            {questionProps => <QAView question={question} onFinalAnswer={(finalAnswerProps) => onFinalAnswer({ ...finalAnswerProps, questionProps, index })} />}
          </Stack.Screen>
        ))}
      </Stack.Navigator>
    </MainBox>
  )
}


const QAView = ({ question, onFinalAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null)

  useEffect(() => {
    return () => {
      setSelectedAnswer(null)
    }
  }, [])


  const answerColor = useCallback(({ answer }) => {
    if (selectedAnswer?.answer === answer) {
      return 'selected'
    }
    return 'cardPrimaryBackground'
  }, [selectedAnswer])


  const onAnswer = (item) => {
    if (selectedAnswer?.answer === item?.answer) {
      return onFinalAnswer({ answer: item, ...question })
    }
    setSelectedAnswer(item)
  }

  return (
    <MainBox>
      <MainText variant="question">{question.question}</MainText>
      <FlatList
        data={question.answers}
        renderItem={({ item }) => (
          <Button label={item.answer} onPress={() => onAnswer(item)} backgroundColor={answerColor(item)} />
        )}
      />
    </MainBox>
  )
}


export { Quiz }
