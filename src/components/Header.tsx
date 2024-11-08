import { FunctionComponent, useEffect } from "react";
import { redirect } from "react-router-dom";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  const storedValue = sessionStorage.getItem("loggedIn");
  // useEffect(() => {
  //   if (!storedValue) {
  //     redirect("/login");
  //   }
  // });
  return (
    <>
      <div className=" bg-black text-white py-4">
        <h1 className="display-1 text-center">Book Collection</h1>
        <p className="display-6 text-start">
          {storedValue ? `Welcome, ${JSON.parse(storedValue).email}` : ""}
        </p>
      </div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-danger align-start"
                  onClick={() => {
                    sessionStorage.removeItem("loggedIn");
                    redirect("/login");
                  }}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
