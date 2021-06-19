import { Link } from "react-router-dom";
import React from "react";

function HomePage() {
  return (
    <div className="App">
      <Link to="/saved">Check out my saved stuff</Link>
      <p>I am the Home page</p>
    </div>
  );
}
export default HomePage;
