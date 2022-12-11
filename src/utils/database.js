import { firebase } from '../firebase/config'
// import { firebase } from '../../firebase/config'

export const createQuiz = (currentQuizId, title, description) => {
  return firebase.firestore().collection('Quizzes').doc(currentQuizId).set({
    title,
    description,
  });
};

export const createQuestion = (currentQuizId, currentQuestionId, question) => {
  return firebase.firestore()
    .collection('Quizzes')
    .doc(currentQuizId)
    .collection('QNA')
    .doc(currentQuestionId)
    .set(question);
};

export const getQuizzes = () => {
  return firebase.firestore().collection('Quizzes').get();
};

export const getQuizById = currentQuizId => {
  return firebase.firestore().collection('Quizzes').doc(currentQuizId).get();
};

export const getQuestionsByQuizId = currentQuizId => {
  return firebase.firestore()
    .collection('Quizzes')
    .doc(currentQuizId)
    .collection('QNA')
    .get();
};