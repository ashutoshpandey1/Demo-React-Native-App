// Import React and React Native components
import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

// Define a custom component called PersonalData
const PersonalData = (props) => {
  // Use state hooks to store the personal data
  const [name, setName] = useState(props.name);
  const [age, setAge] = useState(props.age);
  const [mobile, setMobile] = useState(props.mobile);
  const [photo, setPhoto] = useState(props.photo);
  const [address, setAddress] = useState(props.address);
  const [email, setEmail] = useState(props.email);
  const [career, setCareer] = useState(props.career);

  // Return the JSX code to render the component
  return (
    <View style={styles.container}>
      <Image source={require("../Image/ankur.jpg")} style={styles.photo} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.info}>Age: {age}</Text>
      <Text style={styles.info}>Mobile: {mobile}</Text>
      <Text style={styles.info}>Address: {address}</Text>
      <Text style={styles.info}>Email: {email}</Text>
      <Text style={styles.info}>Career: {career}</Text>
    </View>
  );
};

// Define some styles for the component
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 20,
    margin: 10,
    borderRadius: 10,
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 10,
  },
  info: {
    fontSize: 18,
    margin: 5,
  },
});

// Export the component
export default PersonalData;
