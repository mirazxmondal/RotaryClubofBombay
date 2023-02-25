import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { auth, db } from "../../firebase/firebase";
import { addDoc, collection } from "firebase/firestore";
// import { async } from "@firebase/util";

const Register = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [password, setPassword] = useState(null);

  const saveData = async () => {
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "users"), {
      Rotary_Id: auth.currentUser.uid,
      Name: name,
      Email: email,
      Phone: phone,
      Password: password,
    });
    console.log("Document written with ID: ", docRef.id);
  };

  const navigator = useNavigation();

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        alert("Registered Successfully");
        saveData();
        navigator.replace("Login");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Unable to Sign up! Please try again");
        // ..
      });
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        paddingTop: 50,
        paddingBottom: 70,
      }}
    >
      <View>
        <View style={{ position: "absolute", top: -20, right: 200 }}>
          <Icon
            color={"#f4c430"}
            size={30}
            name={"arrowleft"}
            onPress={() => navigator.replace("Login")}
          />
        </View>
        <Text style={{ fontSize: 20, fontWeight: "800", color: "#f4c430" }}>
          Sign up
        </Text>
      </View>
      <Image
        style={{ height: 200, width: 220 }}
        source={require("../../assets/SignUp.jpg")}
      />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={(text) => setName(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Phone"
          value={phone}
          onChangeText={(text) => setPhone(text)}
          keyboardType="numeric"
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
      <View style={{ paddingTop: 50, paddingBottom: 30 }}>
        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button1, styles.buttonOutline1]}
        >
          <Text style={styles.buttonOutlineText1}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Register;

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
    borderColor: "yellow",
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
    backgroundColor: "#f4c430",
    marginTop: 5,
    borderColor: "#e1ad01",
    borderWidth: 3,
  },
  buttonOutlineText1: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
