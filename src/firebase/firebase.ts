import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCl_H3mUNp_i20pafYQcfJaw7NoPxQvPxc',
  authDomain: 'todo-bc4a6.firebaseapp.com',
  projectId: 'todo-bc4a6',
  storageBucket: 'todo-bc4a6.appspot.com',
  messagingSenderId: '31173124671',
  appId: '1:31173124671:web:d3b6cc65c49f1847520e8a',
  measurementId: 'G-27EQLXYFFY',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
