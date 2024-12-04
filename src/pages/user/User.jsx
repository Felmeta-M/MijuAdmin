import "./user.css";
import profile from "../../assets/profile.jpg";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src={profile} alt="" className="userShowImg" />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Lionel Messi</span>
              <span className="userShowUserTitle">Football Player</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Detail</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">liomessi22</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">04.05.2000</span>
            </div>
            <span className="userShowTitle">Contact Detail</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+25111121212</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">liomessi22@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">Addis Ababa, Ethiopia</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label> Username</label>
                <input
                  type="text"
                  placeholder="liomessi22"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label> Full Name</label>
                <input
                  type="text"
                  placeholder="Lionel Messi"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label> Birth Date</label>
                <input
                  type="text"
                  placeholder="04.05.2000"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label> Phone</label>
                <input
                  type="text"
                  placeholder="+25111121212"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label> Email</label>
                <input
                  type="text"
                  placeholder="liomessi22@gmail.com"
                  className="userUpdateInput"
                />
              </div>

              <div className="userUpdateItem">
                <label> Address</label>
                <input
                  type="text"
                  placeholder="Addis Ababa, Ethiopia"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img src={profile} alt="" className="userUpdateImg" />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
