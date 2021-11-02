import "./EmailSettings.css";
import React from "react";
import { IconButton } from "@material-ui/core";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import RefreshIcon from "@mui/icons-material/Refresh";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const EmailSettings = () => {
  return (
    <div className="emaillist">
      <div className="emaillist__settings">
        <div className="emaillist__settings__left">
          <IconButton>
            <CheckBoxOutlineBlankIcon />
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
  );
};

export default EmailSettings;
