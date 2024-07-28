// src/screens/EmployeeDetail.js
import React from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";

const EmployeeDetail = ({ route, navigation }) => {
  const { employee } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: employee.image }} style={styles.employeeImage} />
      <Text style={styles.employeeName}>Họ tên:{employee.name}</Text>
      <Text style={styles.employeeDetail}>Giới tính: {employee.gender}</Text>
      <Text style={styles.employeeDetail}>Ngày sinh: {employee.birthdate}</Text>
      <Text style={styles.employeeDetail}>
        Trạng thái: {employee.isPermanent ? "Chính thức" : "Thử việc"}
      </Text>
      <Text style={styles.information}>
        Thông tin thêm: {employee.information}
      </Text>
      <Button title="Quay lại" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  employeeImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  employeeName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  employeeDetail: {
    fontSize: 18,
    marginBottom: 5,
  },
  information: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default EmployeeDetail;
