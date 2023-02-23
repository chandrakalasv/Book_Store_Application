import axios from "axios";


export function userSignUp(signupData){
    console.log("in services", signupData);
    try{
        const response = axios.post("http://localhost:8080/userregistration/register", signupData);
        return response;
    }catch(error){
        return error;
    }
}

export function userLogin(loginData){
    console.log("in services", loginData);
    try{
        const response = axios.post("http://localhost:8080/userregistration/login", loginData);
        return response;
    }catch(error){
        return error;
    }
}

export  function getAllBooks() {
    try {
      const response =  axios.get(
        "http://localhost:8080/bookdetails/retrieveAllBooks",{
            headers: {
                token:localStorage.getItem('token'),
            },
        });
      return response;
    } catch (error) {
      return error;
    }
  }

  export  function addToCart(bookID) {
    try {
      const response =  axios.put(
        "http://localhost:8080/userregistration/book/cart/"+bookID,null,{
            headers: {
                token:localStorage.getItem('token'),
            },
        });
      return response;
    } catch (error) {
      return error;
    }
  }

  export  function getCartBooks() {
    try {
      const response =  axios.get(
        "http://localhost:8080/userregistration/book/getcartdetails",{
            headers: {
                token:localStorage.getItem('token'),
            },
        });
      return response;
    } catch (error) {
      return error;
    }
  }

  export  function removeFromCart(bookID) {
    try {
      const response =  axios.put(
        "http://localhost:8080/userregistration/book/removefromcart/"+bookID,null,{
            headers: {
                token:localStorage.getItem('token'),
            },
        });
      return response;
    } catch (error) {
      return error;
    }
  }
