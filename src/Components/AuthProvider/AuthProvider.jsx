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
  const [orderFood, setOrderFood] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!User) return; // User না থাকলে API কল না করা ভালো
    setLoading(true);

    fetch('http://localhost:3000/OrderFoods')
      .then(res => res.json())
      .then(data => {
        const UserOrder = data.filter(
          order => order.OrderUserEmail === User.email
        );
        setOrderFood(UserOrder);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching orders:', error);
        setLoading(false);
      });
  }, [User]);

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
    orderFood,
    setOrderFood,
  };
  console.log(orderFood);

  return (
    <AuthContent.Provider value={Auth_all_data}>
      {children}
    </AuthContent.Provider>
  );
};

export default AuthProvider;
