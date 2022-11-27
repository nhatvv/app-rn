import React, { useContext, useEffect, useState } from 'react'
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './styles';
import { firebase } from '../../firebase/config'
import { useNavigation } from '@react-navigation/native';
import {AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient'

export default function NoteDetail(props ) {

    const [entityText, setEntityText] = useState('')
    const [entities, setEntities] = useState([])

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
                    console.log(error)
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
                })
                .catch((error) => {
                    alert(error)
                });
        }
    }

    const renderEntity = ({item, index}) => {
        return (
            <View style={styles.entityContainer}>
                <Text style={styles.entityText}>
                    {index}. {item.text}
                </Text>
            </View>
        )
    }

    const goBack = () => {
        props.navigation.goBack();
        console.log("props note",props);
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

