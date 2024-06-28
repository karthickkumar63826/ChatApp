import React, { useState } from "react";
import GenderCheckBox from "./GenderCheckBox";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
  const initialState = {
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  };
  const [input, setInput] = useState(initialState);

  const { loading, signup } = useSignup();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleCheckBoxChange = (gender) => {
    setInput({ ...input, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(input);
    setInput(initialState);
  };
  return (
    <div className=" flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl text-center font-semibold">
          {" "}
          Signup <span className="text-blue-500">Chat App</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="" className=" label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter fullname"
              className="w-full input input-bordered h-10"
              value={input.fullName}
              name="fullName"
              onChange={handleChange}
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
              value={input.username}
              name="username"
              onChange={handleChange}
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
              value={input.password}
              name="password"
              onChange={handleChange}
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
              value={input.confirmPassword}
              name="confirmPassword"
              onChange={handleChange}
            />
          </div>

          <GenderCheckBox
            onCheckBoxChange={handleCheckBoxChange}
            selectGender={input.gender}
          />

          <Link
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
            to={"/login"}
          >
            Already have an account?
          </Link>

          <div>
            <button
              className="btn btn-block btn-sm mt-2 border border-slate-700 "
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Signup"
              )}
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
