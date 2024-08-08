import React from "react";
import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  const { name, website, address } = user;
  const { street, suite, city, zipcode } = address; // Destructure address properties

  return (
    <div>
      <h2>Details of {name} : </h2>
      <p>Website: {website}</p>
      <h4>Address:</h4>
      <p>
        {street}, {suite}
      </p>
      <p>
        {city}, {zipcode}
      </p>
    </div>
  );
};

export default UserDetails;
