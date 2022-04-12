import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View} from 'react-native';

export default function App() {
  return (
    <View>
      <Text>
      Hello I am a student in CIS 340!
      </Text>
    </View>
      

  );
}

export default function MultiComp(){
  return(
    <View style={{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text> Welcome to My Class </Text>
      <MyApp />
      <MyApp />
      <MyApp />
      <MyApp />
    </View>
  )
}