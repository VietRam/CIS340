import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';

export default function App() {
  
  
  const pet = "Cat";
  return (
    
      <Text>
      {"\n\n\n\n\n\n"}
      Hello I am a student in CIS 340! {"\n"}
      My full name is {getFullName("Viet","H","Ngo")}{"\n"}
      I have a {pet}!
      </Text>
     
  );
}
