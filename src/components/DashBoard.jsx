import React, { Component } from "react";
import {
  // AppBar,
  Card,
  // Toolbar,
  Button,
  createTheme,
  ThemeProvider,
} from "@mui/material";
// import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
// import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./DashBoard.css";
import { getAllBooks } from "../services/UserService";
import { addToCart, getCartBooks } from "../services/UserService";
import bookCover from "../assets/book2.jpg";
import BookBar from "./BookBar";

// const theme = createTheme({
//   components: {
//     MuiAppBar: {
//       styleOverrides: {
//         root: {
//           backgroundColor: "brown",
//           paddingLeft: "200px",
//           position: "absolute",
//           height:"60px"
//         },
//       },
//     },
//   },
// });
const theme1 = createTheme({
  components: {
    MuiButton: { styleOverrides: { root: { backgroundColor: "brown" } } },
  },
});
const theme2 = createTheme({
  components: {
    MuiButton: {
      styleOverrides: { root: { backgroundColor: "white", color: "black" } },
    },
  },
});
class DashBoard extends Component {
  constructor() {
    super();
    this.state = {
      bookList: [],
      addToBag: 0,
      bookCounter: 0,
    };
  }

  componentDidMount() {
    getAllBooks()
      .then((res) => {
        // console.log(res.data);
        this.setState({ bookList: res.data });
      })

      .catch((error) => {
        console.log(error);
      });
  }


  handleAddToBag = (id) => {
    let bookArray = [];
    bookArray.push(id);

    addToCart(id)
      .then((res) => {
        console.log(res.data.data.cartBook);
        this.setState({
          addToBag: id,
          bookCounter:res.data.data.cartBook.length
        });
      
      })
      .catch((error) => {
        console.log(error);
      });
    
  };


  render() {
    return (
      // <ThemeProvider theme={theme}>
      // <div className="dashBoard">
        <Card className="board">
          {/* <div>
              <AppBar className="appBar">
                <Toolbar>
                  <AutoStoriesOutlinedIcon id="bookimage" />
                  <p className="bookText">BookStore</p>
                  <div id="logo-search">
                    <SearchOutlinedIcon id="logo" />
                    <input id="search" type="text" placeholder="Search" />
                  </div>
                  <p className="cart">Cart</p>
                  {this.state.bookCounter === 0 ? (
                    <ShoppingCartOutlinedIcon />
                  ) : (
                    <div className="cartsymbol">
                      <ShoppingCartOutlinedIcon  />
                      <div class="circle"> {this.state.bookCounter}</div>
                    </div>
                  )}
                  
                </Toolbar>
              </AppBar>
            </div> */}
            <div>
              <BookBar bookCounter={this.state.bookCounter}/>
            </div>

          <div className="bookcard">
            {this.state.bookList.map((books, index) => {
              return (
                <Card className="BookDiv">
                  <div className="imageDiv">
                    <img className="image" alt="BookCover" src={bookCover} />
                  </div>

                  <div className="DetailsDiv">
                    <p className="bookName">{books.bookName}</p>
                    <p className="authorname">by {books.authorName}</p>
                    {/* <p className="bookDescription">{books.bookDescription}</p> */}
                    <p className="price">Rs.{books.price}</p>
                    {/* <p className="quantity">{books.quantity}</p> */}
                  </div>
                  <div>
                    {" "}
                    {books.addedToCart &&
                    this.state.addToBag === books.bookID ? (
                      <div className="addToBagButton">
                        <Button className="bagButton" variant="contained">
                          Added to Bag
                        </Button>
                      </div>
                    ) : (
                      <div className="buttonDiv">
                        <ThemeProvider theme={theme1}>
                          <Button
                            className="button"
                            variant="contained"
                            onClick={() => this.handleAddToBag(books.bookID)}
                          >
                            Add to Bag
                          </Button>
                        </ThemeProvider>
                        <ThemeProvider theme={theme2}>
                          <Button className="button" variant="contained">
                            WishList
                          </Button>
                        </ThemeProvider>
                      </div>
                    )}
                  </div>
                </Card>
              );
            })}
          </div>
        </Card>
      // </div>
      // </ThemeProvider>
    );
  }
}

export default DashBoard;
