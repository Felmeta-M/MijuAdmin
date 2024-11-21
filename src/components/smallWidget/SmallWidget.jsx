import { Visibility } from "@mui/icons-material";
import profile from "../../assets/profile.jpg";
import "./smallWidget.css";

const SmallWidget = () => {
  return (
    <div className="smallWidget">
      <span className="smallWidgetTitle">New Members</span>
      <ul className="smallWidgetList">
        <li className="smallWidgetListItem">
          <img src={profile} alt="" className="smallWidgetImg" />
          <div className="smallWidgetUser">
            <span className="smallWidgetUsername">Well Done</span>
            <span className="smallWidgetUserTitle">Software Engineer</span>
          </div>
          <button className="smallWidgetButton">
            <Visibility className="smallWidgetIcon" />
            Display
          </button>
        </li>
        <li className="smallWidgetListItem">
          <img src={profile} alt="" className="smallWidgetImg" />
          <div className="smallWidgetUser">
            <span className="smallWidgetUsername">Not Done</span>
            <span className="smallWidgetUserTitle">Software Engineer</span>
          </div>
          <button className="smallWidgetButton">
            <Visibility className="smallWidgetIcon" />
            Display
          </button>
        </li>
        <li className="smallWidgetListItem">
          <img src={profile} alt="" className="smallWidgetImg" />
          <div className="smallWidgetUser">
            <span className="smallWidgetUsername">With Done</span>
            <span className="smallWidgetUserTitle">Software Engineer</span>
          </div>
          <button className="smallWidgetButton">
            <Visibility className="smallWidgetIcon" />
            Display
          </button>
        </li>
        <li className="smallWidgetListItem">
          <img src={profile} alt="" className="smallWidgetImg" />
          <div className="smallWidgetUser">
            <span className="smallWidgetUsername">Ged Lom</span>
            <span className="smallWidgetUserTitle">Software Engineer</span>
          </div>
          <button className="smallWidgetButton">
            <Visibility className="smallWidgetIcon" />
            Display
          </button>
        </li>
        <li className="smallWidgetListItem">
          <img src={profile} alt="" className="smallWidgetImg" />
          <div className="smallWidgetUser">
            <span className="smallWidgetUsername">Hru Dey</span>
            <span className="smallWidgetUserTitle">Software Engineer</span>
          </div>
          <button className="smallWidgetButton">
            <Visibility className="smallWidgetIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SmallWidget;
