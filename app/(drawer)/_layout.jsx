import { Drawer } from "expo-router/drawer";
import CustomDrawerContent from "../../components/CustomDrawerContent";
import { primaryColor } from "../../constants";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import HeaderTitle from "../../components/HeaderTitle";
import HeaderRight from "../../components/HeaderRight";

export default function Layout() {
  return (
    <Drawer
      drawerContent={CustomDrawerContent}
      screenOptions={{
        drawerActiveBackgroundColor: primaryColor,
        drawerActiveTintColor: "white",
        headerStyle: {
          backgroundColor: primaryColor,
        },
        headerTintColor: "white",
      }}
    >
      <Drawer.Screen
        name="(tabs)"
        options={{
          title: "Dashboard",
          headerTitleAlign: "center",
          drawerLabel: "Dashboard",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="view-dashboard-outline"
              size={24}
              color={color}
            />
          ),
          drawerLabelStyle: {
            marginLeft: -20,
          },
          headerTitle: (props) => <HeaderTitle />,
          headerRight: (props) => <HeaderRight />,
          headerShown: false,
        }}
      />
    </Drawer>
  );
}
