import React from "react";
import {
  // View,
  StyleSheet,
  Image,
  Text,
  // Linking,
} from "react-native";

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

import useAuth from "../auth/useAuth";
import Screen from "../components/Screen";

const CustomSidebarMenu = (props) => {
  const auth = useAuth();
  // const BASE_PATH =
  //   "https://raw.githubusercontent.com/AboutReact/sampleresource/master/";

  return (
    <Screen>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem label="Logout" onPress={() => auth.logOut()} />
        {/* <View style={styles.customItem}>
          <Text
            onPress={() => {
              Linking.openURL("https://aboutreact.com/");
            }}
          >
            Rate Us
          </Text>
          <Image
            source={{ uri: BASE_PATH + "star_filled.png" }}
            style={styles.iconStyle}
          />
        </View> */}
      </DrawerContentScrollView>
      <Text style={{ fontSize: 16, textAlign: "center", color: "grey" }}>
        www.pillpal.com
      </Text>
    </Screen>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 80,
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default CustomSidebarMenu;
