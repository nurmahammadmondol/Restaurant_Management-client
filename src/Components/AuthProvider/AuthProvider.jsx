import React, { createContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { auth } from '../FirebaseProvider/Firebase.config';

export const AuthContent = createContext(null);

const AuthProvider = ({ children }) => {
  const [User, setUser] = useState(null);

  const CreateUserWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const LogInUserWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const GoogleProvider = new GoogleAuthProvider();

  const CreateUserWithGoogle = () => {
    return signInWithPopup(auth, GoogleProvider);
  };

  const LogOutUser = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, User => {
      setUser(User);

      console.log('Your account created successfully', User);
    });

    return () => {
      return unSubscribe();
    };
  }, []);

  const Auth_all_data = {
    CreateUserWithEmail,
    LogInUserWithEmail,
    CreateUserWithGoogle,
    User,
    LogOutUser,
  };

  return (
    <AuthContent.Provider value={Auth_all_data}>
      {children}
    </AuthContent.Provider>
  );
};

export default AuthProvider;
