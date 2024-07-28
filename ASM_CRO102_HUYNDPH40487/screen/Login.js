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

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert("Lỗi", "Bạn phải nhập tài khoản và mật khẩu.");
      return;
    }
    try {
      // Lấy thông tin người dùng từ AsyncStorage
      const user = await AsyncStorage.getItem("@user");
      if (user) {
        const { username: storedUsername, password: storedPassword } =
          JSON.parse(user);

        if (username === storedUsername && password === storedPassword) {
          navigation.navigate("MainTabs");
        } else {
          Alert.alert("Lỗi", "Tài khoản hoặc mật khẩu sai.");
        }
      } else {
        Alert.alert("Login Failed", "No user found. Please register.");
      }
    } catch (error) {
      Alert.alert(
        "Login Failed",
        "An error occurred while fetching the user data."
      );
    }
  };

  return (
    <View style={st.container}>
      <Text style={st.tieuDe}>Login</Text>
      <Text>UserName</Text>
      <TextInput
        style={st.input}
        placeholder="Nhập username"
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
      <View style={st.btn_login}>
        <TouchableOpacity style={st.button} onPress={handleLogin}>
          <Text style={st.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={st.text_regis}>Bạn chưa có tài khoản?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const st = StyleSheet.create({
  btn_login: {
    flexDirection: "row",
    alignItems: "center",
  },
  text_regis: {
    fontSize: 16,
    marginLeft: 20,
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
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
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
