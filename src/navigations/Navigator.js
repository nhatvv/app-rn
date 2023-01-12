import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import {Image} from 'react-native'
import { HomeScreen, MenuScreen, LimitedScreen } from '../screens';
import {AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const BottomTabNavigator = (props) => {
    
    return(
        <Tab.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen} initialParams={{ fullName: props.route.params.fullName }}
                options={{
                    tabBarLabel:"Home",
                    tabBarIcon:({color, size}) => (
                        <AntDesign  name="home"
                        color={color}
                        size={size} />
                    )
                }}
            />
            <Tab.Screen
                name="Store"
                component={LimitedScreen} 
                options={{
                    tabBarLabel:"Sự kiện",
                    tabBarIcon:({color, size}) => (
                        <AntDesign  name="CodeSandbox"
                        color={color}
                        size={size} />
                    )
                }}
            />
             <Tab.Screen
                name="Menu"
                component={MenuScreen} initialParams={{ fullName: props.route.params.fullName, age: props.route.params.age , sex: props.route.params.sex}}
                options={{
                    tabBarLabel:"Quản lý",
                    tabBarIcon:({color, size}) => (
                        <AntDesign  name="menufold"
                        color={color}
                        size={size} />
                
                    
                        // <Image
                        //     source={require("../images/8.png")}
                        //     style={{ height:20, width:20 }}
                        // />
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
    const fullName = props.extraData.fullName
    const sex = props.extraData.sex
    const age = props.extraData.age
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
           {/* <Stack.Screen name="Home">
            {props => <HomeScreen  {...props}component={BottomTabNavigator}/>}
          </Stack.Screen> */}
          {/* extraData={extraData}  */}
          <Stack.Screen name='HomeMain' component={BottomTabNavigator} initialParams={{ fullName: fullName, sex: sex, age: age }}/>
    
        </Stack.Navigator>
    )
}

export default Navigator;