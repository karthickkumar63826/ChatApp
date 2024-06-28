import Home from "./pages/home/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";

function App() {
  const { authUser } = useAuthContext();

  return (
    <>
      <div className="p-4 h-screen flex items-center justify-center">
        <Routes>
          <Route
            path="/"
            element={authUser ? <Home /> : <Navigate to={"/login"} />}
          ></Route>
          <Route
            path="/login"
            element={authUser ? <Navigate to="/" /> : <Login />}
          ></Route>
          <Route
            path="/signup"
            element={authUser ? <Navigate to="/" /> : <SignUp />}
          ></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
