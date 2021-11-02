import "./Logout.css";
import firebase from "firebase";

const Logout = () => {
  return (
    <div className="logout">
      <div className="support">
        <span> Raise Support Ticket</span>
      </div>
      <div className="logout__main" onClick={() => firebase.auth().signOut()}>
        <span> LOGOUT</span>
      </div>
    </div>
  );
};

export default Logout;
{
  /* <div className="app__body__advt">
        <img
          src="https://i.pinimg.com/originals/1f/60/ff/1f60ff82b8a795cf87cf16e0cefa8ca6.gif"
          alt="adv"
        />
      </div> */
}
