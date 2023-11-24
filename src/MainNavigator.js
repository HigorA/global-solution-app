import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import TipsScreen from "./screens/TipsScreen";
import MenuScreen from "./screens/MenuScreen";
import ExamsScreen from "./screens/ExamsScreen";
import FamilyHistoric from "./screens/FamilyHistoric";


export default function MainNavigator() {

    const Stack = createNativeStackNavigator();

    return(
        <Stack.Navigator initialRouteName="Family" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={HomeScreen} /> 
            <Stack.Screen name="Login" component={LoginScreen} /> 
            <Stack.Screen name="Register" component={RegisterScreen} /> 
            <Stack.Screen name="Tips" component={TipsScreen} />
            <Stack.Screen name="Menu" component={MenuScreen} />
            <Stack.Screen name="Exam" component={ExamsScreen} />
            <Stack.Screen name="Family" component={FamilyHistoric} />
        </Stack.Navigator>
    )
}