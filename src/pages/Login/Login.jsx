import React, { Component } from "react";
import { Card, TextField, Button } from "@mui/material";
import "./Login.css";
import { withRouter } from "../../components/WithRouter.jsx";
import { userLogin } from "../../services/UserService";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      emailError: "",
      password: "",
      passwordError: "",
    };
  }
  handleEmail = (event) => {
    console.log(event.target.value);
    let emailAddress = event.target.value;
    let regex = RegExp("^[a-z]+([_+.-]?[a-z0-9])*(@)(gmail.com)$");

    if (regex.test(emailAddress)) {
      this.setState({
        email: emailAddress,
        emailError: "",
      });
    } else {
      this.setState({
        email: emailAddress,
        emailError: "enter valid email address",
      });
    }
  };
  handlePassword = (event) => {
    console.log(event.target.value);
    let passwordValue = event.target.value;
    let regex = "";

    if (regex === passwordValue) {
      this.setState({
        password: passwordValue,
        passwordError: "enter valid password",
      });
    } else {
      this.setState({
        password: passwordValue,
        passwordError: "",
      });
    }
  };
  handleLogin = async () => {
    let loginData ={
        email:this.state.email,
        password:this.state.password

    };

    await userLogin(loginData).then((res) => {
        console.log(res);
        console.log(res.data.message);
        localStorage.setItem('token', res.data.message);
        //console.log(localStorage.getItem('token'));
        this.props.navigate("/DashBoard");
    }).catch((error) => {
        console.log(error);
    });
   
}
  handleSignUp = () => {
    this.props.navigate("/");
  };
  render() {
    return (
      <div className="LoginContainer">
        <Card id="LoginCard">
          <p> Login </p>
          <div className="email">
            <TextField
              className="email"
              label="email"
              type="text"
              variant="outlined"
              placeholder="Enter email address"
              value={this.state.email}
              error={this.state.emailError}
              helperText={this.state.emailError}
              onChange={this.handleEmail}
            />
          </div>
          <div className="password">
            <TextField
              className="password"
              label="password"
              type="text"
              variant="outlined"
              placeholder="Enter password"
              value={this.state.password}
              error={this.state.passwordError}
              helperText={this.state.passwordError}
              onChange={this.handlePassword}
            />
          </div>
          <div>
            <p id="forgetPassword"> Forget Password ?</p>
          </div>
          <div className="submit">
            <Button variant="contained" onClick={() => this.handleLogin()}>submit</Button>
            <div className="signup">
              <p id = "createAccount">Create new account? </p>
              <Button variant="contained" onClick={this.handleSignUp}>SignUp
              </Button>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default withRouter(Login);
