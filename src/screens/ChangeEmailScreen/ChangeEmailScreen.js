
import { StyleSheet, View, Text, TextInput, Button, Alert,Linking , ToastAndroid, ScrollView,} from 'react-native';
import React, { Component, Fragment } from 'react'
import * as firebase from 'firebase';

export default class ChangeEmailScreen extends React.Component {
    static navigationOptions = {
        header: null,
      };
    
    constructor(props) {
    super(props);
    this.state = {
        currentPassword: "",
        newPassword: "",
        newEmail: "",
    };
    }

      // Reauthenticates the current user and returns a promise...
      reauthenticate = (currentPassword) => {
        var user = firebase.auth().currentUser;
        var cred = firebase.auth.EmailAuthProvider.credential(user.email, currentPassword);
        return user.reauthenticateWithCredential(cred);
      }
    
      // Changes user's password...
      onChangePasswordPress = () => {
        this.reauthenticate(this.state.currentPassword).then(() => {
          var user = firebase.auth().currentUser;
          user.updatePassword(this.state.newPassword).then(() => {
            ToastAndroid.show('Đổi mật khẩu thành công!', ToastAndroid.CENTER);
            this.props.navigation.goBack();
          }).catch((error) => {  ToastAndroid.show('Mời kiểm tra lại', ToastAndroid.TOP); });
        }).catch((error) => { console.log(error.message) });
      }
    
      // Changes user's email...
      onChangeEmailPress = () => {
        if(!this.state.newEmail.includes('@')) {
            ToastAndroid.show('Email chưa đúng định dạng', ToastAndroid.CENTER);
        } else
        if(!this.state.currentPassword) {
            ToastAndroid.show('Mật khẩu đang trống', ToastAndroid.CENTER);
        }
        else {

            this.reauthenticate(this.state.currentPassword).then(() => {
              var user = firebase.auth().currentUser;
              user.updateEmail(this.state.newEmail).then(() => {
                ToastAndroid.show('Đổi email thành công', ToastAndroid.CENTER);
              }).catch((error) => { console.log(error.message); });
            }).catch((error) => { 
                if(error.code =='auth/wrong-password') {
                    ToastAndroid.show('Mật khẩu không đúng', ToastAndroid.CENTER);
                }
                });
        }
      }
      
      render() {
        return (
          <ScrollView style={{flex: 1, flexDirection: "column", paddingVertical: 240, paddingHorizontal: 40,}}>

            <Text style={styles.textHeader}>Đổi Email</Text>
             <TextInput style={styles.textInput} value={this.state.currentPassword}
              placeholder="Mật khẩu hiện tại" autoCapitalize="none" secureTextEntry={true}
              onChangeText={(text) => { this.setState({currentPassword: text}) }}
            />
    
            {/*<TextInput style={styles.textInput} value={this.state.newPassword}
              placeholder="Mật khẩu mới" autoCapitalize="none" secureTextEntry={true}
              onChangeText={(text) => { this.setState({newPassword: text}) }}
            />

<TextInput style={styles.textInput} value={this.state.newPassword}
              placeholder="Nhập lại mật khẩu mới" autoCapitalize="none" secureTextEntry={true}
              onChangeText={(text) => { this.setState({newPassword: text}) }}
            />
    
            <Button color="#403cf0" title="Lưu lại" onPress={this.onChangePasswordPress} /> */}
    
            <TextInput style={styles.textInput} value={this.state.newEmail}
              placeholder="Email mới" autoCapitalize="none" keyboardType="email-address"
              onChangeText={(text) => { this.setState({newEmail: text}) }}
            />
    
            <Button color="#403cf0" title="Lưu lại" onPress={this.onChangeEmailPress} />
    
          </ScrollView>
        );
      }
    }
    
    const styles = StyleSheet.create({
      text: { color: "black", fontWeight: 200, textAlign: "center", fontSize: 24, },
      textHeader: {color:"#403cf0",textAlign: "center", fontSize: 24,},
      textInput: { 
        borderWidth:1, 
        borderColor:"gray", 
        marginVertical: 10, 
        padding:10, 
        height:40, 
        alignSelf: "stretch", 
        fontSize: 12, 
        borderRadius: 100},
    });