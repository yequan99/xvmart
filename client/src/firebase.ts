import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBOkP5XkHv8kN787_jt5qJjiyBlbmRvmLA",
    authDomain: "xvmart-2be24.firebaseapp.com",
    projectId: "xvmart-2be24",
    storageBucket: "xvmart-2be24.appspot.com",
    messagingSenderId: "528980404631",
    appId: "1:528980404631:web:2dbc163deb8b37a1e3fcd2",
    measurementId: "G-NZJKF5E1XV"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app);
export default app