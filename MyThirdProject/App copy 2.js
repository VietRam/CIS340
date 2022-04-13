import React from 'react';
import { Text, Image, View } from 'react-native';

export default function CatApp() {
  return (
    <View style ={{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Image source="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F09%2F21%2Fragdoll-lying-on-wood-floor-417857939.jpg"
      style={{width: 200, height: 200}}
      />
      <Text>Hello, I am your cat</Text>
    </View>
  );
}
