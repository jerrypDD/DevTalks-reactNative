/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import NotFoundScreen from '../screens/NotFoundScreen';
import Home from '../screens/Home';
import About from '../screens/About';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AboutMore from '../screens/AboutMore';
import ScrollViews from '../screens/ScrollViews';


export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <MyDrawer/>
      {/* <RootNavigator /> */}
    </NavigationContainer>
  );
}
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="home" component={HomeNavigator} />
      <Drawer.Screen name="About" component={AboutTabs} options={{headerShown: false}}/>
    </Drawer.Navigator>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function HomeNavigator() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen}  />
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        headerShown:false
      }}>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => <FontAwesome name="home" size={24} color="black" />
        }}
      />
      <BottomTab.Screen
        name="ScrollView"
        component={ScrollViews}
        options={{
          title: 'Scroll',
          tabBarIcon: () => <FontAwesome name="list" size={24} color="black" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

const AboutStack = createNativeStackNavigator()

function AboutTabs () {
  return (
    <AboutStack.Navigator>
      <AboutStack.Screen name="About" component={About} options={{headerTitleAlign:'center'}} />
      <AboutStack.Screen name="AboutMore" component={AboutMore} options={{headerTitleAlign:'center'}}/>
    </AboutStack.Navigator>
  )
}
