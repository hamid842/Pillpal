import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { Container, Content, View } from "native-base";

import useApi from "../../hooks/useApi";
import medicinesApi from "../../api/medicines";
import MedicationItem from "./MedicationItem";

const MedicationsScreen = () => {
  const medicineApi = useApi(medicinesApi.getAllMedicines);

  const [medicines, setMedicines] = useState([]);
  const [error, setError] = useState();

  const getAllMedicines = async () => {
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
    getAllMedicines();
  }, []);

  return (
    <Container>
      <Content>
        {medicines.map((item, i) => (
          <MedicationItem key={i} item={item} />
        ))}
      </Content>
    </Container>
  );
};

export default MedicationsScreen;

const styles = StyleSheet.create({});
