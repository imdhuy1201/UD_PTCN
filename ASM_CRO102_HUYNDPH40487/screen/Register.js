import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Register = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const handleRegister = async () => {
    if (!username || !password) {
      Alert.alert("Đăng ký lỗi", "Bạn phải điền đủ thông tin.");
      return;
    }

    try {
      // Lưu thông tin đăng ký vào AsyncStorage
      await AsyncStorage.setItem(
        "@user",
        JSON.stringify({ username, password })
      );
      Alert.alert("đăng ký thành công");
      navigation.navigate("Login");
    } catch (error) {
      Alert.alert(
        "Registration Failed",
        "An error occurred while saving the user data."
      );
    }
  };

  return (
    <View style={st.container}>
      <Text style={st.tieuDe}>Register</Text>
      <Text>UserName</Text>
      <TextInput
        style={st.input}
        placeholder="Nhập userName"
        onChangeText={(txt) => setUsername(txt)}
        value={username}
      />
      <Text>Password</Text>
      <TextInput
        style={st.input}
        secureTextEntry={true}
        placeholder="Nhập password"
        onChangeText={(txt) => setPassword(txt)}
        value={password}
      />
      <Text>RePassword</Text>

      <TextInput
        style={st.input}
        secureTextEntry={true}
        placeholder="Nhập lại password"
        onChangeText={(txt) => setRePassword(txt)}
        value={rePassword}
      />
      <TouchableOpacity style={st.button} onPress={handleRegister}>
        <Text style={st.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;

const st = StyleSheet.create({
  errorInput: {
    borderColor: "blue",
  },
  errorText: {
    color: "red",
  },
  button: {
    backgroundColor: "black",
    width: "80%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff",
  },
 
  tieuDe: {
    fontSize: 30,
    marginBottom: 20,
  },
  input: {
    borderColor: "blue",
    borderWidth: 1,
    margin: 20,
    padding: 10,
    borderRadius: 5,
    fontSize: 20,
    width: "80%",
  },
});
