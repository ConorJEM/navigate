import React,{useState} from 'react';
import { Button, View, Text,ImageBackground,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from './DetailsScreen';
import { useNavigation } from '@react-navigation/native';
const image = { uri: "https://images.pexels.com/photos/1251196/pexels-photo-1251196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" };
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
                <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>Meal Time</Text>
                <Button
                    title="Sign In"
                    //onPress={() => navigation.navigate('Details')}
                    onPress={handleClick}
                />
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
    }
  });

  export default HomeScreen;