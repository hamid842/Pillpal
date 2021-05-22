import "react-native-gesture-handler";
import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import MedicationsScreen from "../screens/medications/MedicationsScreen";
import DashScreen from "../screens/dashboard/DashScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";
import DoctorsScreen from "../screens/DoctorsScreen";
import PrescriptionScreen from "../screens/PrescriptionScreen";
import CustomSidebarMenu from "./CustomSidebarMenu";
import colors from "../config/colors";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity onPress={toggleDrawer}>
        {/*Donute Button Image */}
        <Image
          source={{
            uri:
              "https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png",
          }}
          style={{ width: 25, height: 25, marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
};

const dashScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen
        name="Dashboard"
        component={DashScreen}
        options={{
          title: "Dashboard",
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: colors.mainBlue, //set Header text bg color
          },
          headerTintColor: colors.white, //set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

const profileScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "Profile",
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: colors.mainBlue, //set Header text bg color
          },
          headerTintColor: colors.white, //set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

const medicScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="Medication">
      <Stack.Screen
        name="Medication"
        component={MedicationsScreen}
        options={{
          title: "Medication",
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: colors.mainBlue, //set Header text bg color
          },
          headerTintColor: colors.white, //set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

const doctorsScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="Doctors">
      <Stack.Screen
        name="Doctors"
        component={DoctorsScreen}
        options={{
          title: "Doctors",
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: colors.mainBlue, //set Header text bg color
          },
          headerTintColor: colors.white, //set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

const prescriptionScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="Prescription">
      <Stack.Screen
        name="Prescription"
        component={PrescriptionScreen}
        options={{
          title: "Prescription",
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: colors.mainBlue, //set Header text bg color
          },
          headerTintColor: colors.white, //set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: "#e91e63",
        itemStyle: { marginVertical: 5 },
      }}
      drawerContent={(props) => <CustomSidebarMenu {...props} />}
    >
      <Drawer.Screen
        name="Dashboard"
        options={{ drawerLabel: "Dashboard" }}
        component={dashScreenStack}
      />
      <Drawer.Screen
        name="Profile"
        options={{ drawerLabel: "Profile" }}
        component={profileScreenStack}
      />
      <Drawer.Screen
        name="Medication"
        options={{ drawerLabel: "Medication" }}
        component={medicScreenStack}
      />
      <Drawer.Screen
        name="Doctors"
        options={{ drawerLabel: "Doctors" }}
        component={doctorsScreenStack}
      />
      <Drawer.Screen
        name="Prescription"
        options={{ drawerLabel: "Prescription" }}
        component={prescriptionScreenStack}
      />
    </Drawer.Navigator>
  );
};

export default AppNavigator;
