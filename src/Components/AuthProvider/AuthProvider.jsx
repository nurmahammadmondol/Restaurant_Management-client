import React, { createContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { auth } from '../FirebaseProvider/Firebase.config';
import { useNavigate } from 'react-router-dom';

export const AuthContent = createContext(null);

const AuthProvider = ({ children }) => {
  const [User, setUser] = useState(null);

  const CreateUserWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const LogInUserWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
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
