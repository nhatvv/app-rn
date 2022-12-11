import React, {useState} from 'react';
import {View, Text, SafeAreaView, ToastAndroid} from 'react-native';
import { COLORS } from '../../constants/theme';
import FormInput from '../../components/FormInput';
import FormButton from '../../components/FormButton';
import { createQuiz } from '../../utils/database';

const CreateQuizScreen = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleQuizSave = async () => {
    const currentQuizId = Math.floor(100000 + Math.random() * 9000).toString();
  
    await createQuiz(currentQuizId, title, description);

    navigation.navigate('AddQuestionScreen', {
      currentQuizId: currentQuizId,
      currentQuizTitle: title,
    });

    // Reset
    setTitle('');
    setDescription('');
    ToastAndroid.show('Quiz Saved', ToastAndroid.SHORT);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 20,
      }}>
      <Text
        style={{
          fontSize: 20,
          textAlign: 'center',
          marginVertical: 20,
          fontWeight: 'bold',
          color: COLORS.black,
        }}>
        Tạo câu đố
      </Text>

      <FormInput
        labelText="Chủ đề"
        placeholderText="Nhập chủ đề"
        onChangeText={val => setTitle(val)}
        value={title}
      />
      <FormInput
        labelText="Mô tả"
        placeholderText="Nhập mô tả"
        onChangeText={val => setDescription(val)}
        value={description}
      />

      <FormButton labelText="Lưu lại" handleOnPress={handleQuizSave} />

      {/* Temporary button - navigate without saving quiz*/}
      {/* <FormButton
        labelText="Navigate to AddQuestionScreen"
        style={{
          marginVertical: 20,
        }}
        handleOnPress={() => {
          navigation.navigate('AddQuestionScreen', {
            currentQuizId: '103404',
            currentQuizTitle: 'Demo quiz',
          });
        }}
      /> */}
    </SafeAreaView>
  );
};

export default CreateQuizScreen;