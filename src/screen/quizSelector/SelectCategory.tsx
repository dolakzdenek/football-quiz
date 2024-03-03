import { useNavigation } from '@react-navigation/native'
import React, { useMemo } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import { MainBox } from '../../components/MainBox'
import { Button } from '../../components/Button'
import { MainText } from '../../components/MainText'
import { categories } from '../../../assets/trivia/facts/enums/enums'

const SelectCategories = ({ onSelect }) => {
  const navigation = useNavigation()
  const [selectedCategories, setSelectedCategories] = React.useState([])

  const selectCategories = (id) => {
    if (selectedCategories.includes(id)) {
      setSelectedCategories(selectedCategories.filter(category => category !== id))
    } else {
      setSelectedCategories([...selectedCategories, id])
    }
  }

  return (
    <MainBox>
      <MainText variant='header'>Categories</MainText>
      <ScrollView style={{ flexDirection: 'column', flex: 1, padding: 10 }}>
        {categories.map((category, index) => <Button key={index} label={category} onPress={() => selectCategories(category)} backgroundColor={selectedCategories.includes(category) ? 'selected' : 'cardPrimaryBackground'} />)}
      </ScrollView>
      <Button label='Next' onPress={() => onSelect({ categories: selectedCategories })} />
    </MainBox>
  )
}

export { SelectCategories }
