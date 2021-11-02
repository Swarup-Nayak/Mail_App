import "./Sidebar.css";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { openSendMessage } from "../../features/mailSlice";

const Sidebar = () => {
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <div className="sidebar__elements">
        <div classname="add__btn">
          <Button
            startIcon={<AddIcon />}
            className="compose__btn"
            onClick={() => dispatch(openSendMessage())}
          >
            <span>New Mail</span>
          </Button>
        </div>
        <div className="inbox">
          <span> INBOX </span>
        </div>
        <br />
        <div className="sent">
          <span> SENT </span>
        </div>
        <div className="drafts">
          <span> DRAFTS</span>
        </div>
        <div className="outbox">
          <span> OUTBOX</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
