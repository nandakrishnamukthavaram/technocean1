import React, { useEffect, useState } from "react";
import Toggle from "./Toggle";
import TextAnimation from "./TextAnimation";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";

const Header = () => {
  const [toggled, setToggled] = useState("");
  const navigate = useNavigate();
  const [user, setUser] = useAuth();

  const handleToggle = () => {
    if (toggled === "" || toggled === "not") {
      setToggled("toggled");
    } else {
      setToggled("not");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (toggled === "toggled") {
        handleToggle();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [toggled]);

  const handleLogout = () => {
    localStorage.removeItem("auth");
    setUser({
      user: null,
      token: "",
    });
    navigate("/auth");
  };

  return (
    <div className="fixed w-[100dvw] top-10 px-5 md:px-10 lg:px-20 z-[9999]">
      <div className="header relative py-4 lg:py-0 bg-[#2c2c2c] z-[9999] flex justify-end items-center px-4 rounded-lg overflow-hidden">
        {/* large screen */}
        <div className="hidden lg:flex items-center space-x-3 z-[20]">
          {window.location.pathname !== "/" && (
            <Link
              to="/"
              className="hover:text-secondary transition-all py-3 px-3 font-m font-bold text-center"
            >
              Home
            </Link>
          )}
          {window.location.pathname !== "/events" && (
            <Link
              to="/events"
              className="hover:text-secondary transition-all py-3 px-3 font-m font-bold text-center"
            >
              Events
            </Link>
          )}
          {window.location.pathname !== "/dashboard" && (
            <Link
              to="/dashboard"
              className="hover:text-secondary transition-all py-3 px-3 font-m font-bold text-center"
            >
              Dashboard
            </Link>
          )}
          {window.location.pathname !== "/about" && (
            <Link
              to="/about"
              className="hover:text-secondary transition-all py-3 px-3 font-m font-bold text-center"
            >
              About Us
            </Link>
          )}
          {user?.token ? (
            <button
              onClick={handleLogout}
              className="text-secondary py-3 px-3 font-m font-bold text-center"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/auth"
              className="text-secondary py-3 px-3 font-m font-bold text-center"
            >
              Login
            </Link>
          )}
        </div>

        <div className="lg:hidden">
          <Toggle toggled={toggled} handleToggle={handleToggle} />
        </div>
        <div className="overflow-hidden absolute h-8 w-full left-0">
          <TextAnimation />
        </div>
      </div>

      {toggled === "toggled" && (
        <div
          className="absolute top-0 left-0 h-[100dvh] w-[100dvh]"
          onClick={handleToggle}
        ></div>
      )}

      {/* small screen */}
      <div className="relative lg:hidden">
        <div
          className={`flex justify-center absolute w-[100%] drawer z-[100] ${
            toggled === "toggled" && "drawer-enter"
          } ${toggled === "" && "opacity-0 translate-x-[-1000px]"} ${
            toggled === "not" && "drawer-exit"
          }`}
        >
          <div className=" bg-[#363636] p-6 rounded-b-3xl w-[90%]">
            <div className="flex flex-col gap-2 rounded-xl overflow-hidden">
              {window.location.pathname !== "/" && (
                <Link
                  to="/"
                  className="bg-[#545454] active:bg-secondary py-2 font-m font-bold text-center"
                >
                  Home
                </Link>
              )}

              {window.location.pathname !== "/events" && (
                <Link
                  to="/events"
                  className="bg-[#545454] active:bg-secondary py-2 font-m font-bold text-center"
                >
                  Events
                </Link>
              )}

              {window.location.pathname !== "/dashboard" && (
                <Link
                  to="/dashboard"
                  className="bg-[#545454] active:bg-secondary py-2 font-m font-bold text-center"
                >
                  Dashboard
                </Link>
              )}

              {window.location.pathname !== "/about" && (
                <Link
                  to="/about"
                  className="bg-[#545454] active:bg-secondary py-2 font-m font-bold text-center"
                >
                  About Us
                </Link>
              )}

              {user?.token ? (
                <button
                  onClick={handleLogout}
                  className="bg-secondary py-2 font-m font-bold text-center"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/auth"
                  className="bg-secondary py-2 font-m font-bold text-center"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
