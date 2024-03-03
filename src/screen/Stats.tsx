import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { MMKV } from 'react-native-mmkv'
import { MainBox } from '../components/MainBox'
import { MainText } from '../components/MainText'
import { Input } from '../components/Input'
import { Button } from '../components/Button'
import { Flag } from '../components/misc/Flag'

export const storage = new MMKV()

const Stats = (props) => {
  const [results, setResults] = React.useState([])
  const name = storage.getString('user.name') || ''

  useEffect(() => {
    const results = storage.getString('user.results') //can be undefined when no results are found
    console.log('results', results)
    const resultsArray = results ? JSON.parse(results) : []
    setResults(resultsArray.sort((a, b) => b.score - a.score))
    return () => {

    }
  }, [])

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
            {name} Results
          </MainText>
          <ScrollView style={styles.tableContainer}>
            <View style={styles.tableRow}>
              <MainText style={styles.tableHeader}>#</MainText>
              <MainText style={styles.tableHeader}>Name</MainText>
              <MainText style={styles.tableHeader}>Country</MainText>
              <MainText style={styles.tableHeader}>Score</MainText>
            </View>
            {results.map((result, index) => (
              <View style={styles.tableRow} key={index}>
                <MainText style={styles.tableCell}>{index + 1}</MainText>
                <MainText style={styles.tableCell}>{result.name}</MainText>
                <View style={styles.tableCell}>
                  <View style={{ position: 'absolute', right: 10 }}>
                    <Flag code={result.country} />
                  </View>
                </View>
                <MainText style={styles.tableCell}>{result.score}</MainText>
              </View>
            ))}
          </ScrollView>

        </View>
      </MainBox>
    </>
  )
}

const styles = StyleSheet.create({
  tableHeader: {
    fontWeight: 'bold',
    fontSize: 18,
    mainMainTextAlign: 'center',
    padding: 10
  },
  tableContainer: {
    borderRadius: 10,
    padding: 10
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  tableCell: {
    flex: 1,
    textAlign: 'center',
  }
})

export { Stats }
