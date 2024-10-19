import { ImageBackground, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomButton } from "../components/CustomButton";
import { ScrollView } from "react-native";

export default function Index() {
  return (
    <SafeAreaView className="h-full w-full bg-white">
      <ScrollView contentContainerStyle={{height: "100%"}}>
        <View className="text-3xl items-center text-center justify-center flex-1">
          <ImageBackground
            source={require("../assets/images/earth alert logo (1).jpg")}
            className="h-full w-full"
          >
            <Text className="text-black text-center text-2xl font-pbold bottom-0 absolute  ">
              Registrarse
            </Text>
            <Text className="text-black text-center align-top text-2xl font-pbold"> 
              Earth Alert
            </Text>
            
    
            <Link
              href="/Home"
              className="text-black text-right absolute right-0 bottom-0 text-2xl font-pbold"
            >
              Iniciar Sesión
            </Link>
          </ImageBackground>
        </View>
      <StatusBar backgroundColor="white" barStyle="light-content" />
      </ScrollView>
    </SafeAreaView>
  );
}
