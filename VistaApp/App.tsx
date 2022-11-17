import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";
import "./IMLocalize"

import AuthContextProvider from "./contexts/AuthContext";

import SignUp from './screens/SignUp';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {

    return (
        <AuthContextProvider>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="SignUp" screenOptions={{ headerShown: false }} >
                        <Stack.Screen name="SignUp" component={SignUp} />
                    </Stack.Navigator>
                </NavigationContainer>
        </AuthContextProvider>
    )
}