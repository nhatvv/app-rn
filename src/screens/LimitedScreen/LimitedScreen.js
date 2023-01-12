
  import React from 'react'
  import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native'
  
  export default function LimitedScreen(props ) {
    const products = [
      {
        id: 1,
        name: 'Bộ ảnh tết 1',
        price: 'Tết',
        images:[ 
          'https://png.pngtree.com/png-clipart/20190628/original/pngtree-new-years-cute-god-of-wealth-png-image_4031542.jpg',
          'https://png.pngtree.com/png-clipart/20190617/original/pngtree-god-of-wealth-god-of-wealth-god-of-wealth-new-year-png-image_3825867.jpg',
          'https://png.pngtree.com/png-clipart/20190618/original/pngtree-new-spring-god-of-wealth-new-year-god-of-wealth-png-image_3906642.jpg',
          'https://png.pngtree.com/png-clipart/20190628/original/pngtree-new-years-cute-god-of-wealth-png-image_4031542.jpg',
          'https://png.pngtree.com/png-clipart/20190617/original/pngtree-god-of-wealth-god-of-wealth-god-of-wealth-new-year-png-image_3825867.jpg',
          'https://png.pngtree.com/png-clipart/20190618/original/pngtree-new-spring-god-of-wealth-new-year-god-of-wealth-png-image_3906642.jpg',
        ]
      },
      {
        id: 2,
        name: 'Bộ ảnh tết 2',
        price: 'Tết',
        images:[ 
          'https://png.pngtree.com/png-clipart/20190619/original/pngtree-new-year-2019-god-of-wealth-new-year-png-image_3979563.jpg',
          'https://png.pngtree.com/png-clipart/20221015/original/pngtree-new-year-the-god-of-wealth-the-god-of-wealth-the-png-image_8694825.png',
          'https://png.pngtree.com/png-clipart/20190619/original/pngtree-new-year-2019-god-of-wealth-new-year-png-image_3979594.jpg',
          'https://png.pngtree.com/png-clipart/20190619/original/pngtree-new-year-2019-god-of-wealth-new-year-png-image_3979563.jpg',
          'https://png.pngtree.com/png-clipart/20221015/original/pngtree-new-year-the-god-of-wealth-the-god-of-wealth-the-png-image_8694825.png',
          'https://png.pngtree.com/png-clipart/20190619/original/pngtree-new-year-2019-god-of-wealth-new-year-png-image_3979594.jpg',
        ]
      },
      {
        id: 3,
        name: 'Bộ ảnh tết 3',
        price: 'Tết',
        images:[ 
          'https://png.pngtree.com/png-clipart/20220303/original/pngtree-lovely-god-of-wealth-sends-wealth-in-the-new-year-png-image_7383014.png',
          'https://png.pngtree.com/png-clipart/20211219/original/pngtree-new-year-s-god-of-wealth-png-image_6970991.png',
          'https://png.pngtree.com/png-clipart/20211219/original/pngtree-happy-new-year-god-of-wealth-door-god-png-image_6971001.png',
          'https://png.pngtree.com/png-clipart/20220303/original/pngtree-lovely-god-of-wealth-sends-wealth-in-the-new-year-png-image_7383014.png',
          'https://png.pngtree.com/png-clipart/20211219/original/pngtree-new-year-s-god-of-wealth-png-image_6970991.png',
          'https://png.pngtree.com/png-clipart/20211219/original/pngtree-happy-new-year-god-of-wealth-door-god-png-image_6971001.png',
        ]
      },
      {
        id: 4,
        name: 'Bộ ảnh tết 4',
        price: 'Tết',
        images:[ 
          'https://png.pngtree.com/png-clipart/20190628/original/pngtree-new-years-cute-god-of-wealth-png-image_4031542.jpg',
          'https://png.pngtree.com/png-clipart/20190617/original/pngtree-god-of-wealth-god-of-wealth-god-of-wealth-new-year-png-image_3825867.jpg',
          'https://png.pngtree.com/png-clipart/20190618/original/pngtree-new-spring-god-of-wealth-new-year-god-of-wealth-png-image_3906642.jpg',
          'https://png.pngtree.com/png-clipart/20190628/original/pngtree-new-years-cute-god-of-wealth-png-image_4031542.jpg',
          'https://png.pngtree.com/png-clipart/20190617/original/pngtree-god-of-wealth-god-of-wealth-god-of-wealth-new-year-png-image_3825867.jpg',
          'https://png.pngtree.com/png-clipart/20190618/original/pngtree-new-spring-god-of-wealth-new-year-god-of-wealth-png-image_3906642.jpg',
        ]
      },
      {
        id: 5,
        name: 'Bộ ảnh tết 5',
        price: 'Tết',
        images:[ 
          'https://png.pngtree.com/png-clipart/20190619/original/pngtree-new-year-2019-god-of-wealth-new-year-png-image_3979563.jpg',
          'https://png.pngtree.com/png-clipart/20221015/original/pngtree-new-year-the-god-of-wealth-the-god-of-wealth-the-png-image_8694825.png',
          'https://png.pngtree.com/png-clipart/20190619/original/pngtree-new-year-2019-god-of-wealth-new-year-png-image_3979594.jpg',
          'https://png.pngtree.com/png-clipart/20190619/original/pngtree-new-year-2019-god-of-wealth-new-year-png-image_3979563.jpg',
          'https://png.pngtree.com/png-clipart/20221015/original/pngtree-new-year-the-god-of-wealth-the-god-of-wealth-the-png-image_8694825.png',
          'https://png.pngtree.com/png-clipart/20190619/original/pngtree-new-year-2019-god-of-wealth-new-year-png-image_3979594.jpg',
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
                  source={{ uri: image }} 
                  // source={require('../../../assets/Spinner-1s-200px.png')}
                  />
                </TouchableOpacity>
              ))}
              </ScrollView>
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productPrice}>{product.price}</Text>
            </View>
            <View style={styles.cardActions}>
              <TouchableOpacity style={styles.button} onPress={() => {}}>
                <Text style={styles.buttonText}> Tải xuống </Text>
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
      fontSize: 18,
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
  