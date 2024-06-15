import React from "react";

const Conversation = () => {
  return (
    <>
      <div className="flex gap-2 items-center hover:hoverb-sky-500 rounded p-2 py-1 cursor-pointer">
        <div className="avatar online ">
          <div className="w-12 rounded-full">
            <img src="" alt="User profile" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div>
            <p className="font-bold text-gray-200">Jhone Doe</p>
            <span className="text-xl">😉</span>
          </div>
        </div>
      </div>

      <div className="divider my-0 py-0 h-1" />
    </>
  );
};

export default Conversation;
