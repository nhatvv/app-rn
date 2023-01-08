import { useNavigationContainerRef } from "@react-navigation/native";
import React, {useState,useEffect} from "react";
import { Alert,Modal,View, Text, TextInput, StyleSheet, Button, Image, TouchableOpacity,ToastAndroid } from "react-native";
import AntIcon from "react-native-vector-icons/AntDesign";
import RadioButton from "../../components/RadioButton";

export default function MoneyIntoWallet({navigation}) {
    const navigationRef = useNavigationContainerRef();
    const [checked, setChecked] = React.useState('first');
    
      const data = [
        { value: '100.000 VND', key: 1 },
        { value: '200.000 VND', key: 2, },
        { value: '500.000 VND', key: 5 },
        { value: '1.000.000 VND', key: 10 },
        { value: '2.000.000 VND', key: 20 },
      ];
      const [showModal, setShowModal] = useState(false);   
      const [errorMessage, setErrorMessage] = useState("");
      useEffect(() => {
        if (errorMessage !== "") {
          Alert.alert("Thông báo", errorMessage);
        }
      }, [errorMessage]);
      const onClickApprove = () => {
          // Alert.alert("Thông báo", "Giao dịch thành công!");
          ToastAndroid.show('Chức năng đang bảo trì', ToastAndroid.SHORT)
      }
    return (
      <View style={{backgroundColor:'#FFFF'}}>
          <View style={{height: '100%'}}>
            <View style = {{ flex: 1, justifyContent: "center", marginLeft: 10, marginBottom: 0}}>
                
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('Navigator')}>
                    
                        <Image  style={{height: 70, width: 70, borderRadius: 20}}  source={require("../../../assets/Spinner-1s-200pxLoading.png")}></Image>
                    </TouchableOpacity>
                    <View style= {{flexDirection: "row", paddingTop: 20, paddingBottom: 20}}>
                        <Text style ={{fontSize:18, fontWeight: '500', paddingRight: 20}}>Số dư ví</Text>
                        <Text style ={{fontSize:15, paddingLeft: 190 }}>1000 VVN</Text>
                    </View>
                </View>
                <View>
                  <TextInput selectionColor={'green'} keyboardType='numeric' placeholder="Nạp tiền vào ví" placeholderTextColor="#797979" 
                  style={{borderBottomWidth: 1, marginLeft:85,  width: '75%',borderBottomColor: 'black', fontSize: 24, fontWeight: '600', paddingBottom: 10}}></TextInput>
                  
                  <View style={{borderColor: '#EAEAEA', borderWidth: 1, width: 65, height:24 , paddingTop: 5, paddingLeft: 7, borderRadius: 15, bottom: 30}}>
                      <Image  style={{height: 12, width: 22}} source={require("../../../src/images/viet_nam.png")}></Image>
                      <Text style={{fontWeight: '600', fontSize: 12, bottom: 15, left: 25}}>VND</Text>
                  </View>
                </View>
                <Text style = {{fontWeight: '600', fontSize: 12, marginVertical: 14}}>Chọn nhanh giao dịch (<Text style={{fontSize: 10, color:'red'}}> 1 VVN = 100.000 VND </Text>)</Text>
               
                <View style={styles.container}>
                <RadioButton data={data} />
                </View>

                <TouchableOpacity style={{ width: 300, paddingLeft: 110, paddingTop: 50,textAlign: 'center' }} onPress={() => navigation.navigate('Login')}>
                  <View style={{}}>
                    <Text style={{fontSize: 16,color: '#72808e', fontWeight: '500' }}> <AntIcon name="infocirlceo"></AntIcon> Thông tin dịch vụ</Text>
                  </View>
                </TouchableOpacity>
               

                </View> 
              
                <Modal
          animationType={'slide'}
          transparent={false}
          visible={showModal}
          onRequestClose={() => {
          }}>
          {/*All views of Modal*/}
          {/*Animation can be slide, slide, none*/}
          <View style={styles.modal}>
            <Text style={styles.text}>Phương thức thanh toán
            </Text>
            <Text style={styles.text}>Chuyển khoản
            </Text>
            <View style={{flexDirection: "row",}}>
            
            <Button 
              title="Hủy bỏ"
              onPress={() => {
                setShowModal(!showModal);
              }}
            />
            <View style={{width: 20}}></View>
              
            <Button 
              title="Xác nhận giao dịch"
              onPress={() => {
                setShowModal(!showModal);onClickApprove();
              }}
              
            />
            </View>
          </View>
        </Modal>   

            <TouchableOpacity onPress={() => {
            setShowModal(!showModal);
          }}>
                  <View style={{backgroundColor: '#BFBFBF', height: 50, width: '100%'}}>
                    <Text style={{fontSize: 20,color: 'white',fontSize: 16, fontWeight: '700', marginLeft: 'auto', marginRight: 'auto', marginTop:'auto', marginBottom: 'auto' }}>Tiếp tục</Text>
                  </View>
            </TouchableOpacity>
          </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      
    //   flex: 1,
    //   alignItems: 'center',
    //   justifyContent: 'center',
    },
    image: {
      height: 750
    },
    input: {
      height: 54,
      width: "85%",
      margin: 12,
      borderWidth: 1,
      borderColor: "#FFD701",
      padding: 10,
      borderRadius: 15
    },
    appButtonContainer: {
      elevation: 8,
      height: 60,
      width: '78%',
      marginLeft:'auto',
      marginRight: 'auto',
      backgroundColor:'#20CF31',
      borderRadius: 35,
      paddingVertical: 10,
    },
    appButtonText: {
      fontSize: 17,
      color: "#FFF",
      top: 10,
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    },
    container1: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
      marginTop: 30,
    },
    modal: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#fff',
      padding: 100,
    },
    text: {
      color: '#3f2949',
      marginTop: 10,
      paddingBottom:10,
    },
  });