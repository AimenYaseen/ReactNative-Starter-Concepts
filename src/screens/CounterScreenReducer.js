import React, { useReducer } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const reducer = (state, action) => {
  // state === { count:number }
  // action === {type:'inc' || 'dec' , payload : 1}

  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload };
    case "decrement":
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <View>
      <Text style={styles.textStyle}>Counter</Text>
      <Button
        title="Increase"
        onPress={() => dispatch({ type: "increment", payload: 1 })}
      />
      <Text></Text>
      <Button
        title="Decrease"
        onPress={() => dispatch({ type: "decrement", payload: 1 })}
      />
      <Text style={styles.textStyle2}>Counter Score : {state.count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    textAlign: "center",
    fontSize: 30,
    marginVertical: 20,
  },
  textStyle2: {
    textAlign: "center",
    fontSize: 20,
    marginTop: 20,
  },
});

export default CounterScreen;
