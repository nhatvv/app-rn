import React, { useContext, useEffect, useState } from 'react'
import {View, Text, Image, ImageBackground} from 'react-native'
import {TextInput,ScrollView,TouchableOpacity} from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'
import {AntDesign } from '@expo/vector-icons';
import { firebase } from '../../firebase/config'

export default function HomeScreen(props ) {
    
    const fullName = props?.route.params.fullName
    return (
        <View style={{
            backgroundColor:"#ffff",
            flex:1
        }}>
           <View style={{
               backgroundColor:"#ffff",
               height:"24%",
               borderBottomLeftRadius:20,
               borderBottomRightRadius:20,
               paddingHorizontal:20
           }}>
               
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
           </View>
           <LinearGradient
            colors={["#385898", "transparent"]}
            style={{
                left:0,
                right:0,
                height:100,
                marginTop:-50
            }}
           >
               <View style={{
                   backgroundColor:"#FFF",
                   paddingVertical:8,
                   paddingHorizontal:20,
                   marginHorizontal:20,
                   borderRadius:15,
                   marginTop:25,
                   flexDirection:"row",
                   alignItems:"center"
               }}>
                   <TextInput
                        placeholder="Tìm kiếm ..."
                        placeholderTextColor="#385898"
                        style={{
                            fontWeight:"bold",
                            fontSize:16,
                            width:"95%"
                        }}
                   />
                   <AntDesign  name="search1"
                        color="#385898"
                        size={20}  />
               </View>
            </LinearGradient>


               <View style={{
                   flexDirection:"row",
                   paddingHorizontal:20,
                   width:"100%",
                   alignItems:"center",
                   paddingTop: 10,
               }}>
                   <View style={{width:"50%"}}>
                        <Text style={{
                            fontWeight:"bold",
                            fontSize:17,
                            color:"#585a61"
                        }}>Dành cho <Text style={{color: "#385898"}}>{fullName}</Text></Text>
                        <View style={{
                            height:3,
                            backgroundColor:"#385898",
                            width:132,
                            marginTop:-1
                        }}>

                        </View>

                   </View>
                
                   <View style={{width:"50%", alignItems:"flex-end"}}>
                        <View style={{
                            backgroundColor:"#385898",
                            paddingHorizontal:20,
                            paddingVertical:5,
                            borderRadius:15
                        }}>
                            <TouchableOpacity>
                            <Text style={{
                                fontWeight:"bold",
                                fontSize:13,
                                color:"#FFF"
                            }}>More</Text>
                            </TouchableOpacity>
                        </View>
                   </View>
               </View>

            
        
                <ScrollView 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{height:400}}
                >
                    <LinearGradient
                        colors={["rgba(0,164,109,0.09)", "transparent"]}
                        style={{
                            position:"absolute",
                            left:0,
                            right:0,
                            height:100,
                            marginTop:220,
                            top:0
                        }}
                    />

                    <TouchableOpacity 
                        onPress={()=>props.navigation.navigate("NoteDetail")}
                        style={{
                            height:250,
                            elevation:2,
                            backgroundColor:"#FFF",
                            marginLeft:20,
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:160
                        }}
                    >
                        <Image
                            source={require('../../images/1.png')}
                        />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>Ghi chú</Text>
                            <Text style={{
                                fontWeight:"bold",
                                color:"#385898",
                                paddingLeft:35
                            }}>    Free</Text>
                        </View>
                        <Text style={{
                            paddingHorizontal:10,
                            fontWeight:"bold",
                            color:"#385898",
                            paddingTop:3
                        }}>
                            Ứng dụng
                        </Text>
                    </TouchableOpacity>

                    

                <TouchableOpacity 
                        onPress={()=>props.navigation.navigate("CalculatorScreen")}
                        style={{
                            height:250,
                            elevation:2,
                            backgroundColor:"#FFF",
                            marginLeft:20,
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:160
                        }}
                    >
                        <Image
                            source={require('../../images/2.png')}
                        />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>Máy tính</Text>
                            <Text style={{
                                fontWeight:"bold",
                                color:"#385898",
                                paddingLeft:45
                            }}>Free</Text>
                        </View>
                        <Text style={{
                            paddingHorizontal:10,
                            fontWeight:"bold",
                            color:"#385898",
                            paddingTop:3
                        }}>
                            Ứng dụng
                        </Text>
                        </TouchableOpacity>
                  

                    <TouchableOpacity 
                        onPress={()=>props.navigation.navigate("QuizScreen")}
                        style={{
                            height:250,
                            elevation:2,
                            backgroundColor:"#FFF",
                            marginLeft:20,
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:160
                        }}
                    >
                        <Image
                            source={require('../../images/3.png')}
                        />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>Câu đố</Text>
                            <Text style={{
                                fontWeight:"bold",
                                color:"#385898",
                                paddingLeft:35
                            }}>     Free</Text>
                        </View>
                        <Text style={{
                            paddingHorizontal:10,
                            fontWeight:"bold",
                            color:"#385898",
                            paddingTop:3
                        }}>
                            Trò chơi
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={()=>props.navigation.navigate("StopwatchScreen")}
                        style={{
                            height:250,
                            elevation:2,
                            backgroundColor:"#FFF",
                            marginLeft:20,
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:160
                        }}
                    >
                        <Image
                            source={require('../../images/4.png')}
                        />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>Bấm giờ</Text>
                            <Text style={{
                                fontWeight:"bold",
                                color:"#385898",
                                paddingLeft:30
                            }}>     Free</Text>
                        </View>
                        <Text style={{
                            paddingHorizontal:10,
                            fontWeight:"bold",
                            color:"#385898",
                            paddingTop:3
                        }}>
                            Ứng dụng
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={()=>props.navigation.navigate("ChatScreen")}
                        style={{
                            height:250,
                            elevation:2,
                            backgroundColor:"#FFF",
                            marginLeft:20,
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:160
                        }}
                    >
                        <Image
                            source={require('../../images/5.png')}
                        />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>Trò truyện</Text>
                            <Text style={{
                                fontWeight:"bold",
                                color:"#385898",
                                paddingLeft:35
                            }}>    Free</Text>
                        </View>
                        <Text style={{
                            paddingHorizontal:10,
                            fontWeight:"bold",
                            color:"#385898",
                            paddingTop:3
                        }}>
                            Ứng dụng
                        </Text>
                    </TouchableOpacity>
                </ScrollView>            

        </View>
    )
}
// export default HomeScreen;