import React,{useState} from 'react';
import { Button, View, Text,ImageBackground,StyleSheet,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from './DetailsScreen';
import { useNavigation } from '@react-navigation/native';
const image = { img: require('../assets/img/monica.jpg') };
import AuthModal from '../components/AuthModal';

const HomeScreen = () => {
    const [showModal,setShowModal] = useState(false);
    const navigation = useNavigation();

    const handleClick = () => {
        console.log('clicked')
        setShowModal(true)
        
    }

        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assets/background-main-2.jpg')} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>Meal Time</Text>
                  {!showModal &&(
                  <View style={{alignItems: 'center'}}>
                  <TouchableOpacity onPress={handleClick} style={styles.button}>
                    <Text style={styles.buttonText}>Sign in</Text>
                  </TouchableOpacity>
                  </View>
                  )}
                
                  
                {showModal && (<AuthModal setShowModal={setShowModal}/>)}
                </ImageBackground>
            </View>
            );
    
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: "center"
    },
    text: {
      color: "white",
      fontSize: 60,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
      paddingTop: 0
      //backgroundColor: "#000000c0"
    },
    subtext: {
      color: "white",
      fontSize: 60,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
      paddingTop: 0
    },
    button: {
      backgroundColor: 'grey',
      padding: 20,
      borderRadius: 10
    },
    buttonText: {
      color: "white"
    }
  });

  export default HomeScreen;