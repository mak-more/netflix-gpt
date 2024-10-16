import { Link } from "react-router-dom";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { useRef, useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  
  const signBtn = () => {
    //validation of form
    const message = checkValidData(!isSignInForm && name.current.value, email.current.value, password.current.value);
    // setErrorMessage(message);

    if (message===true) {
      window.location.href = '/Browse';
    }
    else {
      setErrorMessage(message);      
    }
    // console.log(email.current.value);
    // console.log(password.current.value)
    // console.log(message);
  }
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
      <Header />
      <div className="relative top-20">
        <div className="container mx-auto m-4">
          <form className="w-3/12 p-12 border-2 mx-auto rounded-lg" onSubmit={(e) => e.preventDefault()}>
            <h1 className="text-center text-xl">{isSignInForm ? "Sign In" : "Sign Up"}</h1>

            {!isSignInForm && (
              <input type="text" placeholder="Name" ref={name} className="p-2 my-2 border-2 border-slate-300 w-full" />
            )}
              
            <input type="text" placeholder="Email" ref={email} className="p-2 my-2 border-2 border-slate-300 w-full" />
            <input type="password" placeholder="Password" ref={password} className="p-2 my-2 border-2 border-slate-300 w-full" />
            <p className="text-red-700">{errorMessage}</p>
            <button className="p-3 my-3 bg-slate-300 rounded-lg w-full" onClick={signBtn}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p><Link onClick={toggleSignInForm}>{isSignInForm ? "Sign Up New User?" : "Already registerd Sign In"}</Link> Now</p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;