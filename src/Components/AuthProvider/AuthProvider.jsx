import React, { createContext } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../FirebaseProvider/Firebase.config';

export const AuthContent = createContext(null);

const AuthProvider = ({ children }) => {
  const CreateUserWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const LogInUserWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const Auth_all_data = {
    CreateUserWithEmail,
    LogInUserWithEmail,
  };

  return (
    <AuthContent.Provider value={Auth_all_data}>
      {children}
    </AuthContent.Provider>
  );
};

export default AuthProvider;
