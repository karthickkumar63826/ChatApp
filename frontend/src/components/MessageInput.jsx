import React from "react";
import { BiSend } from "react-icons/bi";

const MessageInput = () => {
  return (
    <div className="px-4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
          placeholder="Send a message"
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center px-3 "
        >
          <BiSend />
        </button>
      </div>
    </div>
  );
};

export default MessageInput;




// import React from "react";
// import { BiSend } from "react-icons/bi";

// const MessageInput = () => {
//   return (
//     <div className="px-4 my-3">
//       <div className="w-full relative">
//         <input
//           type="text"
//           className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
//           placeholder="Send a message"
//         />
//         <button
//           type="submit"
//           className="absolute inset-y-0 end-0 flex items-center px-3 "
//         >
//           <BiSend />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default MessageInput;
