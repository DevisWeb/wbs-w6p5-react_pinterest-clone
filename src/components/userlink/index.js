import "./styles.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function UserLink({ user }) {
  useEffect(() => console.log(user));
  return (
    <div>
      <Link to={`/users/${user.name}`}>
        <div className="user-link">
          <img src={user.avatarLink} className="img-user-link" />
          {user.name}
        </div>
      </Link>
    </div>
  );
}
