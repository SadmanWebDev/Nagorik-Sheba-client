import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div>
      <h1>Page not found</h1>
      <Link to="/">
        <button className="btn">Go to Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
