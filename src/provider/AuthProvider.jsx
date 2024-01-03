import { createContext } from "react";
import app from "../firebase/firebase.config";
import  { getAuth,createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'

export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({children}) => {

    const createUser = async (email,password,displayName,photoURL) => {
        try{
            const result = await createUserWithEmailAndPassword(auth,email,password)
            await updateProfile (result.user,{displayName,photoURL})
            return result
        }
        catch(error){
            console.error(error)
            throw(error)

        }
    }



    const authInfo ={
       createUser

    }
    return (
        <AuthContext.Provider value={authInfo}>

            {children}
            
        </AuthContext.Provider >
    );
};

export default AuthProvider;