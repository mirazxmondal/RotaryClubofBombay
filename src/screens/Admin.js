import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Button,
  View,
  Text,
  TouchableOpacity,
  Linking,
} from "react-native";

import * as XLSX from "xlsx";
import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";
import { useNavigation } from "@react-navigation/native";
import { auth, db } from "../../firebase/firebase";
import { collection, doc, getDoc, getDocs, query } from "firebase/firestore";
import firestore from "@react-native-firebase/firestore";
import { useEffect, useState } from "react";

export default function AdminGenerate() {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({});
  // useEffect(() => {
  //   const getData = async () => {
  //    const docRef = collection(db, 'users');
  //    const q = query(docRef, where("Name", "!=", null));
  //    const querySnap = await getDocs(q);
  //    let data = [];
  //    querySnap.forEach((doc) => {
  //     data.push({
  //       id:doc.id,
  //       data:doc.data()
  //     });
  //     setFormData(data);
  //     console.log(formData);
  //    })
  //   getData();
  // },[formData]);

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };

  const generateExcel = () => {
    let wb = XLSX.utils.book_new();
    let ws = XLSX.utils.aoa_to_sheet([
      ["Email", "Password", "History"],
      ["test1@gmail.com", "213456"],
      ["test2@gmail.com", "231456"],
    ]);

    XLSX.utils.book_append_sheet(wb, ws, "MyFirstSheet", true);

    const base64 = XLSX.write(wb, { type: "base64" });
    const filename = FileSystem.documentDirectory + "MyExcel.xlsx";
    FileSystem.writeAsStringAsync(filename, base64, {
      encoding: FileSystem.EncodingType.Base64,
    }).then(() => {
      Sharing.shareAsync(filename);
    });
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "800",
          position: "absolute",
          top: 90,
        }}
      >
        WELCOME ADMIN
      </Text>
      <Text style={{ position: "absolute", top: 300, fontSize: 17 }}>
        Click here to generate Excel 👇
      </Text>
      <Button
        title="Generate Excel"
        onPress={() =>
          Linking.openURL("https://rotary-clubof-bombay-admin-9bkimywnb-miraz-mondal.vercel.app/sign-in")
        }
      />
      <StatusBar style="auto" />
      <View
        style={{
          backgroundColor: "yellow",
          padding: 20,
          borderRadius: 50,
          // marginTop: 80,
          position: "absolute",
          bottom: 50,
          width: 200,
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={handleSignOut}>
          <Text>Sign out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
