import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Contact, Signin, Register, Tutors, Courses, Home } from "./pages";
import React, {  useState } from "react";
import "./css/index.css";
import { auth } from "./firebase";
import { onAuthStateChanged } from "@firebase/auth";

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

const App = () => {
  const [userData, setUser] = useState(initialState);

  onAuthStateChanged(auth, () => {
    const curuser = auth.currentUser;
    if (curuser !== null) {
      setUser({
        isSignedIn:true,
        user: {
          id: curuser?.uid,
          name: curuser?.displayName,
          email: curuser?.email,
        },
      });
    }
  });
  return (
    <>
      <Navbar  userInfo={userData} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="courses" element={<Courses />} />
        <Route path="contact" element={<Contact />} />
        <Route path="tutors" element={<Tutors />} />
        <Route path="signin" element={<Signin />} />
        <Route path="register" element={<Register />} />
      </Routes>
      <Footer className="footer_placeholder" />
    </>
  );
};

export default App;
