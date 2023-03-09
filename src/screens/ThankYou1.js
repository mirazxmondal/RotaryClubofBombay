import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ThankYou1 = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#3ba0fc",
      }}
    >
      <Text style={{ fontSize: 22, fontWeight: "700", marginBottom: 50 }}>
        Thank You for your payment
      </Text>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: "#FFA500",
          padding: 10,
          borderRadius: 10,
          backgroundColor: "#FFA500",
        }}
        onPress={() => navigation.replace("Transaction")}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "600",
            color: "white",
          }}
        >
          Go to home page
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ThankYou1;

const styles = StyleSheet.create({});
