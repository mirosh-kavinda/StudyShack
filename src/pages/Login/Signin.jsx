import React from "react";
import {Link} from 'react-router-dom';
class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: "",
      signInPassword: "",
    };
  }

  onEmailChange = (event) => {
    this.setState({ signInEmail: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ signInPassword: event.target.value });
  };

  onSubmitSignIn = () => {
    fetch(" https://memphis-tutor-1.herokuapp.com/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        }
      });
  };

  render() {
    const { onRouteChange } = this.props;
    return (
      <div className="container mt5 m-5 p-4 " style={{height: " 60vh"}}>
        <h3 className="d-flex mx-auto justify-content-center ">
          Log in to Memphis Tutor
        </h3>
        <div className="  d-flex mx-auto justify-content-center p-5 ">
          <form>
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
          
            <button type="submit" className="mt-4 btn btn-dark">
              Submit
            </button>
            <div className="lh-copy mt3">
              <p className="f6 mt-3 link dim black db pointer">
                I don't have an account?
                <span onClick={() => onRouteChange("register")}>
                 <Link to ="/register"> Regsiter</Link> 
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Signin;
