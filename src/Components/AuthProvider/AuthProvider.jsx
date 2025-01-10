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
  const [loading, setLoading] = useState(true);

  const CreateUserWithEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const LogInUserWithEmail = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const GoogleProvider = new GoogleAuthProvider();

  const CreateUserWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, GoogleProvider);
  };

  const LogOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, User => {
      setUser(User);
      setLoading(false);

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
    LogOutUser,
    User,
    loading,
  };

  return (
    <AuthContent.Provider value={Auth_all_data}>
      {children}
    </AuthContent.Provider>
  );
};

export default AuthProvider;
