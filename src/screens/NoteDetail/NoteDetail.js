import React, { useContext, useEffect, useState } from 'react'
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, View,Modal, Button,ToastAndroid } from 'react-native'
import styles from './styles';
import { firebase } from '../../firebase/config'
import { useNavigation } from '@react-navigation/native';
import {AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient'

export default function NoteDetail(props ) {

    const [entityText, setEntityText] = useState('')
    const [entities, setEntities] = useState([])
    const [showModal, setShowModal] = useState(false);   
    const [refreshing, setRefreshing] = useState(false);
    const [updateData, setUpdateData] = useState()
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
        setRefreshing(true);
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
                    ToastAndroid.show('Thêm thành công !', ToastAndroid.SHORT);
                    setEntityText('')
                    Keyboard.dismiss()
                    // props.onRefresh()
                    setRefreshing(false);
                })
                .catch((error) => {
                    alert(error)
                });
        }
    }


    const onDeleteButtonPress = (item) => {
        if (item) {
           
            entityRef.doc(item.id).delete().then(() => {
                ToastAndroid.show('Xóa thành công !', ToastAndroid.SHORT);
              })
            
        }
    }

    const onUpdateButtonPress = (entityText) => {
        if (entityText && entityText.length > 0 && updateData) {
           
            entityRef.doc(updateData.id).update({
                'text': entityText,
              }).then(() => {
                setEntityText('')
                // props.onRefresh()
                ToastAndroid.show('Cập nhật thành công !', ToastAndroid.SHORT);
              })
            
        }
    }

    const renderEntity = ({item, index}) => {
        return (
           
            <View style={styles.entityContainer}>
                  <TouchableOpacity style={styles.entityText}  onPress={() => {setShowModal(!showModal);  setUpdateData(item)
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
            <Text style={styles.text}>Cập nhật ghi chú</Text>
            <View style={{flexDirection: "row",}}>
            <View style={styles.formContainer}>
                <TextInput
                    style={styles.inputModal}
                    placeholder='Sửa ghi chú'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setEntityText(text)}
                    value={entityText}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TouchableOpacity style={styles.buttonModal} onPress={() => {
                    setShowModal(!showModal); onUpdateButtonPress(entityText);
                }}>
                    <Text style={styles.buttonTextModal}>Cập nhật</Text>
                </TouchableOpacity>
            </View>
          
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
                        refreshing={refreshing}
                        keyExtractor={(item) => item.id}
                        removeClippedSubviews={true}
                    />
                </View>

                
            )}
           </LinearGradient>
        </View>
    )
}

