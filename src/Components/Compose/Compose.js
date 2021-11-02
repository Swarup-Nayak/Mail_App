import "./Compose.css";
import RemoveIcon from "@mui/icons-material/Remove";
import HeightIcon from "@mui/icons-material/Height";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import LinkIcon from "@mui/icons-material/Link";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import PhotoIcon from "@mui/icons-material/Photo";
import PhonelinkLockIcon from "@mui/icons-material/PhonelinkLock";
import CreateIcon from "@mui/icons-material/Create";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { closeSendMessage } from "../../features/mailSlice";
import { useState } from "react";
import { db } from "../../Firebase/Firebase";
import firebase from "firebase";
import { selectUser } from "../../features/userSlice";

const Compose = () => {
  const dispatch = useDispatch();
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const user = useSelector(selectUser);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // alert(`${to}, ${subject}, ${message}`);
    db.collection("emails").add({
      to,
      subject,
      message,
      from: user.email,
      fromName: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setTo("");
    setSubject("");
    setMessage("");
    dispatch(closeSendMessage());
    // alert("Email sent successfully");
  };

  return (
    <div className="compose">
      <div className="compose__header">
        <div className="compose__header__left">
          <span>Mew Message</span>
        </div>
        <div className="compose__header__right">
          <RemoveIcon />
          <HeightIcon />
          <CloseIcon onClick={() => dispatch(closeSendMessage())} />
        </div>
      </div>
      <form onSubmit={handleFormSubmit}>
        <div className="compose__body">
          <div className="compose__body__form">
            <input
              type="email"
              placeholder="Reciepents"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              required
            />
            <div className="compose__body__form">
              <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
              <textarea
                rows="20"
                onChange={(e) => setMessage(e.target.value)}
                required
              >
                {message}
              </textarea>
            </div>
          </div>
        </div>
        <div className="compose__footer">
          <div className="compose__footer__left">
            <button type="submit">
              Send <ArrowDropDownIcon />
            </button>
          </div>
          <div className="compose__footer__right">
            <FormatColorTextIcon />
            <AttachFileIcon />
            <LinkIcon />
            <InsertEmoticonIcon />
            <NoteAddIcon />
            <PhotoIcon />
            <PhonelinkLockIcon />
            <CreateIcon />
            <MoreVertIcon />
            <DeleteIcon />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Compose;
