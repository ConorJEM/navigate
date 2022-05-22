import React, { useState, useMemo } from 'react';
import { Button, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';
import TopBar from '../components/TopBar';
import TinderCard from 'react-tinder-card';
import styled from 'styled-components/native';
import {FontAwesome} from '@expo/vector-icons';

const db = [
  {
    name: 'Richard Hendricks',
    img: require('../assets/img/richard.jpg')
  },
  {
    name: 'Erlich Bachman',
    img: require('../assets/img/erlich.jpg')
  },
  {
    name: 'Monica Hall',
    img: require('../assets/img/monica.jpg')
  },
  {
    name: 'Jared Dunn',
    img: require('../assets/img/jared.jpg')
  },
  {
    name: 'Dinesh Chugtai',
    img: require('../assets/img/dinesh.jpg')
  }
]
const alreadyRemoved = []

const DetailsScreen = () => {
  const navigation = useNavigation();
  const [characters, setCharacters] = useState(db)
  const [lastDirection, setLastDirection] = useState()

  const childRefs = useMemo(() => Array(db.length).fill(0).map(i => React.createRef()), [])

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete + ' to the ' + direction)
    setLastDirection(direction)
    alreadyRemoved.push(nameToDelete)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
    charactersState = charactersState.filter(character => character.name !== name)
    setCharacters(charactersState)
  }

  const swipe = (dir) => {
    const cardsLeft = characters.filter(person => !alreadyRemoved.includes(person.name))
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1].name // Find the card object to be removed
      const index = db.map(person => person.name).indexOf(toBeRemoved) // Find the index of which to make the reference to
      alreadyRemoved.push(toBeRemoved) // Make sure the next card gets removed next time if this card do not have time to exit the screen
      childRefs[index].current.swipe(dir) // Swipe the card!
    }
  }


  return (
    <View style={styles.container}>
      <TopBar />
      <Container>
        <Header>MealTime</Header>
        <CardContainer>
          {characters.map((character, index) =>
            <TinderCard ref={childRefs[index]} key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
              <Card>
                <CardImage source={character.img}>
                  <CardTitle>{character.name}</CardTitle>
                </CardImage>
              </Card>
            </TinderCard>
          )}
        </CardContainer>
        {lastDirection ? <InfoText key={lastDirection}>You swiped {lastDirection}</InfoText> : <InfoText>Swipe a card or press a button to get started!</InfoText>}
      </Container>
      <View style={styles.containerBot}>
        <TouchableOpacity style={styles.button} onPress={() => swipe('left')}>
            <FontAwesome name = "times" size ={27} color="#F06795"></FontAwesome>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => swipe('right')}>
            <FontAwesome name = "heart" size ={27} color="#64EDCC"></FontAwesome>
        </TouchableOpacity>
      </View>

    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  containerBot: {
    height:75,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6.46,
    elevation: 9,
  },
})

const Container = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`

const Header = styled.Text`
    color: #000;
    font-size: 30px;
    margin-bottom: 30px;
`

const CardContainer = styled.View`
    width: 90%;
    max-width: 300px;
    height: 500px;
`

const Card = styled.View`
    position: absolute;
    background-color: #fff;
    width: 100%;
    max-width: 300px;
    height: 500px;
    shadow-color: black;
    shadow-opacity: 0.2;
    shadow-radius: 20px;
    border-radius: 20px;
    resize-mode: cover;
`

const CardImage = styled.ImageBackground`
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 20px;
`

const CardTitle = styled.Text`
    position: absolute;
    bottom: 0;
    margin: 10px;
    color: #fff;
`

const Buttons = styled.View`
    margin: 20px;
    z-index: -100;
`

const InfoText = styled.Text`
    height: 28px;
    justify-content: center;
    display: flex;
    z-index: -100;
`
export default DetailsScreen;