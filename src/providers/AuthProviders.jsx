import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


export const AuthContext = createContext(null)
const auth = getAuth(app);

const googleProvider= new GoogleAuthProvider()
const gitHubProvider= new GithubAuthProvider()
const AuthProviders = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)


    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signOutUser = () => {
        return signOut(auth)
    }

    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const loginWithGitHub = () => {
        return signInWithPopup(auth, gitHubProvider)
    }




    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoader(false)
            // console.log(currentUser);
        })
        return () => {
            return unSubscribe;
        }

    }, [])



    const authInfo = {
        user,
        loader,
        createUser,
        signInUser,
        signOutUser,
        loginWithGoogle,
        loginWithGitHub,


    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProviders;