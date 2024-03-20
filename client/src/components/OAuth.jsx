import React from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import axios from "axios";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

const OAuth = () => {
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const res = await signInWithPopup(auth, provider);
      axios
        .post(
          "/api/auth/google",
          {
            name: res.user.displayName,
            email: res.user.email,
            photo: res.user.photoURL,
          },
          { headers: { "Content-Type": "application/json" } }
        )
        .then((res) => {
          dispatch(signInSuccess(res.data));
          navigate("/");
        });

      console.log("data ", res);
    } catch (error) {
      console.log("could not sign in using google ", error);
    }
  };

  return (
    <button
      onClick={handleGoogleClick}
      type="button"
      className="bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95"
    >
      Continue with google
    </button>
  );
};

export default OAuth;
