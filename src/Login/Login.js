import { useDispatch } from "react-redux";
import { signin } from "../features/userSlice";
import { auth, provider } from "../Firebase/Firebase";
import "./Login.css";

const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        // console.log(user);
        dispatch(
          signin({
            displayName: user.displayName,
            photoUrl: user.photoURL,
            email: user.email,
          })
        );
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <div className="loginWrapper">
      <div className="logoImage">
        <img
          src="https://ecommercenews.eu/wp-content/uploads/2020/10/royal_mail.png"
          alt="logo"
        />
      </div>
      <button className="loginBtn" onClick={handleLogin}>
        Login with your Gmail
      </button>
    </div>
  );
};

export default Login;
