
  import React from 'react'
  import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native'
  
  export default function LimitedScreen(props ) {
    const products = [
      {
        id: 1,
        name: 'Đầu tư',
        price: '1 VVN',
        images:[ 
          '',
          '',
          '',
          '',
          '',
          '',
        ]
      },
      {
        id: 2,
        name: 'Tích lũy',
        price: '1 VVN',
        images:[ 
          '',
          '',
          '',
          '',
          '',
          '',
          '',
        ]
      },
      {
        id: 3,
        name: 'Bất động sản',
        price: '1 VVN',
        images:[ 
          '',
          '',
          '',
          '',
          '',
          '',
          '',
        ]
      },
      {
        id: 4,
        name: 'Đồ cổ',
        price: '1 VVN',
        images:[ 
          '',
          '',
          '',
          '',
          '',
          '',
          '',
        ]
      },
      {
        id: 5,
        name: 'Giải trí',
        price: '1 VVN',
        images:[ 
          '',
          '',
          '',
          '',
          '',
          '',
          '',
        ]
      },
    ]
  
    const handlePress = () => {}
  
    return (
      <FlatList
        data={products}
        renderItem={({ item:product }) => (
          <View style={styles.card} onPress={handlePress}>
            <View style={styles.cardContent}>
              <ScrollView horizontal style={styles.imagesContent}>
              {product.images.map((image, index) => (
                <TouchableOpacity onPress={() => {}} key={`${product.id}_${index}`}>
                  <Image style={styles.productImage} 
                  // source={{ uri: image }} 
                  source={require('../../../assets/Spinner-1s-200px.png')}
                  />
                </TouchableOpacity>
              ))}
              </ScrollView>
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productPrice}>{product.price}</Text>
            </View>
            <View style={styles.cardActions}>
              <TouchableOpacity style={styles.button} onPress={() => {}}>
                <Text style={styles.buttonText}> Mua </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => {}}>
                <Text style={styles.buttonText}> Chi tiết </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => {}}>
                <Text style={styles.buttonText}> Bỏ qua </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
    )
  }
  
  const styles = StyleSheet.create({
    card: {
      shadowColor: '#B0C4DE',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 1,
      margin: 10,
      backgroundColor: '#fff',
      borderRadius: 10,
    },
    cardContent: {
      flexDirection: 'column',
      alignItems: 'center',
      padding: 10,
    },
    productImage: {
      width: 100,
      height: 100,
      margin: 10,
    },
    productName: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    productPrice: {
      fontSize: 16,
      color: '#888',
    },
    cardActions: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10,
    },
    button: {
      backgroundColor: '#eee',
      padding: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: '#000',
      fontSize: 16,
    },
  })
  