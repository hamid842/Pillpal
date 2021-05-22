import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

import navigationTheme from "./app/navigation/navigationTheme";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AppNavigator from "./app/navigation/AppNavigator";
import { navigationRef } from "./app/navigation/rootNavigation";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";

const App = () => {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    });
  };

  if (!isReady) {
    return (
      <AppLoading
        startAsync={restoreUser}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <StatusBar style="auto" />
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        <AppNavigator />
        {/* {user ? <AppNavigator /> : <AuthNavigator />} */}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
