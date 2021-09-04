import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ColorScreen from "./src/screens/ColorScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import HomeScreen from "./src/screens/HomeScreen";
import ImageScreen from "./src/screens/ImageScreen";
import ListScreen from "./src/screens/ListScreen";
import RGBSquareScreen from "./src/screens/RGBSquareScreen";
import SquareScreenReducer from "./src/screens/SquareScreenReducer";
import CounterScreenReducer from "./src/screens/CounterScreenReducer";
import TextInputScreen from "./src/screens/TextInputScreen";
import LayoutScreen from "./src/screens/LayoutScreen";
import LayoutExercise from "./src/screens/LayoutExercise";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreenReducer,
    Color: ColorScreen,
    Square: RGBSquareScreen,
    SquareReducer: SquareScreenReducer,
    Text: TextInputScreen,
    Box: LayoutScreen,
    Exercise: LayoutExercise,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
