import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, HomeScreen, RegistrationScreen, MenuScreen, MoneyIntoWallet, NoteDetail, ProfileScreen, ToDoListScreen,CalculatorScreen,QuizScreen, 
    CreateQuizScreen,AddQuestionScreen,PlayQuizScreen,ForgotPasswordScreen, ChangePasswordScreen,ChangeEmailScreen, StopwatchScreen } from './src/screens'
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
            <Stack.Screen name="CalculatorScreen" component={CalculatorScreen} />
            <Stack.Screen name="AddQuestionScreen" component={AddQuestionScreen} />
            <Stack.Screen name="PlayQuizScreen" component={PlayQuizScreen} />
            <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
            <Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} />
            <Stack.Screen name="ChangeEmailScreen" component={ChangeEmailScreen} />
            <Stack.Screen name="StopwatchScreen" component={StopwatchScreen} />
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

          { user ? (
          
          <Stack.Screen name="ToDoListScreen">
            {props => <ToDoListScreen {...props} extraData={user} />}
          </Stack.Screen>
          
          ) : (
            <>   
            </>
          )}

          { user ? (
          
          <Stack.Screen name="QuizScreen">
            {props => <QuizScreen {...props} extraData={user} />}
          </Stack.Screen>
          
          ) : (
            <>   
            </>
          )}

          { user ? (
          
          <Stack.Screen name="CreateQuizScreen">
            {props => <CreateQuizScreen {...props} extraData={user} />}
          </Stack.Screen>
          
          ) : (
            <>   
            </>
          )}

          {/* { user ? (
          
          <Stack.Screen name="AddQuestionScreen">
            {props => <AddQuestionScreen {...props} extraData={user} />}
          </Stack.Screen>
          
          ) : (
            <>   
            </>
          )} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}