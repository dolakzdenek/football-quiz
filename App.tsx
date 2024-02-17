/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import { MMKV } from 'react-native-mmkv';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { MainNavigator } from './src/navigation/MainNavigator';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/components/restyle/theme';




export const storage = new MMKV()

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar hidden />
      <SafeAreaView style={{ flex: 1 }}>
        <MainNavigator />
      </SafeAreaView>
    </ThemeProvider>
  )
}

export { App };
