import "./styles.css";
import { Link } from "react-router-dom";

export default function UserLink({ user }) {
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
