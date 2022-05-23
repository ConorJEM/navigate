import React, { useState } from 'react';
import { Button, View, Text, ImageBackground, StyleSheet, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

const AuthModal = ({ setShowModal }) => {
    const handleCloseClick = () => {
        console.log('clicked close')
        setShowModal(false)
    }
    const handleLogIn = () => {
        console.log(username)
        console.log(password)
    }
    const navigation = useNavigation();
    const [username,setUsername]=useState(null);
    const [password,setPassword]=useState(null);
    const [confirmPassword,setConfirmPassword]=useState(null);
    return (
        <View style={styles.container}>
            <TextInput placeholder='username' style={styles.input} required={true} onChangeText={setUsername}/>
            <TextInput placeholder='password' style={styles.input} required={true} onChangeText={setPassword} secureTextEntry={true}/>
            <Button title="Complete sign in" onPress={handleLogIn}></Button>
            <Button title="Click here" onPress={() => navigation.navigate('Details')}></Button>
            <Button title="Close Sign in page" onPress={handleCloseClick}></Button>
        </View>

    );

}

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        //backgroundColor: 'white',
        //borderWidth: 1,
        borderRadius: 5,
        borderColor:'#e8e8e8',
        //alignItems:'center',

        paddingHorizontal:10,
        marginVertical: 10,
    },
    input: {
        padding:5,
        alignContent: 'center',
        backgroundColor:'#e8e8e8',
        borderRadius: 5,
        marginTop: 5,
        fontSize: 30

    },
})


export default AuthModal;