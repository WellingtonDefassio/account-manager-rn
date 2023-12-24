import 'react-native-gesture-handler';
import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import ManageExpenses from "./src/screens/ManageExpenses";
import RecentExpense from "./src/screens/RecentExpense";
import AllExpenses from "./src/screens/AllExpenses";

const Stack = createNativeStackNavigator()
const BottomTabs = createBottomTabNavigator()

export default function App() {

    function ExpensesOverview() {
        return (
            <BottomTabs.Navigator>
                <BottomTabs.Screen name={"RecentExpenses"} component={RecentExpense}/>
                <BottomTabs.Screen name={"AllExpenses"} component={AllExpenses}/>
            </BottomTabs.Navigator>
        )
    }


    return (
        <>
            <StatusBar style="auto"/>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name={"ExpensesOverview"} component={ExpensesOverview}/>
                    <Stack.Screen name={"ManageExpense"} component={ManageExpenses}/>
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

