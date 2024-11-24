import "./topbar.css";
import { Language, NotificationsNone, Settings } from "@mui/icons-material";
import profile from "../../assets/profile.jpg";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Miju Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src={profile} alt="profile picture" className="topAvatar" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
