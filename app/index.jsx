import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View className="text-3xl items-center text-center justify-center flex-1"
    >
      <Text className="text-3xl font-pblack">Edit app/index.tsx to que bueno this screen.</Text>
      <StatusBar />
      <Link href="/Home" className="text-3xl">Ir a perfil</Link>
    </View>
  );
}