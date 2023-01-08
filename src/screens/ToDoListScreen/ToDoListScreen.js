import React, { useContext, useEffect, useState } from 'react'
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, View,Modal, Button } from 'react-native'
import styles from './styles';
import { firebase } from '../../firebase/config'
import { useNavigation } from '@react-navigation/native';
import {AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient'

export default function ToDoListScreen(props ) {

    const [entityText, setEntityText] = useState('')
    const [entities, setEntities] = useState([])
    const [showModal, setShowModal] = useState(false);   

    const entityRef = firebase.firestore().collection('entities')
    const userID = props.extraData.id
    useEffect(() => {
        entityRef
            .where("authorID", "==", userID)
            .orderBy('createdAt', 'desc')
            .onSnapshot(
                querySnapshot => {
                    const newEntities = []
                    querySnapshot.forEach(doc => {
                        const entity = doc.data()
                        entity.id = doc.id
                        newEntities.push(entity)
                    });
                    setEntities(newEntities)
                },
                error => {
                }
            )
    }, [])

    const onAddButtonPress = () => {
        if (entityText && entityText.length > 0) {
            const timestamp = firebase.firestore.FieldValue.serverTimestamp();
            const data = {
                text: entityText,
                authorID: userID,
                createdAt: timestamp,
            };
            entityRef
                .add(data)
                .then(_doc => {
                    setEntityText('')
                    Keyboard.dismiss()
                    // props.onRefresh()
                })
                .catch((error) => {
                    alert(error)
                });
        }
    }


    const onDeleteButtonPress = (item) => {
        if (item) {
           
            entityRef.doc(item.id).delete().then(() => {
                // props.onRefresh()
              })
            
        }
    }

    const onUpdateButtonPress = (item,entityText) => {
        // const dbRef = firebase.firestore().collection('users').doc(this.props.route.params.userkey)
        if (entityText && entityText.length > 0 && item) {
           
            entityRef.doc(item.id).update({
                'text': entityText,
              }).then(() => {
                setEntityText('')
                // props.onRefresh()
              })
            
        }
    }

    const renderEntity = ({item, index}) => {
        return (
           
            <View style={styles.entityContainer}>
                  <TouchableOpacity style={styles.entityText}  onPress={() => {    setShowModal(!showModal);
            }}>

                    <Text >
                
                        
                            {index}. {item.text} 

            
                    </Text>

            </TouchableOpacity>
                
                {/*  onPress={deleteShoppingItem} */}
                <TouchableOpacity >
                    {/* onPress={() => onDeleteButtonPress(item)}  */}
                    <AntDesign onPress={() => onDeleteButtonPress(item)} name="closesquare"
                        color="#385898"
                        size={20}  />

                </TouchableOpacity>
                <Modal
          animationType={'slide'}
          transparent={false}
          visible={showModal}
          onRequestClose={() => {
          }}>

          <View style={styles.modal}>
          <TouchableOpacity onPress={ () => setShowModal(!showModal)}>

                <View style={{ height:40, width:40, marginRight: 350,marginTop: -80}}>
                            <AntDesign size={23} name='left'/>
                </View>
            </TouchableOpacity>
            <Text style={styles.text}>Sửa ghi chú</Text>
            <View style={{flexDirection: "row",}}>
            <View style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Sửa ghi chú'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setEntityText(text)}
                    value={entityText}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TouchableOpacity style={styles.buttonModal} onPress={() => {
                    setShowModal(!showModal); onUpdateButtonPress(item,entityText);
                }}>
                    <Text style={styles.buttonTextModal}>Cập nhật</Text>
                </TouchableOpacity>
            </View>
            {/* <Button 
              title="Hủy bỏ"
              onPress={() => {
                setShowModal(!showModal);
              }}
            />
            <View style={{width: 20}}></View>
              
            <Button 
              title="Xác nhận giao dịch"
              onPress={() => {
                setShowModal(!showModal);
              }}
              
            /> */}
            </View>
          </View>
        </Modal>  
            </View>
         
                
        )
    }

    const goBack = () => {
        props.navigation.goBack();
    }

    return (
        
        <View style={styles.container}>
            <LinearGradient
            colors={["transparent","#385898"]}
            style={styles.container}
           >
            
        
            <TouchableOpacity onPress={ () => goBack()}>

            <View style={{ height:40, width:40, marginRight: 350,marginTop: 40}}>
                        <AntDesign size={23} name='left'/>
            </View>
            </TouchableOpacity>
            <Text style={{fontWeight: '600', fontSize: 25, color: '#2e2e2d'}}>
                Utility Ghi chú 
            </Text>
            
            <View style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Thêm ghi chú'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setEntityText(text)}
                    value={entityText}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TouchableOpacity style={styles.button} onPress={onAddButtonPress}>
                    <Text style={styles.buttonText}>Tạo</Text>
                </TouchableOpacity>
            </View>
            { entities && (
                <View style={styles.listContainer}>
                    <FlatList
                        data={entities}
                        renderItem={renderEntity}
                        keyExtractor={(item) => item.id}
                        removeClippedSubviews={true}
                    />
                </View>

                
            )}
           </LinearGradient>
           
        </View>
        
    )
}

