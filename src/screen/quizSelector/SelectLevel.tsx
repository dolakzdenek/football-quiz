import { useNavigation } from '@react-navigation/native'
import React, { useMemo } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import { MainBox } from '../../components/MainBox'
import { Button } from '../../components/Button'
import { MainText } from '../../components/MainText'
import { levels } from '../../../assets/trivia/facts/enums/enums'

const SelectLevel = ({ onSelect }) => {
  const navigation = useNavigation()
  const [selectedLevels, setSelectedLevels] = React.useState([])

  const selectLevels = (id) => {
    if (selectedLevels.includes(id)) {
      setSelectedLevels(selectedLevels.filter(level => level !== id))
    } else {
      setSelectedLevels([...selectedLevels, id])
    }
  }

  useMemo(() => {
  }, [selectedLevels])

  return (
    <MainBox>
      <MainText variant='header'>Levels</MainText>
      <ScrollView style={{ flexDirection: 'column', flex: 1, padding: 10 }}>
        {levels.map(level => <Button key={level.id} label={level.label} onPress={() => selectLevels(level.id)} backgroundColor={selectedLevels.includes(level.id) ? 'selected' : 'cardPrimaryBackground'} />)}
      </ScrollView>
      <Button label='Next' onPress={() => onSelect({ levels: selectedLevels })} />
      {/*<FlatList
        data={categories}
        renderItem={({ item }) => (<Button label={item} onPress={() => openQuiz(item)}
        />)}
  />*/}

    </MainBox>
  )
}

export { SelectLevel }
