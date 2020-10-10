import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyALngPxxSOVmmdFzZ8n8o6Tdk3i4xPU1Zg',
  authDomain: 'netflix-837c2.firebaseapp.com',
  databaseURL: 'https://netflix-837c2.firebaseio.com',
  projectId: 'netflix-837c2',
  storageBucket: 'netflix-837c2.appspot.com',
  messagingSenderId: '8832089661',
  appId: '1:8832089661:web:67fc8c00e23343e81df454',
  measurementId: 'G-NVT15SE7TV',
};

const firebase = Firebase.initializeApp(config);

seedDatabase(firebase);

export { firebase };
