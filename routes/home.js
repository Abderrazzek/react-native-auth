import React from "react";
import { createStackNavigator } from "react-navigation-stack";

//IMPORT SCENES
import HomeScreen from "../screens/home/Home";
import EditAnimalProfileScreen from "../screens/home/EditAnimalProfile";
import EditUserProfileScreen from "../screens/home/EditUserProfile";
import DisplayUserAnimalScreen from "../screens/home/DisplayUserAnimal";
import NewAnimalScreen from "../screens/home/NewAnimal";

// import { headerStyle, headerTitleStyle } from "../theme";

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    EditAnimalProfile: EditAnimalProfileScreen,
    EditUserProfile: EditUserProfileScreen,
    DisplayUserAnimal: DisplayUserAnimalScreen,
    NewAnimal: NewAnimalScreen,
  },
  {
    initialRouteName: "Home",
    // defaultNavigationOptions: () => ({ headerStyle, headerTitleStyle }),
  }
);

export default HomeStack;
