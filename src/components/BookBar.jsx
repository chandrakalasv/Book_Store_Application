import React, { Component } from "react";
import { withRouter } from "./WithRouter";

import {
  AppBar,
  Card,
  Toolbar,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./BookBar.css";

const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "brown",
          paddingLeft: "200px",
          position: "absolute",
          height: "60px",
        },
      },
    },
  },
});

class BookBar extends Component {
  constructor(props){
    super(props);
    // this.state ={
    //   bookCounter:this.props.bookCounter
    // }
    console.log(props);
  }

  handleCart=()=>{
    this.props.navigate("/Cart");
  }
  

  render() {
    return (
      <ThemeProvider theme={theme}>
         {/* <div className="dashBoard"> */}
        <Card className="dashBoard">
          <div>
            <AppBar className="appBar">
              <Toolbar>
                <AutoStoriesOutlinedIcon id="bookimage" />
                <p className="bookText">BookStore</p>
                <div id="logo-search">
                  <SearchOutlinedIcon id="logo" />
                  <input id="search" type="text" placeholder="Search" />
                </div>
                <p className="cart">Cart</p>
                {this.props.bookCounter === 0 ? (
                  <ShoppingCartOutlinedIcon  onClick={this.handleCart}/>
                ) : (
                  <div className="cartsymbol">
                    <ShoppingCartOutlinedIcon onClick={this.handleCart}/>
                    <div class="circle"> {this.props.bookCounter}</div>
                  </div>
                )} 
              </Toolbar>
            </AppBar>
          </div>
        </Card>
        {/* </div> */}
      </ThemeProvider>
    );
  }
}

export default withRouter(BookBar);
