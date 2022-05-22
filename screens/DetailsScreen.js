import * as React from 'react';
import { Button, View, Text,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';
import TopBar from '../components/TopBar';

const DetailsScreen = () => { 
      const navigation = useNavigation();
        return (
            <View style={styles.container}>
              <TopBar />
              <View>
                  <Text>Details Screen</Text>
                  <Button
                    title="Go Back Home"
                    onPress={() => navigation.navigate('Home')}
                  />
                </View>
              
            </View>
          );
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
})

export default  DetailsScreen;