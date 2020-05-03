import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import UserListScreen from "./src/screens/UserListScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import SquareScreen from "./src/screens/SquareScreen";
import InputScreen from "./src/screens/InputScreen";
import BoxScreen from "./src/screens/BoxScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    UserList: UserListScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen,
    Input: InputScreen,
    Box: BoxScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "EasySport"
    }
  }
);

export default createAppContainer(navigator);
