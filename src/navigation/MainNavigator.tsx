import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import React from 'react'
import {Landing} from '../screen/Landing'
import {Quiz} from '../screen/Quiz'
import {QuizMenu} from '../screen/QuizMenu'

const Stack = createStackNavigator()

const MainNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="QuizMenu" component={QuizMenu} />
      <Stack.Screen name="Quiz" component={Quiz} />
    </Stack.Navigator>
  </NavigationContainer>
)

export {MainNavigator}
