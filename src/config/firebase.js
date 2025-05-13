import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Cấu hình Firebase của bạn
const firebaseConfig = {
  apiKey: "AIzaSyA8q_NgKCmmkGjKfU1iXE2lxQIk6Rf6CNo",
  authDomain: "apph-b1739.firebaseapp.com",
  projectId: "apph-b1739",
  storageBucket: "apph-b1739.firebasestorage.app",
  messagingSenderId: "913841491862",
  appId: "1:913841491862:web:3aacd677068d91d18b57b7"
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);

// Khởi tạo Firebase Auth và Firestore
export const auth = getAuth(app);
export const db = getFirestore(app); 