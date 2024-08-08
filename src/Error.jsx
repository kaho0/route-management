import React from "react";
import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h2>OPPPssss</h2>
      <p>{error.statusText || error.message}</p>
      {error.status === 404 && (
        <div>
          <h3>Page not found</h3>
          <p>Go back Home</p>
          <Link to="/">
            <button>Home</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Error;
