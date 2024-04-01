// Import the functions you need from the SDKs you need
import { initializeApp } from "Firebase/app";
import { getAnalytics } from "Firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYCVoYL6hyGBr-OWV02pDPVatx0PUXM-w",
  authDomain: "atelier-c47ee.firebaseapp.com",
  projectId: "atelier-c47ee",
  storageBucket: "atelier-c47ee.appspot.com",
  messagingSenderId: "169218514915",
  appId: "1:169218514915:web:ceb868962c59f3982c4ad6",
  measurementId: "G-ET9FQF7RJ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {app}