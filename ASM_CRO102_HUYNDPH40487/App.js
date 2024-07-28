import React from "react";
import { Provider } from "react-redux";
import store from "./store/index";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "./screen/Profile";
import HomeMain from "./screen/HomeMain";
import Login from "./screen/Login";
import WelcomeScreen from "./screen/WelcomeScreen";
import Register from "./screen/Register";
import Icon from "react-native-vector-icons/Ionicons";
import BMIScreen from "./screen/BMIScreen";
import PersonalInfoScreen from "./screen/PersonalInfoScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TodoScreen from "./screen copy/todoScreen";
import MeditationScreen from "./screen/MeditationScreen";
import YogaScreen from "./screen/YogaScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "HomeMain") {
            iconName = "home-outline";
          } else if (route.name === "Profile") {
            iconName = "person-outline";
          } else if (route.name === "PersonalInfoScreen") {
            iconName = "heart-outline";
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="HomeMain" component={HomeMain} />
      <Tab.Screen name="PersonalInfo" component={PersonalInfoScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="WelcomeScreen">
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MainTabs"
        component={MainTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="PersonalInfo" component={PersonalInfoScreen} />
      <Stack.Screen name="BMI" component={BMIScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="AuthStack">
          <Drawer.Screen
            name="Home"
            component={AuthStack}
            options={{ headerShown: false }}
          />
          <Drawer.Screen name="Lời Biết Ơn" component={TodoScreen} />
          <Drawer.Screen name="Thiền" component={MeditationScreen} />
          <Drawer.Screen name="Yoga" component={YogaScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
