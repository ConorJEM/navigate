import * as React from 'react';
import { Button, View, Text,StyleSheet } from 'react-native';
import {FontAwesome,FontAwesome5} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const TopBar = () => { 
        const navigation = useNavigation();
        return (
            <View style={styles.container}>
              <FontAwesome5 name="arrow-left" size={35} color="#4b4b4b" onPress={() => navigation.navigate('Home')}/>
              <FontAwesome5 name="fire" size={35} color="#F06795"/>
              <FontAwesome name="star" size={35} color="#FFBF00"/>
            </View>
            
          );
    
}

const styles = StyleSheet.create({
    container: {
      height: 70,
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 15,
      backgroundColor: 'white',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.12,
      shadowRadius: 5.46,
      elevation: 9,
    },
  })

export default TopBar;