import "./EmailBody.css";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import LabelIcon from "@mui/icons-material/Label";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { openMessage } from "../../features/mailSlice";

const EmailBody = ({ name, email, subject, message, time }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleOpenMessage = () => {
    dispatch(
      openMessage({
        name,
        subject,
        message,
        email,
        time,
      })
    );
    history.push("/mail");
  };

  return (
    <div className="emailBody" onClick={handleOpenMessage}>
      <div className="emailbody__left">
        <CheckBoxOutlineBlankIcon />
        <StarBorderIcon />
        <LabelIcon />
        <h4>{name}</h4>
      </div>
      <div className="emailbody__middle">
        <div className="emailbody__middle__msg">
          <div>
            <b>{subject} </b>
          </div>
          <div>
            <p>{message}</p>
          </div>
        </div>
      </div>
      <div className="emailbody__right">
        <p>{time}</p>
      </div>
    </div>
  );
};

export default EmailBody;
