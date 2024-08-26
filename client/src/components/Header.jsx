import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="bg-green-300">
      <div className="font-bold flex justify-between max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-mono">Secure Authentication App</h1>
        </Link>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="font-normal">Home</li>
          </Link>
          <Link to="/about">
            <li className="font-normal">About</li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <img
                src={currentUser.profilePicture}
                alt="Profile"
                className="h-7 w-7 rounded-full object-cover"
              />
            ) : (
              <li className="font-normal">Sign In</li>
            )}
          </Link>
        </ul>
      </div>
    </div>
  );
}
