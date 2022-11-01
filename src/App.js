import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ModuleList from "./pages/ModuleList";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import React ,{Component} from 'react';
import Signin from './pages/Login/Signin';
import Register from './pages/Login/Register';

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
      <Navbar  isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="moduleList" element={<ModuleList />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>}/>
        <Route path="register" element={<Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>}/>
      </Routes>
      <Footer />
    </>
   );
  }
}

export default App ;
