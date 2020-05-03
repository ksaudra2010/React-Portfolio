import React from "react";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <Router>
    <div style={{backgroundImage: `url("${process.env.PUBLIC_URL}/assets/images/pexels-photo-255379.jpeg")`}}>
      <Navbar />
      {/* <Route exact path="/" component={About} /> */}
     
      <Route exact path="/about" component={About} />
      <Route exact path="/portfolio" component={Portfolio} />
     <Redirect from="*" to="about"/>
     </div>
    </Router>
  );
}

export default App;
