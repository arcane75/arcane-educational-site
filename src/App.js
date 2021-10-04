
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import AboutUs from './Components/AboutUs/AboutUs';
import Instructor from './Components/Instructor/Instructor';
import AllCourses from './Components/AllCourses/AllCourses';
import Footer from './Components/Footer/Footer';
import Error from './Components/Error/Error';
import ContactUs from './Components/ContactUs/ContactUs';


function App() {

  return (
    <div className="App">

      <Router>
        <Switch>

          <Route exact path="/">
            <Home ></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/about">
            <AboutUs></AboutUs>
          </Route>

          <Route path="/instructor">
            <Instructor ></Instructor>
          </Route>

          <Route path="/all-courses">
            <AllCourses></AllCourses>
          </Route>

          <Route path="/contact">
            <ContactUs></ContactUs>
          </Route>

          <Route path="/footer">
            <Footer></Footer>
          </Route>

          <Route path="*">
            <Error></Error>
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
