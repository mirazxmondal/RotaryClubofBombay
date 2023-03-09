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
  const [state, setState] = useState("cards");
  const [state1, setState1] = useState("cards");
  const [state2, setState2] = useState("cards");
  const [state3, setState3] = useState("cards");
  const [state4, setState4] = useState("cards");
  const [state5, setState5] = useState("cards");
  const [state6, setState6] = useState("cards");
  const [state7, setState7] = useState("cards");
  const [state8, setState8] = useState("cards");
  const [state9, setState9] = useState("cards");
  const [state10, setState10] = useState("cards");
  const [state11, setState11] = useState("cards");
  const [state12, setState12] = useState("cards");
  const [state13, setState13] = useState("cards");
  const [state14, setState14] = useState("cards");
  return (
    <KeyboardAwareScrollView
      style={{ backgroundColor: "white", height: "100%" }}
    >
      <View style={{ marginBottom: 20, left: 12, top: 55, zIndex: 10 }}>
        <Icon
          name="leftcircle"
          size={30}
          color={"#FFA500"}
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
          style={{ height: 300, width: 300, marginTop: 30 }}
          source={require("../../assets/Qr.png")}
        />
      </View>
      <View style={{ alignItems: "center", marginTop: 20 }}>
        {/* <Text style={{ color: "black" }}>Donation Catagories 👇</Text>
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
        /> */}
        {/* {selected && <Text>Pay As You Wish! 👇</Text>} */}
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            marginVertical: 5,
          }}
        >
          <View style={styles[state]}>
            <Text
              style={{
                marginBottom: 30,
                fontSize: 16,
                marginTop: 25,
                fontWeight: "700",
              }}
            >
              {" "}
              EDUCATION
            </Text>
            <TouchableOpacity
              style={{
                paddingHorizontal: 14,
                paddingVertical: 4,
                backgroundColor: "#FFA500",
                borderRadius: 8,
              }}
              onPress={() => setState("cardsActive")}
            >
              <Text style={{ fontWeight: "600", color: "white" }}>Select</Text>
            </TouchableOpacity>
          </View>
          <View style={styles[state1]}>
            <Text
              style={{
                marginBottom: 30,
                fontSize: 16,
                marginTop: 25,
                fontWeight: "700",
              }}
            >
              {" "}
              Bhavishya
            </Text>
            <TouchableOpacity
              style={{
                paddingHorizontal: 14,
                paddingVertical: 4,
                backgroundColor: "#FFA500",
                borderRadius: 8,
              }}
              onPress={() => setState1("cardsActive")}
            >
              <Text style={{ fontWeight: "600", color: "white" }}>Select</Text>
            </TouchableOpacity>
          </View>
          <View style={styles[state2]}>
            <Text
              style={{
                marginBottom: 30,
                fontSize: 16,
                marginTop: 25,
                fontWeight: "700",
              }}
            >
              {" "}
              Lighthouse
            </Text>
            <TouchableOpacity
              style={{
                paddingHorizontal: 14,
                paddingVertical: 4,
                backgroundColor: "#FFA500",
                borderRadius: 8,
              }}
              onPress={() => setState2("cardsActive")}
            >
              <Text style={{ fontWeight: "600", color: "white" }}>Select</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            marginVertical: 5,
          }}
        >
          <View style={styles[state3]}>
            <Text
              style={{
                marginBottom: 30,
                fontSize: 13,
                marginTop: 25,
                fontWeight: "800",
              }}
            >
              {" "}
              Scholarships
            </Text>
            <TouchableOpacity
              style={{
                paddingHorizontal: 14,
                paddingVertical: 4,
                backgroundColor: "#FFA500",
                borderRadius: 8,
              }}
              onPress={() => setState3("cardsActive")}
            >
              <Text style={{ fontWeight: "600", color: "white" }}>Select</Text>
            </TouchableOpacity>
          </View>
          <View style={styles[state4]}>
            <Text
              style={{
                marginBottom: 30,
                fontSize: 16,
                marginTop: 25,
                fontWeight: "700",
              }}
            >
              {" "}
              Training
            </Text>
            <TouchableOpacity
              style={{
                paddingHorizontal: 14,
                paddingVertical: 4,
                backgroundColor: "#FFA500",
                borderRadius: 8,
              }}
              onPress={() => setState4("cardsActive")}
            >
              <Text style={{ fontWeight: "600", color: "white" }}>Select</Text>
            </TouchableOpacity>
          </View>
          <View style={styles[state5]}>
            <Text
              style={{
                marginBottom: 30,
                fontSize: 16,
                marginTop: 25,
                fontWeight: "700",
              }}
            >
              {" "}
              Welfare
            </Text>
            <TouchableOpacity
              style={{
                paddingHorizontal: 14,
                paddingVertical: 4,
                backgroundColor: "#FFA500",
                borderRadius: 8,
              }}
              onPress={() => setState5("cardsActive")}
            >
              <Text style={{ fontWeight: "600", color: "white" }}>Select</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            marginVertical: 5,
          }}
        >
          <View style={styles[state6]}>
            <Text
              style={{
                marginBottom: 30,
                fontSize: 16,
                marginTop: 25,
                fontWeight: "700",
              }}
            >
              {" "}
              Covid 19
            </Text>
            <TouchableOpacity
              style={{
                paddingHorizontal: 14,
                paddingVertical: 4,
                backgroundColor: "#FFA500",
                borderRadius: 8,
              }}
              onPress={() => setState6("cardsActive")}
            >
              <Text style={{ fontWeight: "600", color: "white" }}>Select</Text>
            </TouchableOpacity>
          </View>
          <View style={styles[state7]}>
            <Text
              style={{
                marginBottom: 30,
                fontSize: 16,
                marginTop: 25,
                fontWeight: "700",
              }}
            >
              {" "}
              Yoga
            </Text>
            <TouchableOpacity
              style={{
                paddingHorizontal: 14,
                paddingVertical: 4,
                backgroundColor: "#FFA500",
                borderRadius: 8,
              }}
              onPress={() => setState7("cardsActive")}
            >
              <Text style={{ fontWeight: "600", color: "white" }}>Select</Text>
            </TouchableOpacity>
          </View>
          <View style={styles[state8]}>
            <Text
              style={{
                marginBottom: 30,
                fontSize: 16,
                marginTop: 25,
                fontWeight: "700",
              }}
            >
              {" "}
              Cancer
            </Text>
            <TouchableOpacity
              style={{
                paddingHorizontal: 14,
                paddingVertical: 4,
                backgroundColor: "#FFA500",
                borderRadius: 8,
              }}
              onPress={() => setState8("cardsActive")}
            >
              <Text style={{ fontWeight: "600", color: "white" }}>Select</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            marginVertical: 5,
          }}
        >
          <View style={styles[state9]}>
            <Text
              style={{
                marginBottom: 30,
                fontSize: 16,
                marginTop: 25,
                fontWeight: "700",
              }}
            >
              {" "}
              RCB Clinic
            </Text>
            <TouchableOpacity
              style={{
                paddingHorizontal: 14,
                paddingVertical: 4,
                backgroundColor: "#FFA500",
                borderRadius: 8,
              }}
              onPress={() => setState9("cardsActive")}
            >
              <Text style={{ fontWeight: "600", color: "white" }}>Select</Text>
            </TouchableOpacity>
          </View>
          <View style={styles[state10]}>
            <Text
              style={{
                marginBottom: 30,
                fontSize: 16,
                marginTop: 25,
                fontWeight: "700",
              }}
            >
              {" "}
              Nature
            </Text>
            <TouchableOpacity
              style={{
                paddingHorizontal: 14,
                paddingVertical: 4,
                backgroundColor: "#FFA500",
                borderRadius: 8,
              }}
              onPress={() => setState10("cardsActive")}
            >
              <Text style={{ fontWeight: "600", color: "white" }}>Select</Text>
            </TouchableOpacity>
          </View>
          <View style={styles[state11]}>
            <Text
              style={{
                marginBottom: 30,
                fontSize: 16,
                marginTop: 25,
                fontWeight: "700",
              }}
            >
              {" "}
              Legal Aid
            </Text>
            <TouchableOpacity
              style={{
                paddingHorizontal: 14,
                paddingVertical: 4,
                backgroundColor: "#FFA500",
                borderRadius: 8,
              }}
              onPress={() => setState11("cardsActive")}
            >
              <Text style={{ fontWeight: "600", color: "white" }}>Select</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            marginVertical: 5,
          }}
        >
          <View style={styles[state12]}>
            <Text
              style={{
                marginBottom: 30,
                fontSize: 16,
                marginTop: 25,
                fontWeight: "700",
              }}
            >
              {" "}
              Animal
            </Text>
            <TouchableOpacity
              style={{
                paddingHorizontal: 14,
                paddingVertical: 4,
                backgroundColor: "#FFA500",
                borderRadius: 8,
              }}
              onPress={() => setState12("cardsActive")}
            >
              <Text style={{ fontWeight: "600", color: "white" }}>Select</Text>
            </TouchableOpacity>
          </View>
          <View style={styles[state13]}>
            <Text
              style={{
                marginBottom: 30,
                fontSize: 16,
                marginTop: 25,
                fontWeight: "700",
              }}
            >
              {" "}
              Nutrition
            </Text>
            <TouchableOpacity
              style={{
                paddingHorizontal: 14,
                paddingVertical: 4,
                backgroundColor: "#FFA500",
                borderRadius: 8,
              }}
              onPress={() => setState13("cardsActive")}
            >
              <Text style={{ fontWeight: "600", color: "white" }}>Select</Text>
            </TouchableOpacity>
          </View>
          <View style={styles[state14]}>
            <Text
              style={{
                marginBottom: 30,
                fontSize: 16,
                marginTop: 25,
                fontWeight: "700",
              }}
            >
              {" "}
              YEP
            </Text>
            <TouchableOpacity
              style={{
                paddingHorizontal: 14,
                paddingVertical: 4,
                backgroundColor: "#FFA500",
                borderRadius: 8,
              }}
              onPress={() => setState14("cardsActive")}
            >
              <Text style={{ fontWeight: "600", color: "white" }}>Select</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TextInput
          style={{
            borderColor: "#FFA500",
            borderWidth: 3,
            width: "53%",
            padding: 8,
            paddingHorizontal: 20,
            borderRadius: 15,
          }}
          keyboardType="numeric"
          placeholder="Enter a Amount"
        ></TextInput>
      </View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.replace("ThankYouPage")}
        >
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
  cards: {
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 25,
    padding: 20,
    width: "30%",
    borderRadius: 10,
    alignItems: "center",
    marginRight: 2,
  },
  cardsActive: {
    borderColor: "blue",
    borderWidth: 2,
    marginBottom: 25,
    padding: 20,
    width: "30%",
    borderRadius: 10,
    alignItems: "center",
    marginRight: 2,
  },
});
