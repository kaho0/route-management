import { useLoaderData } from "react-router-dom";
import User from "./User";
import "./Users.css";
const Users = () => {
  const users = useLoaderData(); // Hook should be called here

  return (
    <div>
      <h3>Our users: {users.length}</h3>
      <div className="users">
        {users.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
