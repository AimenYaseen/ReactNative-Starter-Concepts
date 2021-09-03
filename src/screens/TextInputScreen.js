import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextInputScreen = () => {
  const [name, setName] = useState("");
  return (
    <View>
      <Text style={styles.textStyle}>Text Input Screen</Text>
      <Text style={{ marginLeft: 10, fontSize: 20 }}>Enter Name:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newText) => setName(newText)}
      />
      {name.length >= 5 ? null : (
        <Text style={{ marginLeft: 20, fontSize: 13 }}>
          Name must be longer than 5 characters
        </Text>
      )}
      <Text style={{ marginLeft: 10, fontSize: 15 }}>My Name is : {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    textAlign: "center",
    fontSize: 30,
    marginVertical: 15,
  },
  input: {
    marginHorizontal: 20,
    marginVertical: 10,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextInputScreen;
