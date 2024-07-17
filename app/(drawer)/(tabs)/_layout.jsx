import { AntDesign, Entypo, MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { primaryColor } from "../../../constants";
import { TouchableOpacity, View, Text } from "react-native";
import HeaderTitle from "../../../components/HeaderTitle";
import HeaderRight from "../../../components/HeaderRight";
import HeaderLeft from "../../../components/HeaderLeft";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        // headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: primaryColor,
        tabBarStyle: {
          paddingBottom: 10,
          paddingTop: 10,
          height: 70,
        },
        headerStyle: {
          backgroundColor: primaryColor,
        },
        headerTitleAlign: "center",
        headerTintColor: "white",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
          headerTitle: () => <HeaderTitle />,
          headerRight: () => <HeaderRight />,
          headerLeft: ({tintColor}) => <HeaderLeft color={tintColor} />,
        }}
      />
      <Tabs.Screen
        name="(topTabs)"
        options={{
          tabBarLabel: "Fuel",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="local-gas-station" color={color} size={size} />
          ),
          headerTitle: () => <HeaderTitle title="Fuel Pro"/>,
          headerRight: () => <HeaderRight />,
          headerLeft: ({tintColor}) => <HeaderLeft color={tintColor} />,
        }}
      />
      <Tabs.Screen
        name="quote"
        options={{
          tabBarLabel: "Get Quote",

          tabBarButton: (props) => {
            return (
              <TouchableOpacity
                {...props}
                style={{
                  backgroundColor: primaryColor,
                  width: 60,
                  height: 60,
                  borderRadius: 30,
                  justifyContent: "center",
                  alignItems: "center",
                  bottom: 35,
                  elevation: 5,
                  shadowColor: "black",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                }}
              >
                <AntDesign name="plus" color="white" size={30} />
              </TouchableOpacity>
            );
          },

          headerTitle: () => <HeaderTitle title="Get Quote"/>,
          headerRight: () => <HeaderRight />,
          headerLeft: ({tintColor}) => <HeaderLeft color={tintColor} />,
        }}
      />
      <Tabs.Screen
        name="airpot"
        options={{
          tabBarLabel: "Airpot",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="aircraft" color={color} size={size} />
          ),
          headerTitle: () => <HeaderTitle title="Airport Travel"/>,
          headerRight: () => <HeaderRight />,
          headerLeft: ({tintColor}) => <HeaderLeft color={tintColor} />,
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          tabBarLabel: "More",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="menu" color={color} size={size} />
          ),
          tabBarBadge: 3,
          headerTitle: () => <HeaderTitle title="More"/>,
          headerRight: () => <HeaderRight />,
          headerLeft: ({tintColor}) => <HeaderLeft color={tintColor} />,
        }}
      />
    </Tabs>
  );
}
