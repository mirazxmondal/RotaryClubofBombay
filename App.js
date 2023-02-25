import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import FirstScreen from "./src/screens/FirstScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "./src/screens/Register";
import LoginScreen from "./src/screens/LoginScreen";
import TransactionHistory from "./src/screens/Transaction";
import AdminGenerate from "./src/screens/Admin";
import PayMembership from "./src/screens/Payment";
import AdminLogin from "./src/screens/AdminLogin";
import About from "./src/screens/About";
import Donate from "./src/screens/Donate";
import HelpDesk from "./src/screens/HelpDesk";
import PushNotification from "./src/screens/PushNotification";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <PushNotification /> */}
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="First"
          component={FirstScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Register"
          component={Register}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Transaction"
          component={TransactionHistory}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="About"
          component={About}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Helpdesk"
          component={HelpDesk}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Admin"
          component={AdminGenerate}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Payment"
          component={PayMembership}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Donate"
          component={Donate}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="AdminLogin"
          component={AdminLogin}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
});

// Password Supabase: fHOEPPNnOxKp7aVf
