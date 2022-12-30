import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "@firebase/auth";

const Signin = () => {
  const navigate = useNavigate();
  const [postData, setPostData] = useState({
    signEmail: "",
    signPassword: "",
  });
  const onEmailChange = (event) => {
    setPostData({ ...postData, signEmail: event.target.value });
  };

  const onPasswordChange = (event) => {
    setPostData({ ...postData, signPassword: event.target.value });
  };

  const onSubmitSignIn = async () => {
    try {
      signInWithEmailAndPassword(
        auth,
        postData.signEmail,
        postData.signPassword
      );
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <article
      className="container mt5 justify-content-center m-5 p-4 d-flex "
      style={{ height: " 50vh" }}
    >
      <main className="pa4 black-80">
        <div className="measure mt-5 ">
          <fieldset id="sign_up" className="form-group">
            <h3 className="d-flex mx-auto  ">Log in to Memphis Tutor</h3>

            <div className="mt3 ">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Email
              </label>
              <input
                className="form-control"
                type="email"
                name="email-address"
                id="email-address"
                onChange={onEmailChange}
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">
                Password
              </label>
              <input
                className="form-control"
                type="password"
                name="password"
                id="password"
                onChange={onPasswordChange}
              />
            </div>
          </fieldset>

          <button onClick={onSubmitSignIn} className="mt-4 btn btn-dark">
            Sign in
          </button>

          <div className="lh-copy mt3">
            <p className="f6 mt-3 link dim black db pointer">
              I don't have an account?
              <span>
                <Link to="/register"> Regsiter</Link>
              </span>
            </p>
          </div>
        </div>
      </main>
    </article>
  );
};

export default Signin;
