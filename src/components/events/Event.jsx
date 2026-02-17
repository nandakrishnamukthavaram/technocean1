import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Event = ({ event, registered }) => {
  useEffect(() => {
    console.log(event);
  }, [event]);
  return (
    <div className="border border-[#333333] rounded-xl flex overflow-hidden lg:w-[35%] h-[150px]">
      <div className="min-w-[30%]">
        <img src={event.image} className="h-full w-full" alt="Event" />
      </div>
      <div className="p-3">
        <h1 className="text-secondary text-lg">{event.name}</h1>
        <p className="font-m text-xs line-clamp-3 w-[95%]">
          {event.description}
        </p>
        <div className="flex">
          <Link
            to={`/event/${event.id}`}
            className="bg-secondary rounded-lg font-s py-2 px-4 active:scale-[.98] mt-3"
          >
            {registered ? "View Details" : "Register Now"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Event;
