import "./EmailContent.css";
import { IconButton, Avatar } from "@material-ui/core";
import RefreshIcon from "@mui/icons-material/Refresh";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import PrintIcon from "@mui/icons-material/Print";
import LaunchIcon from "@mui/icons-material/Launch";
import StarIcon from "@mui/icons-material/Star";
import ReplyIcon from "@mui/icons-material/Reply";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useHistory } from "react-router";
import { selectedMail } from "../../features/mailSlice";
import { useSelector } from "react-redux";

const EmailContent = () => {
  const history = useHistory();
  const mail = useSelector(selectedMail);
  console.log(mail);
  return (
    <div>
      <div className="emailContent">
        <div className="emaillist__settings">
          <div className="emaillist__settings__left">
            <IconButton>
              <ArrowBackIcon onClick={() => history.push("/")} />
            </IconButton>
            <IconButton>
              <RefreshIcon />
            </IconButton>
            <IconButton>
              <ArrowDropDownIcon />
            </IconButton>
          </div>
          <div className="emaillist__settings__right">
            <p>1-50 of 10,250</p>
            <IconButton>
              <ChevronLeftIcon />
              <ChevronRightIcon />
            </IconButton>
          </div>
        </div>
      </div>

      <div className="emaildetails__message">
        <div className="emailContent__header">
          <div className="emailContent__header__left">
            <IconButton>
              <LabelImportantIcon />
            </IconButton>
            <h4>{mail.subject}</h4>
          </div>
          <div className="emailContent__header__right">
            <IconButton>
              <PrintIcon />
              <LaunchIcon />
            </IconButton>
          </div>
        </div>
        <div className="emailContent__middle__header">
          <div className="emailContent__header__middle__left">
            <IconButton>
              <Avatar />
            </IconButton>
            <h4>{mail.name}</h4>
            <p>{mail.email}</p>
          </div>
          <div className="emailContent__header__middle__right">
            <p>{mail.time}</p>
            <IconButton>
              <StarIcon />
              <ReplyIcon />
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>
        <div className="emailContent__body">
          <p>{mail.message}</p>
        </div>
      </div>
    </div>
  );
};

export default EmailContent;
