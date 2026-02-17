import React, { useState } from "react";
import { Link } from "react-router-dom";
import Event from "./events/Event";

const MyEvents = ({ events }) => {
  const [active, setActive] = useState(1);

  const handleClick = (type) => {
    setActive(type);
  };

  return (
    <div className="border-[#444343] border rounded-xl px-3 md:px-10 lg:px-20 py-7 md:py-10 lg:py-12 min-h-60">
      <h1 className="text-2xl text-center">
        <span className="text-secondary">MY</span> EVENTS
      </h1>

      {events?.length === 0 ? (
        <div className="h-40 flex items-center justify-center">
          <div>
            <p className="italic text-sm text-center">
              You haven't registered for any events yet!
            </p>
            <div className="text-center mt-7">
              <Link
                to="/events"
                className="bg-secondary font-s rounded-lg px-4 py-3 active:scale-[.98]"
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex mt-5 lg:mt-7 md:px-20 lg:px-52">
            <button
              onClick={() => handleClick(1)}
              className={`font-m font-bold text-base py-2 px-1 rounded-l-lg flex-1 border ${
                active === 1
                  ? "bg-secondary border-secondary"
                  : "bg-[#312f2f] border-[#444343]"
              }`}
            >
              Upcoming
            </button>
            <button
              onClick={() => handleClick(2)}
              className={`font-m font-bold text-base py-2 px-1 rounded-r-lg flex-1 border ${
                active === 2
                  ? "bg-secondary border-secondary"
                  : "bg-[#312f2f] border-[#444343]"
              }`}
            >
              Past
            </button>
          </div>

          <div className="flex flex-col lg:flex-row mt-10 lg:mt-12 lg:space-x-3">
            {events?.map((e) => (
              <Event key={e.id} event={e} registered={true} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyEvents;
