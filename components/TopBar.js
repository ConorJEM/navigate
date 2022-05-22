import * as React from 'react';
import { Button, View, Text,StyleSheet } from 'react-native';
import {FontAwesome,FontAwesome5} from '@expo/vector-icons';

const TopBar = () => { 
        return (
            <View style={styles.container}>
              <FontAwesome5 name="fire" size={27} color="#F06795"/>
              <FontAwesome name="comments" size={27} color="#5c5c5c"/>
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