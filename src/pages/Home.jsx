import React, { useEffect, useState } from "react";
import { hero, logo } from "../assets";
import UpcomingEvents from "../components/UpcomingEvents";
import Sponsors from "../components/Sponsors";
import Layout from "../components/layout/Layout";
import Logo from "../components/Logo";
import Splash from "./Splash";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth";
import { BACKEND_URL } from "../../backendUrl";
import Parallax from "../components/Parallax";
import SmallParalax from "../components/SmallParalax";

const Home = () => {
  const [user, setUser] = useAuth();
  const [loading, setLoading] = useState(true);

  const [events, setEvents] = useState([]);

  const getEvents = async () => {
    setLoading(true);
    const res = await fetch(`${BACKEND_URL}/event/getAll`, {
      method: "GET",
    });

    const data = await res.json();

    console.log(data);
    setEvents(data.events);
    setLoading(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getEvents();
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <Layout>
      <Splash />
      <div className="my-36 lg:mt-28 px-3 w-screen overflow-x-hidden">
        {/* small screen */}
        <div className="lg:hidden md:px-20">
          {/* logo */}
          <Logo />

          {/* hero */}
          <div className="flex justify-center mt-10 md:max-h-[50dvh]">
            <div className="">
              {/* <img src={hero} alt="Hero" /> */}
              <SmallParalax />
            </div>
          </div>
        </div>

        {/* large screen  */}
        <div className="hidden lg:flex space-x-5 px-20">
          {/* hero */}

          <div className="mt-10">
            {/* <img src={hero} className="" alt="Hero" /> */}
            <Parallax />
          </div>

          {/* logo */}
          <div className="min-w-[35%] h-[80dvh] flex flex-col justify-center">
            <Logo />
            <div className="flex justify-center space-x-3 mt-10">
              <Link to="/events">
                <button className="text-lg font-s border border-secondary rounded-md py-2 px-5 shadow-2xl active:scale-[.98]">
                  Check Events
                </button>
              </Link>
              <Link to={user?.token ? "/dashboard" : "/auth"}>
                <button className="text-lg font-s border border-secondary bg-secondary rounded-md py-2 px-5 shadow-2xl active:scale-[.98]">
                  {user?.token ? "Dashboard" : "Sign Up"}
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* upcoming events */}
        <div className="mt-16 lg:mt-32">
          <UpcomingEvents events={events} />
        </div>

        {/* enroll */}
        <div className="md:flex justify-center">
          <div className="bg-white mt-16 py-20 md:px-20 rounded-2xl bg-img overflow-hidden shadow-2xl lg:hidden">
            <div className="flex justify-center space-x-10 items-center z-10">
              <h4 className="font-m text-4xl font-bold z-10">
                Ready to <br /> <span className="text-secondary">Enroll?</span>
              </h4>
              {user?.token ? (
                <Link
                  to="/events"
                  className="px-5 py-2 bg-secondary font-s text-xl rounded-lg z-10"
                >
                  Events
                </Link>
              ) : (
                <Link
                  to="/auth"
                  className="px-5 py-2 bg-secondary font-s text-xl rounded-lg z-10"
                >
                  Sign up
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* sponsors */}
        <div className="lg:px-20 lg:mt-32">
          <Sponsors />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
