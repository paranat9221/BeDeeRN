import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import MainScreen from '../screens/MainScreen';
import LeaderBoardScreen from '../screens/LeaderBoardScreen';
import ResultScreen from '../screens/Result';

export type RootStackParamList = {
    "Home": undefined,
    "Main": undefined,
    "LeaderBoard": undefined,
    "Result": { quizzes: Quiz[]; selectedList: Choice[] };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
                <Stack.Screen name={"Home"} component={HomeScreen} />
                <Stack.Screen name={"Main"} component={MainScreen} />
                <Stack.Screen name={"LeaderBoard"} component={LeaderBoardScreen} />
                <Stack.Screen name={"Result"} component={ResultScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;