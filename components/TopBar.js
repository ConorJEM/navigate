import * as React from 'react';
import { Button, View, Text,StyleSheet } from 'react-native';
import {FontAwesome,FontAwesome5} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const TopBar = () => { 
        const navigation = useNavigation();
        return (
            <View style={styles.container}>
              <FontAwesome5 name="arrow-left" size={27} color="#4b4b4b" onPress={() => navigation.navigate('Home')}/>
              <FontAwesome5 name="fire" size={27} color="#F06795"/>
              <FontAwesome name="user" size={27} color="#4b4b4b"/>
            </View>
            
          );
    
}

const styles = StyleSheet.create({
    container: {
      height: 60,
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