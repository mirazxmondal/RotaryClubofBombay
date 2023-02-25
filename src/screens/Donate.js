import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import { SelectList } from "react-native-dropdown-select-list";

const Donate = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState("");
  const [showPayment, setShowPayment] = useState(false);
  const data = [
    { key: "1", value: "Bhavishya Yaan" },
    { key: "2", value: "Lighthouse" },
    { key: "3", value: "Scholarships" },
    { key: "4", value: "Vocational Training" },
    { key: "5", value: "The Anusuya Devi Taparia Junior College" },
    { key: "6", value: "Child Welfare Committee" },
    { key: "7", value: "Echo Program" },
    { key: "8", value: "Covid 19" },
    { key: "9", value: "Phiroze Ratanshah Vakil Eye Centre" },
    { key: "10", value: "Ajit Deshpande Medical Centre" },
    { key: "11", value: "Ananda Yaan" },
    { key: "12", value: "Animal Welfare" },
  ];
  return (
    <KeyboardAwareScrollView
      style={{ backgroundColor: "white", height: "100%" }}
    >
      <View style={{ marginBottom: 20, left: 12, top: 55, zIndex: 10 }}>
        <Icon
          name="arrowleft"
          size={30}
          color={"#ffdf00"}
          onPress={() => navigation.replace("Transaction")}
        />
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
          padding: 30,
        }}
      >
        <Text
          style={{
            top: 1,
            position: "absolute",
            fontSize: 32,
            color: "#FFA500",
          }}
        >
          DONATE
        </Text>
        <Image
          style={{ height: 200, width: 200, marginTop: 30 }}
          source={require("../../assets/qr.png")}
        />
      </View>
      <View style={{ alignItems: "center", marginTop: 20 }}>
        <Text style={{ color: "black" }}>Donation Catagories 👇</Text>
        <SelectList
          data={data}
          setSelected={(val) => setSelected(val)}
          boxStyles={{
            borderColor: "#ffdf00",
            borderWidth: 2,
            width: "40%",
            padding: 5,
            borderRadius: 15,
          }}
          placeholder={"Select Scheme"}
          save="value"
          onSelect={() => console.log(selected)}
        />
        {selected && <Text>Pay As You Wish! 👇</Text>}
        {selected && (
          <TextInput
            style={{
              borderColor: "#ffdf00",
              borderWidth: 3,
              width: "53%",
              padding: 5,
              borderRadius: 15,
            }}
            keyboardType="numeric"
          ></TextInput>
        )}
      </View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Paid</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Donate;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FFA500",
    width: "40%",
    // height: "100",
    padding: 15,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    // position: "absolute",
    bottom: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
    // fontFamily: "Montserrat-Medium",
  },
});
