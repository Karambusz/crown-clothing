import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config = {
    apiKey: "AIzaSyAiiBP9XKA_lu1F6r44GyTQSTFs4BDVTYE",
    authDomain: "crown-db-a9892.firebaseapp.com",
    projectId: "crown-db-a9892",
    storageBucket: "crown-db-a9892.appspot.com",
    messagingSenderId: "378226082419",
    appId: "1:378226082419:web:2907a799b965848768a006",
    measurementId: "G-EPBTE6HBYC"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error) {
            console.error('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;