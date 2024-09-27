import { Link } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
      <Header />
      <div className="relative top-20">
        <div className="container mx-auto m-4">
          <form className="w-3/12 p-12 border-2 mx-auto rounded-lg">
            <h1 className="text-center text-xl">{isSignInForm ? "Sign In" : "Sign Up"}</h1>

            {!isSignInForm && (
              <input type="text" placeholder="Name" className="p-2 my-2 border-2 border-slate-300 w-full" />
            )}
              
            <input type="text" placeholder="Email" className="p-2 my-2 border-2 border-slate-300 w-full" />
            <input type="password" placeholder="Password" className="p-2 my-2 border-2 border-slate-300 w-full" />
            <button className="p-3 my-3 bg-slate-300 rounded-lg w-full">{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p><Link onClick={toggleSignInForm}>{isSignInForm ? "Sign Up New User?" : "Already registerd Sign In"}</Link> Now</p>
          </form>
          </div>
      </div>
    </div>
  )
}

export default Login;