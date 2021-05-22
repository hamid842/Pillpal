import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import ErrorMessage from "../components/ErrorMessage";
import Form from "../components/Form";
import FormField from "../components/FormField";
import SubmitButton from "../components/SubmitButton";
import usersApi from "../api/users";
import routes from "../navigation/routes";
// import authApi from "../api/auth";
// import useAuth from "../auth/useAuth";
import useApi from "../hooks/useApi";
import ActivityIndicator from "../components/ActivityIndicator";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required().label("First Name"),
  lastName: Yup.string().required().label("Last Name"),
  username: Yup.string().required().label("Username"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(8).label("Password"),
});

const RegisterScreen = ({ navigation }) => {
  const registerApi = useApi(usersApi.register);
  // const loginApi = useApi(authApi.login);
  // const auth = useAuth();
  const [error, setError] = useState();

  const handleSubmit = async (userInfo) => {
    const result = await registerApi.request(userInfo);
    if (!result.ok) {
      if (result.data) setError(result.data.details);
      else {
        setError("An unexpected error occurred.");
        console.log(result);
      }
      return;
    } else {
      navigation.navigate(routes.LOGIN);
    }

    // const { data: id_token } = await loginApi.request(
    //   userInfo.username,
    //   userInfo.password
    // );
    // auth.logIn(id_token);
  };

  return (
    <>
      <ActivityIndicator visible={registerApi.loading} />
      <Screen style={styles.container}>
        <Form
          initialValues={{
            activated: true,
            login: true,
            firstName: "",
            lastName: "",
            email: "",
            username: "",
            password: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage error={error} visible={error} />
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
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            textContentType="emailAddress"
          />
          <FormField
            autoCorrect={false}
            icon="account-cog"
            name="username"
            placeholder="Username"
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
          />
          <SubmitButton title="Register" />
        </Form>
      </Screen>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default RegisterScreen;
