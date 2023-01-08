
import { StyleSheet, View, Text, TextInput, Button, Alert,SafeAreaView , ToastAndroid} from 'react-native';
import { NavigationActions } from 'react-navigation';
import * as firebase from 'firebase';
import React, { Component, Fragment } from 'react'
import { Formik } from 'formik'
// import * as Yup from 'yup'
import FormInput1 from '../../components/FormInput1'
import FormButton1 from '../../components/FormButton1'
import ErrorMessage from '../../components/ErrorMessage' 

// export default function ForgotPasswordScreen(props) {
    export default class ForgotPasswordScreen extends React.Component {
        // state = initialState;
    constructor(props) {
        super(props);
        this.state = { 
            email: "",
        };
    }

    onBackToLoginPress = () => {
        var navActions = NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({routeName: "Login"})]
        });
        this.props.navigation.dispatch(navActions);
    }

    onResetPasswordPress = (values, actions) => {
        firebase.auth().sendPasswordResetEmail(this.state.email)
            .then(() => {
                ToastAndroid.show('Email đã được gửi đi', ToastAndroid.SHORT);
                this.props.navigation.navigate('Login')
            }, (error) => {
                ToastAndroid.show('Email chưa đúng', ToastAndroid.SHORT);
            });
    }


    render() {
        return (
            <SafeAreaView style={styles.container}>
              <Text style={styles.text}>Tìm tài khoản của bạn</Text>
              <View>
              <Formik style={styles.body}
                initialValues={{ email: '' }}
                onSubmit={(values, actions) => {
                  this.onResetPasswordPress(values, actions)
                }}
                >
                {({
                  handleChange,
                  values,
                  handleSubmit,
                  errors,
                  isValid,
                  touched,
                  handleBlur,
                  isSubmitting
                }) => (
                  <Fragment>
                    <FormInput1
                    value={this.state.email}
                    name='email'
                    onChangeText={(text) => { this.setState({email: text}) }}
                      placeholder='Vui lòng nhập email'
                      autoCapitalize='none'
                      iconName='ios-mail'
                      iconColor='#2C384A'
                      onBlur={handleBlur('email')}
                    />
                    <ErrorMessage errorValue={touched.email && errors.email} />
                    <View style={styles.buttonContainer}>
                      <FormButton1
                        buttonType='outline'
                        onPress={handleSubmit}
                        title='Gửi email'
                        buttonColor='#039BE5'
                        
                      />
                    </View>
                    <ErrorMessage errorValue={errors.general} />
                  </Fragment>
                )}
              </Formik>

              </View>
            </SafeAreaView>
          )
    }
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fffff',
    marginTop: 200,
 
  },
  text: {
    color: '#333',
    fontSize: 24,
    marginLeft: 25
  },
  buttonContainer: {
    margin: 25
  },
  body: {
    padding:0
  }
});