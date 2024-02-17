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




export const storage = new MMKV()

function App(): React.JSX.Element {

  const [name, setName] = React.useState<string>("")


  const startQuiz = () => {
    console.log("Quiz Started", name);
    storage.set('user.name', name)
  }

  return (<>
    <StatusBar hidden />
    <SafeAreaView style={{ flex: 1 }}>

      <View style={{ backgroundColor: "#388004", flex: 1 }}>
        <Text style={{
          fontSize: 30,
          textAlign: "center",
          marginTop: 50,
          color: "black"
        }}>
          Quiz
        </Text>
        <TextInput
          style={{
            backgroundColor: "white",
            margin: 20,
            padding: 10,
            borderRadius: 10
          }}
          value={name}
          onChangeText={setName}
          placeholder="Enter your name" />
        <TouchableOpacity
          style={{
            backgroundColor: "black",
            padding: 10,
            margin: 20,
            borderRadius: 10
          }}
          onPress={startQuiz}
        >
          <Text style={{
            color: "white",
            textAlign: "center"
          }}>
            Start Quiz
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>

  </>
  )
}

const styles = StyleSheet.create({

});

export { App };
