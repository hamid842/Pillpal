import React, { useState, useEffect } from "react";
import { Dimensions, StyleSheet, Image } from "react-native";
import {
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Icon,
  Accordion,
  View,
} from "native-base";

import useApi from "../../hooks/useApi";
import medicinesApi from "../../api/medicines";

const CurrentMed = () => {
  const medicineApi = useApi(medicinesApi.getCurrentMedicines);

  const [medicines, setMedicines] = useState([]);
  const [error, setError] = useState();

  const getMedicines = async () => {
    const result = await medicineApi.request();
    if (!result.ok) {
      if (result.data) setError(result.data.details);
      else {
        setError("An unexpected error occurred.");
        console.log(result);
      }
      return;
    } else {
      setMedicines(result.data);
    }
  };

  useEffect(() => {
    getMedicines();
  }, []);

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
    <View style={styles.container}>
      <DeckSwiper
        dataSource={medicines}
        renderItem={(item) => (
          <Card style={{ elevation: 3 }} key={item.id}>
            <CardItem>
              <Left>
                <Thumbnail source={require("../../assets/atorvastatin.jpg")} />
                <Body>
                  <Text>{item.name}</Text>
                  <Text note>{item.usageDescription}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                style={{ height: 300, flex: 1 }}
                source={require("../../assets/atorvastatin.jpg")}
              />
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
        )}
      />
    </View>
  );
};

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    padding: 5,
  },
  titles: {
    fontWeight: "bold",
    fontSize: 15,
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

export default CurrentMed;
