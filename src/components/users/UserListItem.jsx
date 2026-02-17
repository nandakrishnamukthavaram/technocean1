import React from "react";
import { profile } from "../../assets";

const UserListItem = ({ user, handleFunction }) => {
  console.log(user.user_image);
  return (
    <div
      className="bg-[#353434] flex space-x-5 px-5 py-2 rounded-lg active:bg-[#f6b276] cursor-pointer"
      onClick={handleFunction}
    >
      <div className="flex justify-center items-center">
        <div className="rounded-full h-12 w-12 overflow-hidden border-2 border-secondary flex justify-center items-center">
          <img
            loading="lazy"
            src={user?.user_image ? user.user_image : profile}
            alt="User"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="text-secondary font-bold font-m text-[.8rem]">
          {user.name}
        </h2>
        <p className="font-m text-[.6rem]">{user.department}</p>
      </div>
    </div>
  );
};

export default UserListItem;
