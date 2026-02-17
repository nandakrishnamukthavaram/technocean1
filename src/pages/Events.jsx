import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import { Search } from "lucide-react";
import { BACKEND_URL } from "../../backendUrl";
import Event from "../components/events/Event";
import { ring } from "ldrs";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  const getEvents = async () => {
    setLoading(true);
    const res = await fetch(`${BACKEND_URL}/event/getAll`, {
      method: "GET",
    });

    const data = await res.json();

    // console.log(data);
    setEvents(data.events);
    setLoading(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    ring.register();
    getEvents();
  }, []);

  return (
    <Layout>
      <div className="my-32 px-3 md:px-10 lg:px-20 min-h-[50dvh]">
        <h1 className="text-2xl text-center">
          <span className="text-secondary">EVE</span>NTS
        </h1>

        {/* search, filter, sort */}
        <div className="border border-[#2f2f2f] p-3 rounded-xl mt-5">
          {/* search, sort */}
          <div className="flex items-center z-0">
            <div className="flex-1 flex items-center relative z-0">
              <input
                type="text"
                placeholder="Search"
                className="font-m bg-[#404040] flex-1 rounded-md py-2 pl-3 pr-10 focus:outline-0 z-0"
              />
              <div className="absolute right-3">
                <Search />
              </div>
            </div>
            {/* sort */}
            <div></div>
          </div>

          {/* filters */}
          <div></div>
        </div>

        {/* events */}

        {loading ? (
          <div className="flex justify-center items-center h-96">
            <l-ring
              size="30"
              stroke="2"
              bg-opacity="0"
              speed="2"
              color="#FF7800"
            ></l-ring>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-5 my-10">
            {events?.map((e) => (
              <Event key={e.id} event={e} />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Events;
