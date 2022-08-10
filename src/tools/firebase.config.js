import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyB8_9Zair_WnlMEZ8BEi8HRi1Lk9tiiQns",
    authDomain: "league-analist-tool.firebaseapp.com",
    projectId: "league-analist-tool",
    storageBucket: "league-analist-tool.appspot.com",
    messagingSenderId: "271697685319",
    appId: "1:271697685319:web:dd3c18a900f6f250dfba62",
    measurementId: "G-J9X17WQ1H0"
  };

  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)

export default db;