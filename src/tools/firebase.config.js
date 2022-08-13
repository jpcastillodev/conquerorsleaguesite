import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBXuuxkiqoNgIS395fH4ElHxzGzX5pymAI",
  authDomain: "conquerorsqueue.firebaseapp.com",
  projectId: "conquerorsqueue",
  storageBucket: "conquerorsqueue.appspot.com",
  messagingSenderId: "1035819077556",
  appId: "1:1035819077556:web:2442e15333b9245647ace1",
  measurementId: "G-QPTRPL8R1L"
};

  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)

export default db;