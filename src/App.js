import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AuthProvider from "./AuthProvider/AuthProvider";
import CreateNewEvent from "./Pages/CreateNewEvent/CreateNewEvent";
import Galarry from "./Pages/Galarry/Galarry";
import About from "./Pages/Home/About/About";
import Explore from "./Pages/Home/Explore/Explore";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login";
import Manage from "./Pages/Manage/Manage";
import MoreFacilities from "./Pages/MoreFacilites/MoreFacilities";
import MyOrder from "./Pages/MyOrder/MyOrder";
import PrivetRoute from "./Pages/PrivetRoute/PrivetRoute";
import Selected from "./Pages/Selected/Selected";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import AllPackages from "./Pages/AllPackages/AllPackages";


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/explore">
              <Explore></Explore>
            </Route>
            <Route path="/order">
              <MyOrder></MyOrder>
            </Route>
            <Route path="/management">
              <Manage />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <PrivetRoute path="/selected/:id">
              <Selected />
            </PrivetRoute>
            <Route path="/createNewEvent">
              <CreateNewEvent></CreateNewEvent>
            </Route>
            <Route path="/aboutUs">
              <About></About>
            </Route>
            <Route path="/galarry">
              <Galarry></Galarry>
            </Route>
            <Route path="/all packages">
              <AllPackages></AllPackages>
            </Route>
            <Route path="/more facilities">
              <MoreFacilities></MoreFacilities>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
