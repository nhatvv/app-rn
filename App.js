import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, HomeScreen, RegistrationScreen, MenuScreen, MoneyIntoWallet, NoteDetail, ProfileScreen } from './src/screens'
import {decode, encode} from 'base-64'
import { firebase } from './src/firebase/config';
import Navigator from './src/navigations/Navigator';
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }

const Stack = createStackNavigator();

export default function App() {

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const usersRef = firebase.firestore().collection('users');
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const extraData = document.data()
            setLoading(false)
            setUser(extraData)
          })
          .catch((error) => {
            setLoading(false)
          });
      } else {
        setLoading(false)
      }
    });
  }, []);

  if (loading) {
    return (
      <></>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      { user ? (
          <Stack.Screen name="Navigator">
            {props => 
            <Navigator {...props} extraData={user} />
            }
          </Stack.Screen>

           ) : (
              <>   
              </>
            )}
            { user ? (
          <Stack.Screen name="Home">
            {props => 
            <HomeScreen {...props} extraData={user} />
            }
          </Stack.Screen>

           ) : (
              <>   
              </>
            )}
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Registration" component={RegistrationScreen} />
            {/* <Stack.Screen name="Navigator" component={Navigator} /> */}
            
            {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
            <Stack.Screen name="MoneyIntoWallet" component={MoneyIntoWallet} />
            { user ? (
          
          <Stack.Screen name="ProfileScreen">
            {props => <ProfileScreen {...props} extraData={user} />}
          </Stack.Screen>
          
          ) : (
            <>   
            </>
          )}
           
            { user ? (
          <Stack.Screen name="MenuScreen">
            
            {dataMenu => 
            <MenuScreen {...dataMenu} userMenu={user} />
            }
          </Stack.Screen>

           ) : (
              <>   
              </>
            )}

            { user ? (
          
            <Stack.Screen name="NoteDetail">
              {props => <NoteDetail {...props} extraData={user} />}
            </Stack.Screen>
            
            ) : (
              <>   
              </>
            )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}