import React from "react";
import { robots } from "../assets";
import { timeStampToDate } from "../../firebase";

const UpcomingEventCard = ({ event }) => {
  const formatTime = (date) => {
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours %= 12;
    hours = hours || 12;

    minutes = minutes < 10 ? "0" + minutes : minutes;

    return `${day} ${monthNames[monthIndex]}`;
  };

  return (
    <div className="bg-[#303030] rounded-lg lg:rounded-xl flex-1 lg:flex-none flex flex-col shadow-xl overflow-hidden md:w-[150px] lg:w-[200px]">
      <div className="flex justify-center items-center overflow-hidden h-[100px] md:h-[150px] lg:h-[150px]">
        <img className="w-full h-full" src={event?.image} alt={event.name} />
      </div>
      <div className="pt-1 pb-2 px-2 lg:py-5 lg:px-3">
        <h2 className="font-s uppercase font-semibold line-clamp-1">
          {event?.name}
        </h2>
        <p className="font-m text-xs font-bold text-secondary">
          {formatTime(timeStampToDate(event.start_time))}
        </p>
      </div>
    </div>
  );
};

export default UpcomingEventCard;
