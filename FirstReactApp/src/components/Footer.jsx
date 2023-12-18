import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSquareXTwitter,
  faSquareReddit,
  faSquareInstagram,
  faSquareFacebook,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className="footer-container">
      <a className="footer-icon" href="#">
        <FontAwesomeIcon icon={faSquareXTwitter} />
      </a>
      <a className="footer-icon" href="#">
        <FontAwesomeIcon icon={faSquareFacebook} />
      </a>
      <a className="footer-icon" href="#">
        <FontAwesomeIcon icon={faSquareInstagram} />
      </a>
      <a className="footer-icon" href="#">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a className="footer-icon" href="#">
        <FontAwesomeIcon icon={faSquareReddit} />
      </a>
    </div>
  );
}
export default Footer;
