import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
  ToastAndroid,
} from 'react-native';
import { firebase } from '../../firebase/config'
import {AntDesign } from '@expo/vector-icons';
import { updateUser } from '../../utils/database';
import { getAuth, updateProfile } from "firebase/auth";


  export default function ProfileScreen(props) {
    const id = props.extraData.id
    const [isEditable, setIsEditable] = React.useState(false);
    const [fullName, setFullName] = React.useState(props.extraData.fullName);
    const [age, setAge] = React.useState(props.extraData.age);
    const [sex, setSex] = React.useState(props.extraData.sex);
    // const [user, setUser] = React.useState();
    const entityRef = firebase.firestore().collection('users')

    const getUserById = async () => {
     let user = entityRef.doc(id).get().then((doc) => {
        user = doc.data()
        if(user.fullName) {
          setFullName(user.fullName)
          setAge(user.age)
          setSex(user.sex)
        }
       
    }).catch((error) => {
    });
    };

    const userUpdate = async () => {
      entityRef.doc(props.extraData.id).update({
        'fullName': fullName,
        'age': age,
        'sex': sex,
      }).then((res) => {
        ToastAndroid.show('Cập nhật thành công !', ToastAndroid.SHORT);
        getUserById().then((user) => {
          
          props.navigation.push('Navigator')
        })
        
        

      }).catch((error) => {
    });
    };

    //   const age = props.route.params.age
    //   const sex = props.route.params.sex
    const updateState = () => {
      setIsEditable(!isEditable);
      if(isEditable){
        userUpdate()
      }
    };
    const goBack = () => {
        props.navigation.goBack();
    }
    
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={ () => goBack()}>

            <View style={{ height:40, width:40, marginLeft: 10,marginTop: 50}}>
                        <AntDesign size={23} name='left'/>
            </View>
        </TouchableOpacity>
          <View style={styles.header}>
          </View>
          
          <Image style={styles.avatar} source={require("../../../assets/Spinner-1s-200pxLoading.png")}/>
          <View style={{ alignItems: 'center', marginTop: 20, }}> 
            <Button
              title={
                isEditable
                  ? 'Lưu lại'
                  : 'Chỉnh sửa'
              }
              onPress={updateState}
            />
          </View>
         
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <TouchableOpacity style={[styles.buttonContainer,{
                    backgroundColor: isEditable ?
                    'white' : '#fff',
                  },]} >
                <Text>       Họ tên            :         </Text>
                <TextInput  underlineColorAndroid="transparent" editable={isEditable} value={fullName} onChangeText={fullName => setFullName(fullName)}></TextInput>
              </TouchableOpacity>  
              <TouchableOpacity style={[styles.buttonContainer,{
                    backgroundColor: isEditable ?
                    'white' : '#fff',
                  },]} >
                <Text>       Tuổi                :           </Text>
                <TextInput  underlineColorAndroid="transparent" editable={isEditable} value={age} onChangeText={age => setAge(age)}></TextInput>
              </TouchableOpacity> 
              <TouchableOpacity style={[styles.buttonContainer,{
                    backgroundColor: isEditable ?
                    'white' : '#fff',
                  },]} >
                <Text>       Giới tính         :           </Text>
                <TextInput  underlineColorAndroid="transparent" editable={isEditable} value={sex} onChangeText={sex => setSex(sex)}></TextInput>
              </TouchableOpacity>    
           
              <TouchableOpacity style={[styles.buttonContainer,{
                    backgroundColor: isEditable ?
                    'white' : '#fff',
                  },]} >
                <Text>       Email             :   </Text>
                <TextInput  underlineColorAndroid="transparent" editable={false} value={props.extraData.email} ></TextInput>
              </TouchableOpacity>
              {/* <TouchableOpacity style={styles.buttonLogout} >
                <Text> {props.extraData.age}</Text> 
              </TouchableOpacity> */}
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
    marginTop:0,
    flex:1,
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
    // justifyContent: 'center',
    alignItems: 'center',
    marginBottom:10,
    width:250,
    borderRadius:30,
    backgroundColor: "#fff",
    shadowColor: "#000",
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

