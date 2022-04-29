import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <h4>
            <nav className="nav">
                <Link className="nav-link" to="/main">
                    Main
                </Link>
                <Link className="nav-link" to="/login">
                    Login
                </Link>
                <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/users"
                >
                    Users
                </Link>
            </nav>
        </h4>
    );
}

export default NavBar;
