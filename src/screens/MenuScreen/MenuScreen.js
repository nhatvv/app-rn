import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ToastAndroid
} from 'react-native';
import { firebase } from '../../firebase/config'

  export default function MenuScreen(props) {
    const fullName = props.route.params.fullName
    const age = props.route.params.age
    const sex = props.route.params.sex
    const signOut = () => {
      firebase.auth().signOut().then(function() {
        }, function(error) {
        });
        
    };
    
    const  functionCombined = () => {
        signOut();
        props.navigation.navigate('Login')
    }  
    return (
      <View style={styles.container}>
          <View style={styles.header}>
          <TouchableOpacity onPress={() => props.navigation.push('Home')}>
         
          <View style={{
                   flexDirection:"row",
                   alignItems:"center",
                   marginTop:50,
                   width:"100%",
                   marginLeft: 60,
               }}>
                <Image
                    source={require('../../../assets/Spinner-1s-200pxLoading.png')}
                    style={{
                        height:60,
                        width:60,
                    }}
               />
                   <Text style={{ fontWeight: '900', fontSize: 40, color: '#2e2e2d' }}><Text style={{ color: '#385898' }}>U</Text >tility</Text>
                   <View style={{width:"50%",alignItems:"flex-end"}}>
                   </View>
               </View>
          </TouchableOpacity>
     
          </View>
          
          <Image style={styles.avatar} source={require("../../../assets/Profile.png")}/>
          <View style={{ alignItems: 'center', marginTop: -10 }}>
            <Text style={styles.name}>{fullName}</Text>  
            <Text style={{ alignItems: 'center', marginTop: 10 }}>{sex}, {age} tuổi</Text> 
          </View>
         
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <TouchableOpacity style={styles.buttonContainer} onPress={() => props.navigation.navigate('ProfileScreen')}>
                <Text>Thông tin cá nhân</Text>  
              </TouchableOpacity>   
              <TouchableOpacity style={styles.buttonContainer} onPress={() => props.navigation.navigate('MoneyIntoWallet')}>
                <Text>Ví tiền</Text> 
              </TouchableOpacity>     
              <TouchableOpacity style={styles.buttonContainer} onPress={() => props.navigation.navigate('ForgotPasswordScreen')}>
                <Text>Đặt lại mật khẩu</Text> 
              </TouchableOpacity>      
              <TouchableOpacity style={styles.buttonContainer} onPress={() => props.navigation.navigate('ChangePasswordScreen')}>
                <Text>Đổi mật khẩu</Text> 
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer} onPress={() => props.navigation.navigate('ChangeEmailScreen')}>
                <Text>Đổi email đăng nhập</Text> 
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonLogout} onPress={() => functionCombined()}>
                <Text>Đăng xuất</Text> 
              </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  // }
}


const styles = StyleSheet.create({
  header:{
    backgroundColor: "#ffff",
    height:"37%",
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    paddingHorizontal:20
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "#1877F2",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
 
  body:{
    marginTop:-20,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600",
    paddingTop: 100,
    marginBottom:-10,
  },
  info:{
    fontSize:16,
    color: "#rgba(196, 235, 195, 0.8)",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:10,
    width:250,
    borderRadius:30,
    backgroundColor: "#fff",
    shadowColor: "#000",
    elevation: 15,
    elevation: 15,
  },
  buttonLogout: {
    marginTop:20,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#fff",
    shadowColor: "#000",
    elevation: 15,
  },
});

