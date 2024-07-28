import React, { useRef } from "react";
import { View, StyleSheet } from "react-native";
import { Video } from "expo-av";

const YogaScreen = () => {
  const video = useRef(null);

  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={require("../assets/video/yoga.mp4")}
        useNativeControls
        resizeMode="contain"
        isLooping
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  video: {
    width: "100%",
    height: 300,
  },
});

export default YogaScreen;
