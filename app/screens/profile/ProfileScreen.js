import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Container, Content } from "native-base";
import DateTimePicker from "@react-native-community/datetimepicker";
import * as Yup from "yup";

import AppForm from "../../components/Form";
import FormField from "../../components/FormField";
import SubmitButton from "../../components/SubmitButton";
import defaultStyles from "../../config/styles";
import FormPicker from "../../components/FormPicker";
import BloodPickerItem from "../../components/BloodPickerItem";
import ImagePickerExample from "../../components/ImagePicker";

const items = [
  {
    label: "A+",
    value: "A_p",
    icon: "blood-bag",
  },
  {
    label: "A-",
    value: "A_n",
    icon: "blood-bag",
  },
  {
    label: "B+",
    value: "B_p",
    icon: "blood-bag",
  },
  {
    label: "B-",
    value: "B_n",
    icon: "blood-bag",
  },
  {
    label: "O+",
    value: "O_p",
    icon: "blood-bag",
  },
  {
    label: "O-",
    value: "O_n",
    icon: "blood-bag",
  },
  {
    label: "AB+",
    value: "AB_p",
    icon: "blood-bag",
  },
  {
    label: "AB-",
    value: "AB_n",
    icon: "blood-bag",
  },
];

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required().label("First Name"),
  lastName: Yup.string().required().label("Last Name"),
  address: Yup.string().required().label("Address"),
  birthDate: Yup.string().required().label("Birth Date"),
  phoneNumber1: Yup.string().required().label("Phone Number"),
  phoneNumber2: Yup.string().required().label("Cell Phone Number"),
  age: Yup.string().required().label("Age"),
  height: Yup.string().required().label("Height"),
  weight: Yup.string().required().label("Wight"),
  bloodType: Yup.string().required().label("Blood Type"),
});

const ProfileScreen = () => {
  const [show, setShow] = useState(false);
  const [birthDate, setBirthDate] = useState(new Date());

  const handleSubmit = () => {
    console.log("clicked");
  };
  const setShowDate = () => {
    setShow(true);
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || birthDate;
    setShow(Platform.OS === "ios");
    setBirthDate(currentDate);
  };

  return (
    <Container>
      <Content style={styles.container}>
        <AppForm
          initialValues={{
            firstName: "",
            lastName: "",
            address: "",
            birthDate: "",
            phoneNumber1: "",
            phoneNumber2: "",
            age: "",
            height: "",
            weight: "",
            bloodType: "",
            imageUrl: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <FormField
            autoCorrect={false}
            icon="account"
            name="firstName"
            placeholder="First Name"
          />
          <FormField
            autoCorrect={false}
            icon="account"
            name="lastName"
            placeholder="Last Name"
          />
          <FormField
            autoCorrect={false}
            icon="home-city"
            name="address"
            placeholder="Address"
          />
          <FormField
            autoCorrect={false}
            icon="calendar"
            placeholder="Birth Date"
            name="birthDate"
            onFocus={setShowDate}
          />
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              dateFormat="shortdate"
              mode={"date"}
              is24Hour={true}
              display="default"
              value={birthDate}
              onChange={onChange}
            />
          )}
          <FormField
            autoCorrect={false}
            icon="phone"
            name="phoneNumber1"
            placeholder="Phone Number"
          />
          <FormField
            autoCorrect={false}
            icon="cellphone"
            name="phoneNumber2"
            placeholder="Cell Phone Number"
          />
          <FormField
            autoCorrect={false}
            icon="account-settings"
            name="age"
            placeholder="Age"
          />
          <FormField
            autoCorrect={false}
            icon="human-male-height"
            name="height"
            placeholder="Height"
          />
          <FormField
            autoCorrect={false}
            icon="weight-kilogram"
            name="weight"
            placeholder="Weight"
          />

          <FormPicker
            items={items}
            name="bloodType"
            numberOfColumns={3}
            PickerItemComponent={BloodPickerItem}
            placeholder="Blood Type"
          />
          <ImagePickerExample />
          <SubmitButton title="Submit" />
        </AppForm>
      </Content>
    </Container>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 10,
  },
  inputs: {
    marginTop: 10,
  },
  submitBtn: {
    marginTop: 10,
  },
  picker: {
    padding: 0,
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    borderColor: defaultStyles.colors.light,
  },
  dropdown: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 20,
    marginVertical: 8,
  },
  pickerPlaceholder: {
    fontSize: 18,
    color: defaultStyles.colors.medium,
  },
});
