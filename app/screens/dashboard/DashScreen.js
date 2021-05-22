import React from "react";
import { StyleSheet } from "react-native";
import { Container, Content } from "native-base";

import colors from "../../config/colors";
import CurrentMed from "./CurrentMed";

const DashScreen = () => {
  return (
    <Container>
      <Content contentContainerStyle={styles.dashContainer}>
        <CurrentMed />
      </Content>
    </Container>
  );
};

export default DashScreen;

const styles = StyleSheet.create({
  dashContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.mainGrey,
  },
});
