import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <>
            <header>

                <ul className="nav nav-tabs" id="navId" role="tablist">
                    <li className="nav-item">
                        <NavLink
                            to="/"
                            className="nav-link"
                            data-bs-toggle="tab">
                            Home
                        </NavLink >
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/chi_siamo"
                            className="nav-link"
                            data-bs-toggle="tab">
                            Chi siamo
                        </NavLink>

                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/posts"
                            className="nav-link"
                            data-bs-toggle="tab">
                            Posts
                        </NavLink>

                    </li>
                </ul>

            </header>
        </>
    )
}