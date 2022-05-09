import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCU4PiSxMh78Xiiu1QhX5mclZCaeIMvnlk",
  authDomain: "crown-db-bfbee.firebaseapp.com",
  projectId: "crown-db-bfbee",
  storageBucket: "crown-db-bfbee.appspot.com",
  messagingSenderId: "926484208711",
  appId: "1:926484208711:web:b47ac8573fbf9261ada562",
  measurementId: "G-JJ9W4C5QYK",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
    //   const name = result.user.displayName;
    //   const email = result.user.email;
    //   const profilePic = result.user.photoURL;

    //   localStorage.setItem("name", name);
    //   localStorage.setItem("email", email);
    //   localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};
