/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';

import PersonalData from "./components/PersonalData";
const App = () => {
  return (

    <View>
      <Text style={{ marginLeft: 12, fontWeight: 'bold', textAlign: 'left' }}>
        <Text style={{ fontSize: 30 ,color:'#f48c06'}}>Hello</Text><Text style={{ fontSize: 30 }}>, </Text>


            
        <Text style={{marginLeft:150,fontSize:20,color:'#00b4d8',fontStyle:'italic'}}>Ashutosh</Text>
      </Text>
      <PersonalData
        name="Ashutosh Pandey"
        age="21"
        mobile="+91 xxxxx0xxx"
        photo='/Image/ankur.jpg'
        address="Aliganj Locknow , Uttar Pradesh"
        email="pandey@ashu.com"
        career="Junior Software Developer"
      />
      {/* <Image source={require("./Image/ankur.jpg")}/> */}
    </View>
  );

}
export default App;
