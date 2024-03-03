import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Landing } from '../screen/Landing'
import { Quiz } from '../screen/Quiz'
import { QuizMenu } from '../screen/QuizMenu'
import { QuizResult } from '../screen/QuizResult'
import { Stats } from '../screen/Stats'
import { MainText } from '../components/MainText'
import { useTheme } from '@shopify/restyle'
import { SelectLevel } from '../screen/quizSelector/SelectLevel'

const Stack = createStackNavigator()

const MainNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: useTheme().colors.mainBackground,
          height: 60,
        },
        headerTintColor: useTheme().colors.mainTextColor,
        headerTitle(props) {
          return null
        },
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="QuizMenu" component={QuizMenu} />
      <Stack.Screen name="Quiz" component={Quiz} />
      <Stack.Screen name="QuizResult" component={QuizResult} />
      <Stack.Screen name="Stats" component={Stats} />
    </Stack.Navigator>
  </NavigationContainer>
)


export { MainNavigator }
