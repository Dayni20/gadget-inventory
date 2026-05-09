import { createStackNavigator } from "@react-navigation/stack";
import { ListScreen } from "../screens/ListScreen";
import { RootStackParamList } from "./typesNavigation";
import DetailScreen from '../screens/DetailScreen';
import { FormScreen } from '../screens/FormScreen';
import { COLORS } from '../styles/appStyles';

const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="List"
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.headerBg },
        headerTintColor: COLORS.white,
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen
        name="List"
        component={ListScreen}
        options={{ title: "My Gadgets" }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{ title: "Gadget Details" }}
      />
      <Stack.Screen
        name="Form"
        component={FormScreen}
        options={({ route }) => ({
          title: route.params?.id ? "Edit Gadget" : "New Gadget",
          headerRight: () => null,
        })}
      />
    </Stack.Navigator>
  );
};
