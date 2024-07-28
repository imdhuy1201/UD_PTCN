import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("Login");
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require("../assets/fpt_logo.png")} style={styles.logo} />
      <Image source={require("../assets/img_gt.png")} style={styles.logo} />
      <Text style={{marginTop:30, fontSize:25,color:"red",shadowOpacity:2}}>ỨNG DỤNG PHÁT TRIỂN CÁ NHÂN</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 400,
    height: 200,
    marginBottom: 20,
  },
  studentInfo: {
    color: "red",
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
  },
});

export default WelcomeScreen;
