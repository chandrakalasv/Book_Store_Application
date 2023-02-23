import React, { Component } from "react";
import { Card, TextField, Button } from "@mui/material";
import "./signUp.css";
import { userSignUp } from "../../services/UserService";
import { Link, useNavigate } from "react-router-dom";
import { withRouter } from "../../components/WithRouter.jsx";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      nameError: "",
      phoneNumber: "",
      phoneNumberError: "",
      email: "",
      emailError: "",
      password: "",
      passwordError: "",
      address: "",
      addressError: "",
      landmark: "",
      landmarkError: "",
      city: "",
      cityError: "",
      pincode: "",
      pincodeError: "",
    };
  }
  handleName = (event) => {
    console.log(event.target.value);
    let nameValue = event.target.value;
    let regex = RegExp("^[A-Z]{1}[a-zA-Z\\s]{2,}$");

    if (regex.test(nameValue)) {
      this.setState({
        name: nameValue,
        nameError: "",
      });
    } else {
      this.setState({
        name: nameValue,
        nameError: "Enter Valid Name",
      });
    }
  };
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
  handlePhoneNumber = (event) => {
    console.log(event.target.value);
    let number = event.target.value;
    let regex = RegExp("^[0-9]{10}$");

    if (regex.test(number)) {
      this.setState({
        phoneNumber: number,
        phoneNumberError: "",
      });
    } else {
      this.setState({
        phoneNumber: number,
        phoneNumberError: "enter valid phone number",
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
  handleAddress = (event) => {
    console.log(event.target.value);
    let addressValue = event.target.value;
    let pattern = "";
    if (pattern === addressValue) {
      this.setState({
        address: addressValue,
        addressError: "Enter your address",
      });
    } else {
      this.setState({
        address: addressValue,
        addressError: "",
      });
    }
  };
  handleLandmark = (event) => {
    console.log(event.target.value);
    let landmarkValue = event.target.value;
    let pattern = "";
    if (pattern === landmarkValue) {
      this.setState({
        landmark: landmarkValue,
        landmarkError: "please enter landmark",
      });
    } else {
      this.setState({
        landmark: landmarkValue,
        landmarkError: "",
      });
    }
  };
  handleCity = (event) => {
    console.log(event.target.value);
    let cityValue = event.target.value;
    let pattern = "";
    if (pattern === cityValue) {
      this.setState({
        city: cityValue,
        cityError: "please enter your city",
      });
    } else {
      this.setState({
        city: cityValue,
        cityError: "",
      });
    }
  };
  handlePincode = (event) => {
    console.log(event.target.value);
    let pincodeValue = event.target.value;
    let pattern = "";
    if (pattern === pincodeValue) {
      this.setState({
        pincode: pincodeValue,
        pincodeError: "please enter pincode",
      });
    } else {
      this.setState({
        pincode: pincodeValue,
        pincodeError: "",
      });
    }
  };
  handleSignUp = async () => {
    let signupData = {
      name: this.state.name,
      phoneNumber: this.state.phoneNumber,
      email: this.state.email,
      address: this.state.address,
      city: this.state.city,
      pincode: this.state.pincode,
      landmark: this.state.landmark,
      password: this.state.password,
    };

    await userSignUp(signupData)
      .then((res) => {
        console.log(res);
        this.props.navigate("/DashBoard");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  handleLogin = () => {
    this.props.navigate("/Login");
  };

  render() {
    return (
      <div className="signUpContainer">
        <Card id="signUpCard">
          <p> SignUp </p>
          <div className="name">
            <TextField
              className="name"
              label="name"
              type="text"
              variant="outlined"
              placeholder="Enter name"
              value={this.state.name}
              error={this.state.nameError}
              helperText={this.state.nameError}
              onChange={this.handleName}
            />
          </div>
          <div className="phoneNumber">
            <TextField
              className="phoneNumber"
              label="phoneNumber"
              type="text"
              variant="outlined"
              placeholder="Enter Phone Number"
              value={this.state.phoneNumber}
              error={this.state.phoneNumberError}
              helperText={this.state.phoneNumberError}
              onChange={this.handlePhoneNumber}
            />
          </div>
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
          <div className="address">
            <TextField
              className="address"
              label="address"
              type="text"
              variant="outlined"
              placeholder="Enter address"
              value={this.state.address}
              error={this.state.addressError}
              helperText={this.state.addressError}
              onChange={this.handleAddress}
            />
          </div>
          <div className="landmark">
            <TextField
              className="landmark"
              label="landmark"
              type="text"
              variant="outlined"
              placeholder="Enter landmark"
              value={this.state.landmark}
              error={this.state.landmarkError}
              helperText={this.state.landmarkError}
              onChange={this.handleLandmark}
            />
          </div>
          <div className="city">
            <TextField
              className="city"
              label="city"
              type="text"
              variant="outlined"
              placeholder="Enter city"
              value={this.state.city}
              error={this.state.cityError}
              helperText={this.state.cityError}
              onChange={this.handleCity}
            />
          </div>
          <div className="pincode">
            <TextField
              className="pincode"
              label="pincode"
              type="text"
              variant="outlined"
              placeholder="Enter pincode"
              value={this.state.pincode}
              error={this.state.pincodeError}
              helperText={this.state.pincodeError}
              onChange={this.handlePincode}
            />
          </div>
          <div className="submit">
            <Button variant="contained" onClick={() => this.handleSignUp()}>
              submit
            </Button>
          </div>
          <div>
            <span>Aleady have an account? </span>
            <Button   onClick={this.handleLogin} >
            Login
            </Button>
          </div>
        </Card>
      </div>
    );
  }
}

export default withRouter(SignUp);
