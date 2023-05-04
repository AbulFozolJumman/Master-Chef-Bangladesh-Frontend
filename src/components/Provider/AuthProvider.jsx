import React, { createContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';

// Creating Auth context
export const AuthContext = createContext(null);

// Firebase Auth
const auth = getAuth(app);
// Firebase googleProvider
const googleProvider = new GoogleAuthProvider();
// Firebase githubProvider
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [error, setError] = useState("")
    const [chefs, setChefs] = useState([]);
    const [reload, setReload] = useState(false);

    // Fetching data by useEffect
    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch("https://master-chef-bangladesh-server-abulfozoljumman.vercel.app/chefs");
          const newData = await response.json();
          setChefs(newData);
        };
      
        fetchData();
      }, []);

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    // Firebase createUser by email and password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Firebase updateUserData for update displayName and photoURL
    const updateUserData = (user, name, photo) => {
        return updateProfile(user, {
            displayName: name, photoURL: photo
        })
    }

    // Firebase signInWithEmailAndPassword by email and password
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Firebase Google sign in
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // Firebase Github sign in
    const githubSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }
    
    // Firebase user signOut
    const userSignOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // Firebase user auth state change observer
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            // console.log('logged in user inside auth state observer', loggedUser)
            setUser(loggedUser);
            setLoading(false);
        })

        return () => {
            unsubscribe();
        }
    }, [reload])

    // All the context value
    const authInfo = {
        chefs,
        user,
        setUser,
        loading,
        createUser,
        updateUserData,
        error, 
        setError,
        signIn,
        googleSignIn,
        githubSignIn,
        userSignOut,
        setReload,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;