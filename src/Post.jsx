import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title, body } = post;
  const handleShowDetails = () => {};
  return (
    <div>
      <h4>Post no: {id}</h4> {/* Corrected interpolation for id */}
      <h3>Post title: {title}</h3>
      <Link to={`/post/${id}`}>Post Details</Link>
    </div>
  );
};

// PropTypes validation
Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
