import React from "react";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div>
      <Link to='/'>
        <p>Home</p>
      </Link>
      <Link to='/profile'>
        <p>Profile</p>
      </Link>
    </div>
  );
}
