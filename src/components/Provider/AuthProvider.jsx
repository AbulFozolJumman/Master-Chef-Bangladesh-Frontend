import React, { createContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [error, setError] = useState("")

    const [chefs, setChefs] = useState([]);
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
    
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUserData = (user, name, photo) => {
        updateProfile(user, {
            displayName: name, photoURL: photo
        })
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    const userSignOut = () => {
        setLoading(true);
        return signOut(auth);
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            // console.log('logged in user inside auth state observer', loggedUser)
            setUser(loggedUser);
            setLoading(false);
        })

        return () => {
            unsubscribe();
        }
    }, [])

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
        userSignOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;