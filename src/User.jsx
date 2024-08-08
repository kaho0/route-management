import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import UserDetails from "./UserDetails";
const User = ({ user }) => {
  const userStyle = {
    border: "2px solid black",
    padding: "10px",
    borderRadius: "10px",
    gap: "4px",
    marginBottom: "5px",
  };
  const { id, name, email, phone } = user;
  return (
    <div style={userStyle}>
      <h3>{name}</h3>
      <p>email: {email}</p>
      <p>phone: {phone}</p>
      <Link to={`/user/${id}`}>Show details</Link>
    </div>
  );
};

// PropTypes validation
User.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};

export default User;
