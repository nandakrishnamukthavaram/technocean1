import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import Logo from "../components/Logo";
import { qr } from "../assets";
import MyEvents from "../components/MyEvents";
import { useAuth } from "../context/auth";
import { BACKEND_URL } from "../../backendUrl";
import Qr from "../components/Qr";

const Dashboard = () => {
  const [user, setUser] = useAuth();

  const [userEvents, setUserEvents] = useState([]);

  const getUserDetails = async () => {
    try {
      const res = await fetch(`${BACKEND_URL}/user/fetchRegisteredEvents`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      });

      const data = await res.json();
      console.log(data);
      if (res.status !== 200) {
        localStorage.removeItem("auth");
        window.location.replace("/auth");
      }
      setUserEvents(data.registeredEvents);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user.token) {
      getUserDetails();
    }
  }, [user.token]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="my-32 px-3 md:px-10 lg:px-20">
        <h1 className="text-2xl text-center">
          <span className="text-secondary">DASH</span>BOARD
        </h1>

        {/* entry card */}
        <div className="flex justify-center">
          <div className="bg-black px-6 py-7 rounded-lg mt-7 sh relative md:w-[60%] lg:w-[40%]">
            <div className="w-[70%]">
              <Logo />
            </div>
            <div className="flex justify-between mt-10">
              {/* info */}
              <div className="flex items-end">
                <div>
                  <p className="font-s text-xl text-secondary">
                    {user?.user?.reg}
                  </p>
                  <p className="font-m font-semibold text-base">
                    {user?.user?.name}
                  </p>
                </div>
              </div>

              {/* qr */}
              <div className="absolute bottom-0 right-0">
                {user?.user?.id && <Qr userId={user.user.id} />}
                {/* <img src={qr} alt="" /> */}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 md:mt-8 lg:mt-10">
          <p className="font-m text-[#8f8f8f] text-[0.65rem] md:text-xs lg:text-sm text-center md:px-40 lg:px-72">
            This card serves as the entry ticket for the events you’ve
            registered. Show this to the volunteers to enter the event and mark
            your attendance.
          </p>
        </div>

        {/* my events section */}
        <div className="mt-8 lg:mt-20">
          <MyEvents events={userEvents} />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
