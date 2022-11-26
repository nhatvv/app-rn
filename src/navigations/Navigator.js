import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import {Image} from 'react-native'
import { HomeScreen, MenuScreen } from '../screens';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
    return(
        <Tab.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel:"Home",
                    tabBarIcon:({color, size}) => (
                        <Image
                            source={require("../images/8.png")}
                            style={{ height:20, width:20 }}
                        />
                    )
                }}
            />
             <Tab.Screen
                name="Menu"
                component={MenuScreen}
                options={{
                    tabBarLabel:"Cá nhân",
                    tabBarIcon:({color, size}) => (
                        // <MaterialCommunityIcons
                        // name="home-outline"
                        // color={color}
                        // size={size}
                        //      />
                        <Image
                            source={require("../images/8.png")}
                            style={{ height:20, width:20 }}
                        />
                    )
                }}
            />
            
        </Tab.Navigator>
    );
};


const Stack = createStackNavigator();
const screenOptionStyle = {
    headerShown: false
}

const Navigator = (props) => {
    const extraData = props.extraData
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
           {/* <Stack.Screen name="Home">
            {props => <HomeScreen  {...props}component={BottomTabNavigator}/>}
          </Stack.Screen> */}
          {/* extraData={extraData}  */}
          <Stack.Screen name='Home' component={BottomTabNavigator}/>
        </Stack.Navigator>
    )
}

export default Navigator;