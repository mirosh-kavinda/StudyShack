import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {Contact,Signin, Register, Tutors,Courses,Home} from "./pages";
import React, { Component } from "react";
import './css/index.css';


const initialState = {
  input: "",
  imageUrl: "",
  box: {},
  route: "/",
  isSignedIn: false,
  componentHide: false,
  user: {
    id: "",
    name: "",
    email: "",
    entries: 0,
    joined: "",
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined,
      },
    });
  };
  onRouteChange = (route) => {
    if (route === "signout") {
      this.setState(initialState);
    } else if (route === "/") {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };

  render() {
    const { isSignedIn } = this.state;
   
    return (
      <>
        <Navbar isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="courses" element={<Courses />} />
          <Route path="contact" element={<Contact />} />
          <Route path="tutors" element={<Tutors />} />
          <Route
            path="signin"
            element={
              <Signin
                loadUser={this.loadUser}
                onRouteChange={this.onRouteChange}
              />
            }
          />
          <Route
            path="register"
            element={
              <Register
                loadUser={this.loadUser}
                onRouteChange={this.onRouteChange}
              />
            }
          />
        </Routes>
        <Footer className="footer_placeholder" />
      </>
    );
  }
}

export default App;
