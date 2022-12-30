import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";

const Register = () => {
  const [postData, setPostData] = useState({
    email: "",
    name: "",
    password: ""
  });
  const navigate = useNavigate();
  const onNameChange = (event) => {
    setPostData({ ...postData,name: event.target.value });
  };
  const onEmailChange = (event) => {
    setPostData({ ...postData,email: event.target.value });
  };
  const onPasswordChange = (event) => {
    setPostData({ ...postData,password: event.target.value });
  };

  const onSubmitSignIn = async () => {
    try {
      createUserWithEmailAndPassword(
        auth,
        postData.email,
        postData.password
      ).then((res) => {
        return updateProfile(auth.currentUser, {
          displayName: postData.name,
        });
      });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <article className="m-5  d-flex  justify-content-center">
      <main className="black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ">
            <legend className="mt-5">
              {" "}
              <h3 className="d-flex mx-auto justify-content-center ">
                Register With Memphis Tutor
              </h3>{" "}
            </legend>
            <div className="c">
              <label className="db fw6 lh-copy f6" htmlFor="name">
                Name
              </label>
              <input
                type="email"
                className="form-control"
                name="name"
                id="name"
                onChange={onNameChange}
                aria-describedby="emailHelp"
                placeholder="Enter Name"
              />
            </div>
            <div className="mt3">
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
          <div className="">
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>

            <button onClick={onSubmitSignIn} className="btn btn-dark mt-4">
              Register
            </button>

            <div className="lh-copy mt3">
              <p className="mt-3 link dim black db pointer">
                I already have an account.
                <span>
                  <Link to="/signin"> login</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </main>
    </article>
  );
};

export default Register;
