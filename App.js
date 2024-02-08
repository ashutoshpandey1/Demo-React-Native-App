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
} from 'react-native';

import PersonalData from "./components/PersonalData";
const App= ()=>{
  return(

    <View>
    <Text style={{fontSize:40,fontWeight:'bold',textAlign:'center'}}>Hello</Text>
    <PersonalData
        name="Ashutosh Pandey"
        age="21"
        mobile="+91 xxxxx0xxx"
        photo="./Image/ankur.jpg"
        address="Aliganj Locknow , Uttar Pradesh"
        email="pandey@ashu.com"
        career="Junior Software Developer"
      />
        </View>
  );
 
}
export default App;
