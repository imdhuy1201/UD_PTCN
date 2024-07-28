import React, { useRef, useState } from "react";
import { View, Button, StyleSheet } from "react-native";
import { Audio } from "expo-av";

const MeditationScreen = () => {
  const sound = useRef(new Audio.Sound());
  const [isSoundPlaying, setIsSoundPlaying] = useState(false);
  const [isSoundLoading, setIsSoundLoading] = useState(false);

  const playSound = async () => {
    if (isSoundLoading) {
      return; // Đang tải, không làm gì cả
    }

    setIsSoundLoading(true);

    try {
      if (!isSoundPlaying) {
        await sound.current.loadAsync(
          require("../assets/audio/meditation.mp3"),
          {},
          true
        );
        await sound.current.playAsync();
        setIsSoundPlaying(true);
      }
    } catch (error) {
      console.log("Error loading sound: ", error);
    } finally {
      setIsSoundLoading(false);
    }
  };

  const stopSound = async () => {
    try {
      await sound.current.stopAsync();
      await sound.current.unloadAsync();
      setIsSoundPlaying(false);
    } catch (error) {
      console.log("Error stopping sound: ", error);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Phát nhạc thiền" onPress={playSound} />
      <Button title="Dừng nhạc" onPress={stopSound} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MeditationScreen;
