import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import TipsScreen from "./screens/TipsScreen";
import MenuScreen from "./screens/MenuScreen";


export default function MainNavigator() {

    const Stack = createNativeStackNavigator();

    return(
        <Stack.Navigator initialRouteName="Menu" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={HomeScreen} /> 
            <Stack.Screen name="Login" component={LoginScreen} /> 
            <Stack.Screen name="Register" component={RegisterScreen} /> 
            <Stack.Screen name="Tips" component={TipsScreen} />
            <Stack.Screen name="Menu" component={MenuScreen} />
        </Stack.Navigator>
    )
}