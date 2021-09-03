import React from "react";
import { Text, View, StyleSheet } from "react-native";

const LayoutScreen = () => {
  return (
    <View>
      <Text style={{ margin: 5 }}>Box Layout</Text>
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>Box Object Model Screen</Text>
      </View>
      <Text style={{ margin: 5 }}>Flex Layout</Text>
      <View style={styles.viewFlex}>
        <Text style={styles.textStyle}>Child#01</Text>
        <Text
          style={{ borderWidth: 3, borderColor: "red", alignSelf: "stretch" }}
        >
          Child#02 Align Self
        </Text>
        <Text style={styles.textStyle}>Child#03</Text>
      </View>
      <Text style={{ margin: 5 }}>Flex Layout JustifyContent space around</Text>
      <View style={styles.viewJ}>
        <Text style={styles.textStyle}>JustifyContent#01 present</Text>
        <Text style={styles.textStyle}>JustifyContent#02</Text>
        <Text
          style={{ borderWidth: 3, borderColor: "blue", position: "absolute" }}
        >
          JustifyContent#03 absolute itself
        </Text>
      </View>
      <Text style={{ margin: 5 }}>Flex</Text>
      <View style={{ borderColor: "green", borderWidth: 3, height: 100 }}>
        <Text style={{ flex: 1, borderWidth: 3, borderColor: "red" }}>
          Flex#01
        </Text>
        <Text style={{ borderWidth: 3, borderColor: "red", flex: 3, top: 10 }}>
          Flex#02 Top property: 10
        </Text>
        <Text style={{ borderWidth: 3, borderColor: "red", flex: 3 }}>
          Flex#03
        </Text>
      </View>
      <Text style={{ margin: 5 }}>Fill Content</Text>
      <View style={{ borderColor: "green", borderWidth: 3, height: 200 }}>
        <Text style={styles.textStyle}>Content#01 present</Text>
        <Text style={styles.textStyle}>Content#02</Text>
        <Text
          style={{
            borderWidth: 5,
            borderColor: "blue",
            position: "absolute",
            ...StyleSheet.absoluteFillObject,
            //backgroundColor: "red",
          }}
        >
          Content#03 absolute itself
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 5,
    borderColor: "black",
    margin: 5,
  },
  textStyle: {
    borderWidth: 3,
    borderColor: "green",
  },
  viewFlex: {
    flexDirection: "row",
    height: 100,
    alignItems: "center",
    borderWidth: 5,
    borderColor: "black",
  },
  viewJ: {
    height: 150,
    borderWidth: 5,
    borderColor: "black",
    justifyContent: "space-around",
  },
});

export default LayoutScreen;
