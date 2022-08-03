import React from "react";
import Link from "next/link";
import useLogout from "../hooks/useLogout.js";
import useAuthContext from "../hooks/useAuthContext.js";
const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const handleClick = () => {
    logout();
  };
  return (
    <div className="bg-gray-50 ">
      <div className="max-w-5xl md:max-w-4xl justify-between py-5 my-0 mx-auto flex items-center">
        <Link href="/">Workout Buddy</Link>

        <nav>
          {user && (
            <div >
              <span className="mx-1">{user.email}</span>
              <button className="mx-1" onClick={handleClick}>Logout</button>
            </div>
          )}
          {!user &&
          (
            <div>
              <span className="mx-1">
                <Link href="/login">Login</Link>
              </span>
              <span className="mx-1">
                <Link href="/signup">Signup</Link>
              </span>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
