import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function App() {

  return(
    <View style={styles.container}>
      <Image source={{uri: 'https://brand.colostate.edu/wp-content/uploads/sites/47/2019/01/Rams-Logo-Reversed-one-color.jpeg'}}
             style={styles.logo} />

      <Text style={styles.insts}>
        Press the button below to select an image on your phone!
        </Text>


    <TouchableOpacity style={styles.button} onPress={() => alert('You have not selected an image yet')}>

    <Text style={styles.buttonText}> Pick Image </Text>

    </TouchableOpacity>


    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFE0',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    borderRadius: 5,
    backgroundColor: "#778899",
    padding: 20
  },

  insts: {
    fontSize: 18,
    color: "#87CEFA",
    marginHorizontal: 15,
    marginBottom: 10,
  },

  logo: {
    width: 310,
    height: 300,
    marginBottom: 20
  },

  buttonText:{
    fontSize:20,
    color: "#fff"
  }


});

