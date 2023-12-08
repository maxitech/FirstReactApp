import profileImage from '../images/profile_pic.png';

function Info() {
  return (
    <div>
      <img src={profileImage} alt="Profile picture" width="317px" height="317px"></img>
      <h1>Maximilian Stadlmeyer</h1>
      <h2>Frontend Developer</h2>
      <a>maxstadlmeyer.dev</a>
      <a>Email</a>
    </div>
  );
}
export default Info;
