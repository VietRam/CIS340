import React from 'react';
import { Text, Image, ScrollView } from 'react-native';


const dog = {
  url: 'https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg',
  width: 64,
  height: 64
};

export default MyScrollViewApp = () =>( 
    
    
      <ScrollView>
        <Text Style={{fontsize: 80}}> Try to scoll down</Text>
        <Image source={require('./assets/cat.jpg')} style={{width: 80, height: 80}} />
        <Image source={dog} />
        <Image source={dog} />
        <Image source={dog} />
        <Image source={dog} />
        <Image source={dog} />
        <Image source={dog} />
        <Image source={dog} />
        <Text Style={{fontsize: 80}}> Try to scoll down again, if you like</Text>
        <Image source={dog} />
        <Image source={dog} />
        <Image source={dog} />
        <Image source={dog} />
        <Image source={dog} />
        <Image source={dog} />
        <Image source={dog} />
        <Text Style={{fontsize: 80}}> Try to scoll down</Text>
        <Image source={dog} />
        <Image source={dog} />
        <Image source={dog} />
        <Image source={dog} />
        <Image source={dog} />
        <Image source={dog} />
        <Image source={dog} />
        <Text Style={{fontsize: 80}}> Try to scoll down</Text>
        <Image source={dog} />
        <Image source={dog} />
        <Image source={dog} />
        <Image source={dog} />
        <Image source={dog} />
        <Image source={dog} />
        <Image source={dog} />
        <Text Style={{fontsize: 80}}> React Native Components</Text>
        <Image source={dog} />
        <Image source={dog} />
        <Image source={dog} />
        <Image source={dog} />
        <Image source={dog} />
        <Image source={dog} />
        <Image source={dog} />
      </ScrollView>
  );


    