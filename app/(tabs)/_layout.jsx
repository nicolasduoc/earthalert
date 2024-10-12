import { View, Text } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import {icons} from '../../constants'
import { Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="flex items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 84,
          },
        }}
      >
        <Tabs.Screen
          name="Home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.profile}
                color={color}
                name="Profile"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Configuracion"
          options={{
            title: "Configuracion",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.search}
                color={color}
                name="Configuracion"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Mapa"
          options={{
            title: "Mapa",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.eye}
                color={color}
                name="Mapa"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="HistoricoSismos"
          options={{
            title: "HistoricoSismos",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.menu}
                color={color}
                name="Historico Sismos"
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};


export default TabsLayout