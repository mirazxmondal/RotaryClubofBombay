import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "../components/Header";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase";

const LoginScreen = () => {
  const navigator = useNavigation();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigator.replace("Transaction");
      }
    });
  });

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        alert("Login Successful");
        navigator.replace("Transaction");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Unable to Sign in!");
      });
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      behavior="padding"
    >
      <Header />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <TouchableOpacity onPress={handleSignIn} style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigator.replace("Register")}
            style={[styles.button, styles.buttonOutline]}
          >
            <Text style={styles.buttonOutlineText}>Register</Text>
          </TouchableOpacity>
        </View>
        <View style={{ paddingTop: 80 }}>
          <TouchableOpacity
            onPress={() => navigator.replace("AdminLogin")}
            style={[styles.button1, styles.buttonOutline1]}
          >
            <Text style={styles.buttonOutlineText1}>Login As Admin</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    backgroundColor: "white",
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 30,
    marginTop: 25,
    borderWidth: 2,
    borderColor: "#ffdf00",
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 40,
  },
  button: {
    backgroundColor: "#ffdf00",
    width: "50%",
    height: 60,
    padding: 15,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    marginLeft: 15,
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#ffdf00",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "#ffdf00",
    fontWeight: "700",
    fontSize: 16,
  },
  button1: {
    backgroundColor: "#0782F9",
    width: 200,
    height: 60,
    padding: 15,
    borderRadius: 40,
    alignItems: "center",
    // marginBottom: 20,
  },
  buttonOutline1: {
    backgroundColor: "#F79AC0",
    marginTop: 5,
    borderColor: "#F79AC0",
    borderWidth: 2,
  },
  buttonOutlineText1: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
