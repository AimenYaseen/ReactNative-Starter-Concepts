import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  // keys must be added to list
  // keys must be a string and unique
  // 1st method : add key property in the array => { name: "Friend # 01", key: '1' }
  // 2nd method : add keyExtractor property in FlatList
  const friends = [
    { name: "Friend # 01", age: 22 },
    { name: "Friend # 02", age: 23 },
    { name: "Friend # 03", age: 19 },
    { name: "Friend # 04", age: 25 },
    { name: "Friend # 05", age: 20 },
    { name: "Friend # 06", age: 26 },
    { name: "Friend # 07", age: 21 },
  ];
  // renderItem work as map() function
  // renderItem => element === {item : { name : "Friend # 01" }, index: 0}
  // renderItem => item === {name : "Friend # 01"}
  return (
    <FlatList
      data={friends}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 10,
    paddingLeft: 10,
  },
});

export default ListScreen;
