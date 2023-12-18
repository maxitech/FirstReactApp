import './Info.css';
<Info className="css"></Info>;
import profileImage from '../images/profile_pic.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Info() {
  return (
    <div className="info-container">
      <img
        className="profile-pic"
        src={profileImage}
        alt="Profile picture"
        width="317px"
        height="317px"
      ></img>

      <div className="contact-container">
        <h1 className="name">Maximilian Stadlmeyer</h1>
        <h2 className="job">Frontend Developer</h2>

        <a className="website-link" href="#">
          maxstadlmeyer.dev
        </a>

        <a className="email-link" href="#">
          <div className="email-btn">
            <FontAwesomeIcon className="email-icon" icon={faEnvelope} />
            Email
          </div>
        </a>
      </div>
    </div>
  );
}
export default Info;
