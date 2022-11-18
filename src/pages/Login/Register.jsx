import React from 'react';
import {Link} from 'react-router-dom';
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: ''
    }
  }
  onNameChange = (event) => {
    this.setState({name: event.target.value})
  }
  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }
  onSubmitSignIn = () => {
    fetch(' https://memphis-tutor-1.herokuapp.com/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user)
          this.props.onRouteChange('/');
        }
      })
  } 
  render() {
    const { onRouteChange } = this.props;
    return (
      <article className="m-5 col-8 d-flex mx-auto justify-content-center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Register</legend>
              <div className="c">
                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Name"
              />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input
                  className="form-control"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
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
              
              <input
                onClick={this.onSubmitSignIn}
                className="btn btn-dark mt-4"
                type="submit"
                value="Register"
              />

              <div className="lh-copy mt3">
              <p  
                onClick={() => onRouteChange("signin")}
                className="mt-3 link dim black db pointer"
              >

                I already have an account.
                <span onClick={() => onRouteChange("register")}>
                 <Link to ="/signin"> login</Link> 
                </span>
              </p>
            </div>
             
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default Register;