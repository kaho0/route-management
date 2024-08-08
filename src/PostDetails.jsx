import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const navigate = useNavigate();
  const { id, title, body } = post;

  const handleGoBack = () => {
    navigate(-1); // This will navigate back to the previous page
  };

  return (
    <div>
      <h4>Details of Post: {id}</h4>
      <h3>Title: {title}</h3>
      <p>{body}</p>
      <button onClick={handleGoBack}>Go back</button>{" "}
      {/* Corrected this line */}
    </div>
  );
};

export default PostDetails;
