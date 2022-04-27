import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {

  const csuLogo ={
    uri: "https://warnercnr.colostate.edu/wp-content/uploads/sites/2/2018/08/CSU-Ram-357-617.jpg",
    width: 80,
    height: 80
  };


  return (
    <View style={styles.container}>
      
    <Image 
      style={styles.localCSULogo}
      source={require('./assets/logo.jpg')}
    />

    <Image
      style={styles.urlCSULogo}
      source={{uri: "https://warnercnr.colostate.edu/wp-content/uploads/sites/2/2018/08/CSU-Ram-357-617.jpg"}}
    />

    <Image source={csuLogo} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },

  localCSULogo: {
    width: 55,
    height: 65,
  },

  urlCSULogo: {
    width: 50,
    height: 50,
  },

  stretchLogo: {
  
    height: 200,
    resizeMode: 'center',
  }



});
