import React, { useReducer } from "react";
import { Text, View, StyleSheet } from "react-native";
import ColorAdjuster from "../components/ColorAdjuster";

const COLOR_INCREMENT = 20;

const reducer = (state, action) => {
  // state === {red:number, green:number, blue:number}
  // action === {colorToChange/type : 'change_red' || 'change_green' || 'change_blue', amount/payload : +12 || -12}

  switch (action.type) {
    case "change_red":
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case "change_green":
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case "change_blue":
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};

const RGBSquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, {
    red: 0,
    green: 0,
    blue: 0,
  });
  const { red, green, blue } = state;
  //console.log(state); // {red:0, green:0, blue:0}

  // Everytime a change occurs at state reducer calls by RunReducer function and re-render the function
  // runReducer pass an argument which is then provided as the 2nd argument(action) for reducer func.
  // runReducer => dispatch
  return (
    <View>
      <Text style={styles.textStyle}>Square Screen</Text>
      <ColorAdjuster
        onIncrease={() =>
          dispatch({ type: "change_red", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_red", payload: -1 * COLOR_INCREMENT })
        }
        color="Red"
      />
      <ColorAdjuster
        onIncrease={() =>
          dispatch({ type: "change_green", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_green", payload: -1 * COLOR_INCREMENT })
        }
        color="Green"
      />
      <ColorAdjuster
        onIncrease={() =>
          dispatch({ type: "change_blue", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_blue", payload: -1 * COLOR_INCREMENT })
        }
        color="Blue"
      />
      <Text style={styles.textStyle2}>Color Box : </Text>
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
          marginLeft: 130,
        }}
      />
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
    marginVertical: 10,
  },
});

export default RGBSquareScreen;
