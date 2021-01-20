import "./styles.css";
import { Link } from "react-router-dom";

export default function UserLink({ user }) {
  console.log(user);
  return (
    <div>
      <Link to={`/users/${user.name}`}>
        <div className="user-link">
          <img src={user.avatarLink} className="img-user-link" />
          <div>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
