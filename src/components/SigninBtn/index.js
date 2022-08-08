import "./style.css";
import metamask from "../../assets/Icons/metamask.svg";
import AppleIcon from "../../assets/Icons/apple";
import googlePlayIcon from "../../assets/Icons/googlePlay.png";
const SigninBtn = (props) => {
  return (
    <div className="btn-container">
      <div className="row m-0">
        <div className="sign-btn d-flex justify-content-center align-items-center mb-5">
          <span className="me-3">Sign in with</span> 
          <span>
            <img className="me-3" src={metamask} alt="" width="30px" /> METAMASK
          </span>
        </div>
      </div>
      <div style={{ paddingLeft: "20px" }}>
        <span className="me-3">or</span>
        <AppleIcon color={props.color}  />
        <img src={googlePlayIcon} alt=""></img>
      </div>
      <div className="backGrey" style={{backgroundColor: props.background}}>
      </div>
    </div>
  );
};

export default SigninBtn;
