import React from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <View style={{ height: 300, width: 300, marginLeft: 30 }}>
        <Button
          onPress={() => navigation.navigate("Component")}
          title="Go to Components Screen"
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("List")}
          style={styles.touchStyle}
        >
          <Text style={styles.text2}>GO TO LIST SCREEN</Text>
        </TouchableOpacity>
        <Button
          onPress={() => navigation.navigate("Image")}
          title="Go to Image Screen"
        />
        <Text />
        <Button
          onPress={() => navigation.navigate("Counter")}
          title="Go to Counter Screen"
        />
        <Text />
        <Button
          onPress={() => navigation.navigate("CounterReducer")}
          title="Go to Counter Screen Reducer"
        />
        <Text />
        <Button
          onPress={() => navigation.navigate("Color")}
          title="Go to Color Screen"
        />
        <Text />
        <Button
          onPress={() => navigation.navigate("Square")}
          title="Go to RGB Square Screen"
        />
        <Text />
        <Button
          onPress={() => navigation.navigate("SquareReducer")}
          title="Go to Square Screen Reducer"
        />
        <Text />
        <Button
          onPress={() => navigation.navigate("Text")}
          title="Go to Text Input Screen"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  text2: {
    fontSize: 15,
    textAlign: "center",
    color: "white",
  },
  touchStyle: {
    marginBottom: 17,
    marginTop: 17,
    textAlign: "center",
    backgroundColor: "#0E8DE8",
    paddingBottom: 7,
    paddingTop: 7,
  },
});

export default HomeScreen;

// Two ways to use a button
// Button element & TouchableOpacity
