import React, {
    useState,
    useEffect,
    useLayoutEffect,
    useCallback
  } from 'react';
  import { TouchableOpacity, Text } from 'react-native';
  import { GiftedChat } from 'react-native-gifted-chat';
  import {
    collection,
    addDoc,
    orderBy,
    query,
    onSnapshot
  } from 'firebase/firestore';
//   import { signOut } from 'firebase/auth';
//   import { auth, database } from '../../firebase/config';
  import * as firebase from 'firebase';
  import { useNavigation } from '@react-navigation/native';
  import { AntDesign } from '@expo/vector-icons';
import { render } from 'react-dom';
//   import colors from '../colors';


  export default function ChatScreen(props) {

    const [messages, setMessages] = useState([]);
    const navigation = useNavigation();
    const userID = props.extraData.id
    const userAuth = firebase.auth().currentUser;
    const collectionRef = firebase.firestore().collection('chats');
    console.log("userAuth",userAuth);
  const onSignOut = () => {
    //   signOut(auth).catch(error => console.log('Error logging out: ', error));
    };

    useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <TouchableOpacity
              style={{
                marginRight: 10
              }}
              onPress={onSignOut}
            >
              <AntDesign name="logout" size={50} color={'red'} style={{marginRight: 0}}/>
            </TouchableOpacity>
          )
        });
      }, [navigation]);

    useLayoutEffect(() => {
    const q = collectionRef.orderBy('createdAt', 'desc')
    const unsubscribe = collectionRef.orderBy('createdAt', 'desc').onSnapshot(
        q, querySnapshot => {
            console.log('querySnapshot unsusbscribe');
            setMessages(
                querySnapshot.docs.map(doc => (
                    console.log("doc",doc.data()),
                {
                _id: doc.data()._id,
                createdAt: doc.data().createdAt.toDate(),
                text: doc.data().text,
                user: doc.data().user
                }
            ))
            );
        },
        error => {
        }
    )

    return unsubscribe;
      }, []);

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages =>
          GiftedChat.append(previousMessages, messages)
        );
        const { _id, createdAt, text, user } = messages[0];    
        collectionRef.add({
          _id,
          createdAt,
          text,
          user
        });
      }, []);

      return (
        <GiftedChat
          messages={messages}
          showAvatarForEveryMessage={false}
          showUserAvatar={false}
          onSend={messages => onSend(messages)}
          messagesContainerStyle={{
            backgroundColor: '#fff'
          }}
          textInputStyle={{
            backgroundColor: '#fff',
            borderRadius: 20,
          }}
          renderUsernameOnMessage={true}
          user={{
            _id: userAuth?.email,
            name: userAuth?.email,
            avatar: require("../../../assets/Profile.png"),
          }}
        />
        // https://i.pravatar.cc/368
      );
}
