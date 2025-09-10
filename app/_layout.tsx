import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import "./global.css";

export default function RootLayout() {
  return <Stack>
    <StatusBar hidden={true} />
    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    <Stack.Screen name="movies/[id]" options={{ headerShown: false }} />
  </Stack>;
}
