import React, { createContext } from 'react';
// import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
// import app from '../firebase/firebase.config';
import { useEffect } from 'react';
import { useState } from 'react';

export const AuthContext = createContext(null);

// const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [chefs, setChefs] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch("https://master-chef-bangladesh-server-abulfozoljumman.vercel.app/chefs");
          const newData = await response.json();
          setChefs(newData);
        };
      
        fetchData();
      }, []);

    // const [user, setUser] = useState(null);
    // const [loading, setLoading] = useState(true);
    
    // const createUser = (email, password) => {
    //     setLoading(true);
    //     return createUserWithEmailAndPassword(auth, email, password);
    // }

    // const signIn = (email, password) => {
    //     setLoading(true);
    //     return signInWithEmailAndPassword(auth, email, password);
    // }
    
    // const logOut = () => {
    //     setLoading(true);
    //     return signOut(auth);
    // }


    // useEffect(()=>{
    //     const unsubscribe = onAuthStateChanged(auth, loggedUser => {
    //         console.log('logged in user inside auth state observer', loggedUser)
    //         setUser(loggedUser);
    //         setLoading(false);
    //     })

    //     return () => {
    //         unsubscribe();
    //     }
    // }, [])

    const authInfo = {
        chefs,
        // user,
        // loading,
        // createUser,
        // signIn,
        // logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;