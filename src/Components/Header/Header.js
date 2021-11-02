import "./Header.css";
import { IconButton, Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
// import firebase from "firebase";

const Header = () => {
  const user = useSelector(selectUser);
  return (
    <div className="header">
      <div className="header__left">
        {/* <IconButton> */}
        <img
          src="https://ecommercenews.eu/wp-content/uploads/2020/10/royal_mail.png"
          alt="logo"
          style={{ height: 200, marginleft: 0, width: 300 }}
        />
        {/* </IconButton> */}
      </div>
      <div className="header__middle">
        <div className="search__mail">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <input type="text" placeholder="Search Mails" />
          <KeyboardArrowDownIcon />
        </div>
      </div>
      <div className="header__right">
        <div className="right__icons">
          <HelpOutlineIcon />
          <span>Help</span>
        </div>
        <div className="right__icons">
          <SettingsIcon />
          <span>Settings</span>
        </div>

        <div className="user__profile">
          <Avatar src={user?.photoUrl} />
          <span>{user.displayName}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
