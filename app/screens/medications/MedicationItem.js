import React from "react";
import { StyleSheet } from "react-native";
import { Image } from "react-native";
import {
  Accordion,
  Card,
  CardItem,
  Thumbnail,
  Left,
  Body,
  View,
  Text,
  Icon,
} from "native-base";
const MedicationItem = ({ item }) => {
  const dataArray = (item) => {
    return [
      { title: "Refill Time", content: item.refillTime },
      { title: "Important Info", content: item.importantInfo },
      { title: "Side Effects", content: item.sideEffects },
    ];
  };

  const renderHeader = (item, expanded) => {
    return (
      <View style={styles.headerStyles}>
        <Text style={styles.titles}> {item.title}</Text>
        {expanded ? (
          <Icon style={styles.icons} name="chevron-up" />
        ) : (
          <Icon style={styles.icons} name="chevron-down" />
        )}
      </View>
    );
  };
  return (
    <Card>
      <CardItem>
        <Left>
          <Thumbnail source={require("../../assets/atorvastatin.jpg")} />
          <Body>
            <Text>{item.name}</Text>
            <Text note>{item.issueDate}</Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem>
        <Body>
          <Image
            source={require("../../assets/atorvastatin.jpg")}
            style={styles.image}
          />
          <Text>{item.usageDescription}</Text>
        </Body>
      </CardItem>
      <CardItem>
        <Accordion
          dataArray={dataArray(item)}
          animation={true}
          icon="chevron-down"
          expandedIcon="chevron-up"
          expanded={[]}
          renderHeader={renderHeader}
          contentStyle={styles.contentStyles}
        />
      </CardItem>
    </Card>
  );
};

const styles = StyleSheet.create({
  image: {
    alignSelf: "center",
    height: 200,
    width: 200,
    flex: 1,
  },
  icons: {
    fontSize: 18,
  },
  headerStyles: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  contentStyles: {
    backgroundColor: "#fff",
  },
});

export default MedicationItem;
