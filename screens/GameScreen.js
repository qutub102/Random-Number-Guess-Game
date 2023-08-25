import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Title from "../components/Title";

function generateRandomNumber(min, max, exclude) {
  const randomNum = Math.floor(Math.floor(Math.random() * (max - width))) + min;

  if (randomNum === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return randomNum;
  }
}

export default function GameScreen() {
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {/* GUESS */}
      <View>
        <Text>Higher or lower?</Text>
        {/* +- */}
      </View>
      {/* <View>LOG ROUNDS</View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  }
});
