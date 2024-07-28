import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function BMIScreen({ route }) {
  const { gender, height, weight } = route.params;
  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);

  let bmiCategory = '';
  if (bmi < 18.5) {
    bmiCategory = 'Thiếu cân';
  } else if (bmi >= 18.5 && bmi < 24.9) {
    bmiCategory = 'Bình thường';
  } else if (bmi >= 25 && bmi < 29.9) {
    bmiCategory = 'Thừa cân';
  } else {
    bmiCategory = 'Béo phì';
  }

  let dietRecommendation = '';
  if (bmiCategory === 'Thiếu cân') {
    dietRecommendation = 'Nên ăn nhiều thức ăn giàu năng lượng, protein và vitamin.';
  } else if (bmiCategory === 'Bình thường') {
    dietRecommendation = 'Duy trì chế độ ăn uống cân bằng và lành mạnh.';
  } else if (bmiCategory === 'Thừa cân') {
    dietRecommendation = 'Giảm lượng calo và tập luyện thường xuyên.';
  } else if (bmiCategory === 'Béo phì') {
    dietRecommendation = 'Giảm lượng calo, ăn nhiều rau xanh và tập thể dục đều đặn.';
  }

  return (
    <View style={styles.container}>
      <Text>BMI của bạn là: {bmi.toFixed(2)}</Text>
      <Text>Phân loại: {bmiCategory}</Text>
      <Text>Gợi ý thực đơn: {dietRecommendation}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
});