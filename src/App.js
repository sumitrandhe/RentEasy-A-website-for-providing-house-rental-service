import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import PageNotFound from "./component/make-difference/PageNotFound";
import RentEasyHome from "./component/RentEasyHome";
import Login from "./component/login/Login";
import SignUp from "./component/sign up/SignUp";
import PostYourVehicle from "./component/postYourVehicle/PostYourVehicle";
import PostYourHome from './component/postYourHome/PostYourHome';
import Homes from "./component/homes/Homes";
import Logout from './logout';
import http from './service/httpServices';
import config from './config.json';
import jwtDecode from 'jwt-decode';


class App extends Component {
  state = {  } 

  async componentDidMount() {

    // try {
    //   let tp = await http.get(config.apiUrl + "/agents");
    // console.log(tp);
    // } catch (error) {
      
    // }
    // try {
    //   let tp = await http.get(config.apiUrl + "/homes");
    // console.log(tp);
    // } catch (error) {
      
    // }
    

    try {
      const jwt = localStorage.getItem("token");
      const user = jwtDecode(jwt);
      console.log(user)
      this.setState({user});

      


      
      
    } catch (error) {
      
    }
  }

  
  render() { 

    return (
      <div >
        <ToastContainer />
        <Navbar user = {this.state.user}/>
        <div className="renteasy-home">
          <Switch>
            <Route path="/login" component = {Login} />
            <Route path="/logout" component = {Logout} />
            <Route path = "/homes" component={Homes} />
            <Route path = "/signUp" component={SignUp} />
            <Route path="/postYourHome" component = {PostYourHome} />
            <Route path="/postYourVehicle" component = {PostYourVehicle} />
            <Route path="/renteasy" component={RentEasyHome} />
            <Route path="/not-found" component={PageNotFound} />
            <Redirect from="/" exact to="/renteasy" />
            <Redirect to="/not-found" />
          </Switch>
  
        </div>
      </div>
    );
  }
}
 
export default App;
