import React from "react";
import GenderCheckBox from "./GenderCheckBox";

const SignUp = () => {
  return (
    <div className=" flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl text-center font-semibold">
          {" "}
          Signup <span className="text-blue-500">Chat App</span>
        </h1>

        <form>
          <div>
            <label htmlFor="" className=" label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Jhon Deo"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label htmlFor="" className=" label p-2">
              <span className="text-base label-text"> Username</span>
            </label>
            <input
              type="text"
              placeholder="Username"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label htmlFor="" className=" label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label htmlFor="" className=" label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="text"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
            />
          </div>

          <GenderCheckBox />

          <a
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
            href="#"
          >
            Already have an account?
          </a>

          <div>
            <button className="btn btn-block btn-sm mt-2 border border-slate-700">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;


//STARTER CODE FOR THE SIGNUP PAGE

// import React from "react";
// import GenderCheckBox from "./GenderCheckBox";

// const SignUp = () => {
//   return (
//     <div className=" flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <h1 className="text-3xl text-center font-semibold">
//           {" "}
//           Signup <span className="text-blue-500">Chat App</span>
//         </h1>

//         <form>
//           <div>
//             <label htmlFor="" className=" label p-2">
//               <span className="text-base label-text">Full Name</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Jhon Deo"
//               className="w-full input input-bordered h-10"
//             />
//           </div>

//           <div>
//             <label htmlFor="" className=" label p-2">
//               <span className="text-base label-text"> Username</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Username"
//               className="w-full input input-bordered h-10"
//             />
//           </div>

//           <div>
//             <label htmlFor="" className=" label p-2">
//               <span className="text-base label-text">Password</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter password"
//               className="w-full input input-bordered h-10"
//             />
//           </div>

//           <div>
//             <label htmlFor="" className=" label p-2">
//               <span className="text-base label-text">Confirm Password</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter password"
//               className="w-full input input-bordered h-10"
//             />
//           </div>

//           <GenderCheckBox />

//           <a
//             className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
//             href="#"
//           >
//             Already have an account?
//           </a>

//           <div>
//             <button className="btn btn-block btn-sm mt-2 border border-slate-700">
//               Sign Up
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
