import { useState, useEffect, createContext, useContext } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "@firebase/auth";

const StateContext = createContext();

const initialState = {
  isSignedIn: false,
  user: {
    id: "",
    name: "",
    email: "",
    photo: "",
    joined: "",
  },
};

export const ContextProvider = ({ children }) => {
  const [userData, setUser] = useState(initialState);
 
  useEffect(() => {
    onAuthStateChanged(auth, () => {
      const curuser = auth.currentUser;
      if (curuser !== null) {
        setUser({
          isSignedIn: true,
          user: {
            id: curuser?.uid,
            name: curuser?.displayName,
            email: curuser?.email,
          },
        });
      }
    });
  }, []);

  return (
    <StateContext.Provider
      value={{
        onAuthStateChange,
        userData, 
        setUser,

      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
