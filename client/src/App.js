import React, { Component } from "react";
import * as proxy from 'http-proxy-middleware';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import Profile from "./components/dashboard/ProvileV2";
import BookList from "./components/Books/BookList";
import Book from "./components/Books/Book";
import Posts from "./components/Posts/Posts";
import Discussion from "./components/Discussion/Discussion";
import MarcusAurelius from "./components/book/booksJS/MarcusAurelius.js";
import Voltaire from "./components/book/booksJS/Voltaire.js";
import AristotleEthics from "./components/book/booksJS/AristotleEthics.js";
import AristotleCategories from "./components/book/booksJS/AristotleCategories.js";
import AristotlePhysics from "./components/book/booksJS/AristotlePhysics.js";
import AristotlePoetics from "./components/book/booksJS/AristotlePoetics.js";
import AristotlePolitics from "./components/book/booksJS/AristotlePolitics.js";
import PlatoApology from "./components/book/booksJS/PlatoApology";
import PlatoRepublic from "./components/book/booksJS/PlatoRepublic";
import PlatoSymposium from "./components/book/booksJS/PlatoSymposium";
import HomerIliad from "./components/book/booksJS/HomerIliad";
import HomerOdyssey from "./components/book/booksJS/HomerOdyssey";
import DarwinOrigin from "./components/book/booksJS/DarwinOrigin";
import EinsteinRelativity from "./components/book/booksJS/EinsteinRelativity";
import FreudPsycho from "./components/book/booksJS/FreudPsycho";


// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/posts" component={Posts} />
            <Route exact path="/Discussion" component={Discussion} />
            <Route exact path="/books" component={BookList} />
            <Route exact path="/book" component={Book}/>
            <Route exact path="/marcus-aurelius" component={MarcusAurelius} />
            <Route exact path="/voltaire" component={Voltaire} />
            <Route exact path="/aristotle-nicomachean_ethics" component={AristotleEthics} />
            <Route exact path="/aristotle-categories" component={AristotleCategories} />
            <Route exact path="/aristotle-physics" component={AristotlePhysics} />
            <Route exact path="/aristotle-poetics" component={AristotlePoetics} />
            <Route exact path="/aristotle-politics" component={AristotlePolitics} />
            <Route exact path="/plato-apology" component={PlatoApology} />
            <Route exact path="/plato-republic" component={PlatoRepublic} />
            <Route exact path="/plato-symposium" component={PlatoSymposium} />
            <Route exact path="/homer-iliad" component={HomerIliad} />
            <Route exact path="/homer-odyssey" component={HomerOdyssey} />
            <Route exact path="/darwin-origin_of_species" component={DarwinOrigin} />
            <Route exact path="/einstein-relativity" component={EinsteinRelativity} />
            <Route exact path="/freud-intro_to_psychoanalysis" component={FreudPsycho} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;