// ProfileScreen.js
import React from "react";
import { View, Text, StyleSheet, Image, Button, Alert } from "react-native";

const ProfileScreen = ({ navigation }) => {
  const handleLogout = () => {
    Alert.alert(
      "Xác nhận đăng xuất",
      "Bạn có chắc chắn muốn đăng xuất không?",
      [
        {
          text: "Hủy",
          style: "cancel",
        },
        {
          text: "Đăng xuất",
          onPress: () => navigation.navigate("Login"), // Điều hướng đến màn hình Login
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={{ uri: "https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg=" }}
      />
      <Text style={styles.name}>Tên của bạn</Text>
      <Text style={styles.email}>email@example.com</Text>
      <Button
        title="Chỉnh sửa hồ sơ"
        onPress={() => alert("Chỉnh sửa hồ sơ")}
      />
      <Button title="Đăng xuất" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  email: {
    fontSize: 18,
    color: "gray",
    marginBottom: 20,
  },
});

export default ProfileScreen;
