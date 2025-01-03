import { Link } from "react-router-dom";
import { ModeToggle } from "../mode-toggle";

const Navbar = () => {
  return (
    <div className="text-center mt-5">
      <div className="flex items-center justify-center gap-3 text-xl font-bold">
        <h2 className=""> rfsaatu</h2>
        <Link to="/">Home</Link>
        <Link to="/user">User</Link>
        <Link to="/login">Login</Link>
        <div>
          <ModeToggle></ModeToggle>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
