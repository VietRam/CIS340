import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';

export default function App() {

  const [selectedImage, setSelectedImage ] = React.useState(null)


  let openImagePickerAsync = async () => {

    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false){

      alert("Permission is required!");
      return;
    
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if(pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri});

  };

  // add the sharing image dialog
  let openSharingDialogAsyc = async () => {
      if(!(await Sharing.isAvailableAsync())){
        alert('Sharing is not avaliable on my phone');
        return;
      }

      Sharing.shareAsync(selectedImage.localUri);

  };





  if (selectedImage !== null){
    return(
      <View style={styles.container}>
        <Image source={{ uri: selectedImage.localUri}} style ={styles.selImage}/>

        <TouchableOpacity onPress={openSharingDialogAsyc} style={styles.button}>
          <Text style={styles.buttonText}> Share My Photo</Text>
        </TouchableOpacity>
      </View>

    )
  }




  return(
    <View style={styles.container}>
      <Image source={{uri: 'https://brand.colostate.edu/wp-content/uploads/sites/47/2019/01/Rams-Logo-Reversed-one-color.jpeg'}}
             style={styles.logo} />

      <Text style={styles.insts}>
        Press the button below to select an image on your phone!
        </Text>


    <TouchableOpacity style={styles.button} onPress={openImagePickerAsync}>

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
  },

  selImage: {
    width: 300,
    height: 300,
    resizeMode: 'contain'
  }


});

