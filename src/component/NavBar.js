import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const [keyword, setkeyword] = useState("");
  const navigate = useNavigate();

  const HandleSubmit = (e) => {
    e.preventDefault();
    navigate("/search/?keyword=" + keyword);

    e.target.reset();
    setkeyword("");
  };

  const HandleChange = (e) => {
    setkeyword(e.target.value);
  };

  return (
    <>
      <form onSubmit={HandleSubmit}>
        <h1 className=" text-center text-5xl text-bg-danger m-0 p-1 "> Example React Router Dom 6</h1>
        <nav className="navbar navbar-dark bg-dark ">
          <Link className=" btn btn-danger" to="/">
            Home
          </Link>
          <Link className=" btn btn-danger" to="/about">
            About
          </Link>
          <Link className=" btn btn-danger" to="/users">
            Users
          </Link>
          <input
            placeholder="Search Name"
            type="text"
            onChange={HandleChange}
            defaultValue={keyword}
          ></input>
          <button className=" btn btn-danger">Search</button>
        </nav>
      </form>
    </>
  );
};
