import { GoogleAuthProvider, signInWithPopup, getAuth } from "@firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice.js";
import { useNavigate } from "react-router-dom";

export default function OAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleAuth = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);

      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      const data = await res.json();
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      console.log("Could not login with Google", error);
    }
  };
  return (
    <div className="flex items-center justify-center">
      <button
        type="button"
        onClick={handleGoogleAuth}
        className="p-3 border flex gap-2 border-slate-200 dark:bg-red-700 rounded-lg text-slate-700 dark:text-slate-200 hover:opacity-90 dark:hover: opacity-90 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150"
      >
        <img
          className="w-6 h-6"
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          loading="lazy"
          alt="google logo"
        />
        <span className="text-white">Login with Google</span>
      </button>
    </div>
  );
}
