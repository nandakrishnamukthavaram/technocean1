import React from "react";
import UpcomingEventCard from "./UpcomingEventCard";

const UpcomingEvents = ({ events }) => {
  return (
    <div className="lg:px-20 md:px-20">
      <h1 className="ue-head text-3xl md:text-center lg:text-center">
        Upcoming <span className="text-secondary">Events</span>
      </h1>
      <div className="flex lg:justify-center gap-2 md:gap-5 lg:gap-10 mt-5 lg:mt-10">
        {events?.slice(0, 3).map((e) => (
          <UpcomingEventCard key={e.id} event={e} />
        ))}
        {events?.slice(0, 1).map((e) => (
          <UpcomingEventCard key={e.id} event={e} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
