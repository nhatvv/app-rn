import React, { useState,useEffect } from 'react'
import { Alert, Image, Text, TextInput, TouchableOpacity, View ,ToastAndroid} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { firebase } from '../../firebase/config'
// import await from 'await';

export default function LoginScreen({navigation}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        if (errorMessage !== "") {
          Alert.alert("Thông báo", errorMessage);
        }
      }, [errorMessage]);

    const onFooterLinkPress = () => {
        navigation.navigate('Registration')
    }
    // let jwtToken = firebase.auth().onAuthStateChanged(function(user) {
    //     if (user) {
    //       user.getIdToken().then(function(idToken) {  
    //           alert(idToken); 
    //           return idToken;
    //       });
    //     }
    // });


    const onLoginPress = () => {
        if (email === "" || password === "") {
            // setErrorMessage("Không thể để trống email hoặc password!");
            ToastAndroid.show('Không thể để trống email hoặc password !', ToastAndroid.SHORT);
          } else {
            setIsLoading(true);
         
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const usersRef = firebase.firestore().collection('users')
                usersRef
                     .doc(uid)
                     .get()
                     .then(firestoreDocument => {
                         if (!firestoreDocument.exists) {
                            //  alert("Người dùng không tồn tại!")
                             ToastAndroid.show('Người dùng không tồn tại !', ToastAndroid.SHORT);
                             return;
                          }
                          const user = firestoreDocument.data()
                          ToastAndroid.show('Đăng nhập thành công !', ToastAndroid.SHORT);
                          navigation.navigate('Navigator',{user})
 
                     })
                    .catch(error => {
                        console.log(error);
                        // alert("Thông báo", error);
                    });
            })
            .catch(error => {
                if (error.code === "auth/email-already-in-use") {
                    // setErrorMessage("Tài khoản đã được sử dụng.");
                    ToastAndroid.show('Tài khoản đã được sử dụng !', ToastAndroid.SHORT);
                  } else if (error.code === "auth/invalid-email") {
                    // setErrorMessage("Email không hợp lệ!");
                    ToastAndroid.show('Email không hợp lệ !', ToastAndroid.SHORT);
                  } else if (
                    error.code === "auth/wrong-password" ||
                    error.code === "auth/user-not-found"
                  ) {
                    // setErrorMessage("Email hoặc mật khẩu không đúng.");
                    ToastAndroid.show('Email hoặc mật khẩu không đúng !', ToastAndroid.SHORT);
                  }
                //   Alert.alert("Thông báo", errorMessage);
                  console.log(error.code);
            })
    }
};
    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                <Image
                    style={styles.logo}
                    source={require('../../../assets/Spinner-1s-200px.png')}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Mật khẩu'
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onLoginPress()}>
                    <Text style={styles.buttonTitle}>Đăng nhập</Text>
                </TouchableOpacity>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Bạn chưa có tài khoản? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Đăng ký</Text></Text>
                </View>
            </KeyboardAwareScrollView>
        </View>
    )
}