import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from './../Pages/Login/Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    const signInUsingGoogle = () =>{
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
         return signInWithPopup(auth, googleProvider)
        .finally(() => setIsLoading(false));
    };

    useEffect( () =>{
         const unsubscribed = onAuthStateChanged(auth, user =>{
             if(user){
                 setUser(user);
             }
             else{
                 setUser({})
             }
             setIsLoading(false);
         });
         return () => unsubscribed;
    }, [])

    const handleUserLogin = (email, password) =>{
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            setUser(result.user)
            setError("")
        })
        .catch(error =>{
            const errorMessage = error.message;
            setError(errorMessage)
        });
    }

    const logOut = () =>{
        setIsLoading(true);
        signOut(auth)
        .then(() =>{})
        .finally(() => setIsLoading(false));
    }

    return{
        user,
        error,
        setError,
        isLoading,
        signInUsingGoogle,
        handleUserLogin,
        logOut
    }
}

export default useFirebase;
