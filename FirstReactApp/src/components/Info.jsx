import profileImage from '../images/profile_pic.png';

function Info() {
  return (
    <div>
      <img src={profileImage} alt="Profile picture" width="317px" height="317px"></img>
      <h1>Maximilian Stadlmeyer</h1>
      <h2>Frontend Developer</h2>
      <div>
        <a href="#">maxstadlmeyer.dev</a>
      </div>
      <a href="#">Email</a>
    </div>
  );
}
export default Info;
