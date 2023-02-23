import React, { Component } from "react";
import BookBar from "./BookBar";
import "./Cart.css";
import { Card, createTheme, ThemeProvider, Button } from "@mui/material";
import { getCartBooks, removeFromCart } from "../services/UserService";
import bookCover from "../assets/book2.jpg";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const theme1 = createTheme({
  components: {
    MuiSvgIcon: { styleOverrides: { root: { fill: "darkgrey" } } },
  },
});

const theme2 = createTheme({
  components: {
    MuiButton: {
      styleOverrides: { root: { color: "black", textTransform: "capitalize" } },
    },
  },
});

const theme3 = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "cornflowerblue",
          color: "white",
          display: "flex",
          flexDirection: "row",
          marginRight: "50px",
          marginTop: "350px",
          width: "170px",
          fontSize: "inherit",
        },
      },
    },
  },
});

const theme4 = createTheme({
  components: {
    MuiSvgIcon: { styleOverrides: { root: { borderColor: "white" } } },
  },
});
class Cart extends Component {
  constructor() {
    super();
    this.state = {
      cartBookList: [],
      bookCounter: 0,
    };
  }
  componentDidMount() {
    getCartBooks()
      .then((res) => {
        console.log(res.data.data);
        this.setState({ cartBookList: res.data.data,
        bookCounter:res.data.data.length});
      })

      .catch((error) => {
        console.log(error);
      });
  }
  handleRemoveFromCart = (id) => {
    removeFromCart(id)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });

  };
  componentDidUpdate(prevState) {
    if(prevState.cartBookList == this.state.cartBookList){
    getCartBooks()
      .then((res) => {
        console.log(res)
        this.setState({ cartBookList: res.data.data ,
        bookCounter:res.data.data.length});
      })

      .catch((error) => {
        console.log(error);
      });
    }
    
  }
  // componentWillUnmount() {
  //   getCartBooks()
  //     .then((res) => {
  //       this.setState({ cartBookList: res.data.data });
  //     })

  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }
  render() {
    return (
      <div>
        <Card className="board">
          <div>
            <BookBar bookCounter={this.state.bookCounter} />
          </div>
          <Card className="cartcard">
            <div className="cartitems">
              <div className="mycart">
                <p>My </p>
                <p> Cart </p>
                <p>({this.state.bookCounter})</p>
              </div>
              <div className="cartdetails">
                {this.state.cartBookList.map((books, index) => {
                  return (
                    <ThemeProvider theme={theme4}>
                      <Card className="Book">
                        {/* <div className="Book"> */}
                        <div className="image">
                          <img
                            className="image"
                            alt="BookCover"
                            src={bookCover}
                          />
                        </div>

                        <div className="Details">
                          <p className="BookName">{books.bookName}</p>
                          <p className="Authorname">by {books.authorName}</p>
                          {/* <p className="bookDescription">{books.bookDescription}</p> */}
                          <p className="Price">Rs.{books.price}</p>
                          {/* <p className="Quantity">{books.quantity}</p> */}
                        </div>
                        <div className="carticons">
                          <ThemeProvider theme={theme1}>
                            <RemoveCircleOutlineIcon className="minus"></RemoveCircleOutlineIcon>
                          </ThemeProvider>
                          <Card className="bookcounternumber"></Card>
                          <ThemeProvider theme={theme1}>
                            <AddCircleOutlineIcon className="plus"></AddCircleOutlineIcon>
                          </ThemeProvider>
                          <ThemeProvider theme={theme2}>
                            <Button
                              className="remove"
                              onClick={() =>
                                this.handleRemoveFromCart(books.bookID)
                              }
                            >
                              Remove
                            </Button>
                          </ThemeProvider>
                        </div>
                        {/* </div> */}
                      </Card>
                    </ThemeProvider>
                  );
                })}
              </div>
            </div>
            <div>
              <ThemeProvider theme={theme3}>
                <Button className="orderdiv">Place Order</Button>
              </ThemeProvider>
            </div>
          </Card>
          <Card className="customerDetails">
            <p className="customer">Customer Details</p>
          </Card>
        </Card>
      </div>
    );
  }
}

export default Cart;
