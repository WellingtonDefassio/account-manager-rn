import 'react-native-gesture-handler';
import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator, NativeStackNavigationOptions} from "@react-navigation/native-stack"
import {BottomTabNavigationOptions, createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import ManageExpenses from "./src/screens/ManageExpenses";
import RecentExpense from "./src/screens/RecentExpense";
import AllExpenses from "./src/screens/AllExpenses";
import {StyleSheet} from "react-native";
import {GlobalStyles} from "./src/constants/colors";
import {Ionicons} from "@expo/vector-icons"

const Stack = createNativeStackNavigator()
const BottomTabs = createBottomTabNavigator()

export default function App() {

    function ExpensesOverview() {
        return (
            <BottomTabs.Navigator screenOptions={bottomNavStyles.bottomNavigatorOpt}>
                <BottomTabs.Screen name={"RecentExpenses"} component={RecentExpense} options={bottomNavStyles.recentExpenseScreenOpt}/>
                <BottomTabs.Screen name={"AllExpenses"} component={AllExpenses} options={bottomNavStyles.allExpenseScreenOpt}/>
            </BottomTabs.Navigator>
        )
    }


    return (
        <>
            <StatusBar style="light"/>
            <NavigationContainer>
                <Stack.Navigator >
                    <Stack.Screen name={"ExpensesOverview"} component={ExpensesOverview}
                                  options={stackNavStyles.expenseOverView}/>
                    <Stack.Screen name={"ManageExpense"} component={ManageExpenses}/>
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}


const stackNavStyles: Record<string, NativeStackNavigationOptions> = {
    expenseOverView: {
        headerShown: false
    }
}

const bottomNavStyles: Record<string, BottomTabNavigationOptions> = {
    bottomNavigatorOpt: {
        headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
        headerTintColor: 'white',
        tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500},
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerTitleAlign: "center"
    },
    recentExpenseScreenOpt: {
        title: "Recent Expenses",
        tabBarLabel: "Recent",
        tabBarIcon: ({size, color}) => <Ionicons name={"hourglass"} size={size} color={color}/>
    },
    allExpenseScreenOpt: {
        title: "All Expenses",
        tabBarLabel: "All",
        tabBarIcon: ({size, color}) => <Ionicons name={"calendar"} size={size} color={color}/>
    },

}

