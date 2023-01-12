import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

export default UpgradeScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
      <View style={styles.pricingOption}>
          <Text style={styles.pricingOptionTitle}>Limited(1 day left)</Text>
          <Text style={styles.pricingOptionPrice}>1 VVN/Tháng</Text>
          <Text style={styles.pricingOptionDescription}>
            Nâng cấp dung lượng của tài khoản
          </Text>
          <View style={styles.pricingOptionFeatures}>
            <Text style={styles.pricingOptionFeature}>2GB storage</Text>
            <Text style={styles.pricingOptionFeature}>Priority support</Text>
          </View>
          <View style={styles.pricingOptionButtonContainer}>
            <Text style={styles.pricingOptionButton}>Nâng cấp</Text>
          </View>
        </View>
        <View style={styles.pricingOption}>
          <Text style={styles.pricingOptionTitle}>Cơ bản</Text>
          <Text style={styles.pricingOptionPrice}>1 VVN/Tháng</Text>
          <Text style={styles.pricingOptionDescription}>
            Nâng cấp dung lượng của tài khoản
          </Text>
          <View style={styles.pricingOptionFeatures}>
            <Text style={styles.pricingOptionFeature}>1GB storage</Text>
            <Text style={styles.pricingOptionFeature}>Hỗ trợ cơ bản</Text>
          </View>
          <View style={styles.pricingOptionButtonContainer}>
            <Text style={styles.pricingOptionButton}>Nâng cấp</Text>
          </View>
        </View>
        <View style={styles.pricingOption}>
          <Text style={styles.pricingOptionTitle}>Pro</Text>
          <Text style={styles.pricingOptionPrice}>10 VVN/Tháng</Text>
          <Text style={styles.pricingOptionDescription}>
            Nâng cấp dung lượng của tài khoản
          </Text>
          <View style={styles.pricingOptionFeatures}>
            <Text style={styles.pricingOptionFeature}>10GB storage</Text>
            <Text style={styles.pricingOptionFeature}>Ưu tiên hỗ trợ</Text>
          </View>
          <View style={styles.pricingOptionButtonContainer}>
            <Text style={styles.pricingOptionButton}>Nâng cấp</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:60,
  },
  pricingOption: {
    margin: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  pricingOptionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  pricingOptionPrice: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
  },
  pricingOptionDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  pricingOptionFeatures: {
    marginBottom: 10,
  },
  pricingOptionFeature: {
    fontSize: 14,
    color: '#999',
  },
  pricingOptionButtonContainer: {
    backgroundColor: '#00BFFF',
    borderRadius: 5,
  },
  pricingOptionButton: {
    fontSize: 14,
    color: '#fff',
    padding: 10,
  },
})
