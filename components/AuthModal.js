import React,{useState} from 'react';
import { Button, View, Text,ImageBackground,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';



const AuthModal = ({setShowModal}) => {
    const handleCloseClick = () => {
        console.log('clicked close')
        setShowModal(false)
    }
    const navigation = useNavigation();
        return (
            <View>
                <Text>GRRRRRRRRRRRRRRRRRRRR</Text>
                <Button title="Click here" onPress={() => navigation.navigate('Details')}></Button>
                <Button title="Close Sign in page" onPress={handleCloseClick}></Button>
            </View>
            
            );
    
}
  export default AuthModal;