import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyB39yttOev6Ke8-goByUdQaKHBoDvvnnBI',
  authDomain: 'netflix-7dfda.firebaseapp.com',
  databaseURL: 'https://netflix-7dfda.firebaseio.com',
  projectId: 'netflix-7dfda',
  storageBucket: 'netflix-7dfda.appspot.com',
  messagingSenderId: '980571175481',
  appId: '1:980571175481:web:8ca5452f6d12083f362be8',
  measurementId: 'G-ER9X4GGFE2',
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
