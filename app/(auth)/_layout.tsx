import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}