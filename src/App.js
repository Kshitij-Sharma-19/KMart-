import React, { useEffect } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Products from "./components/Products/Products";
import Header from "./components/Layout/Header";
import Subheader from "./components/Layout/Subheader";
import Footer from "./components/Layout/Footer";
import NotFound from "./components/NotFound";
import HelpCenter from "./components/Layout/HelpCenter";
import AuthIndex from "./components/Auth/Index";
import { checkIsLoggedIn } from "./actions/auth";
import { useDispatch, useSelector } from "react-redux";
// import User from "./components/User";

const App = () => {
  const dispatch = useDispatch()
  const authState= useSelector(state => state.auth)
  useEffect(() => {
    dispatch(checkIsLoggedIn(() => {}))
  }, [])

  return (
    <BrowserRouter>
      <div>
        <Header/>
        <Subheader />
        <Switch>
          { !authState.idToken &&
            <Route path="/:type(login|signup)" exact>
              <AuthIndex/>
            </Route>
          }
          <Redirect to="/" from="/login"/>
          <Redirect to="/" from="/signup"/>
          <Route path="/404" exact component={NotFound} />
          
          {/* Help Center Route */}
          <Route exact path="/help-center" component={HelpCenter} />

          {/* Redirect specific paths to /help-center */}
          <Redirect from="/returns" to="/help-center#returns" />
          <Redirect from="/shipping" to="/help-center#shipping" />
          <Redirect from="/faq" to="/help-center#faq" />

          {/* Product Page Route */}
          <Route path="/:category?" exact>
            <Products />
          </Route>

          {/* Catch-all redirect to 404 */}
          <Redirect to="/404" />
        </Switch>
        <Footer />
        {/* <User /> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
