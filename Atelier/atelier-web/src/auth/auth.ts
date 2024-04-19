import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../FirebaseConfig"

export const doCreateUserwithEmailandPassword = async (email, password) => {
    return createUserWithEmailAndPassword(auth,email,password);
}

export const doSignInwithEmailandPassword = async (email, password) => {
    return signInWithEmailAndPassword(auth,email,password);
}

export const doSignOut = () =>{
    return auth.signOut();
}

