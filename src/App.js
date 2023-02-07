
import { useState } from 'react';
import './App.css';
import logo from "./assets/logo.png"

function App() {
  const [passwordType, setPasswordType] = useState("password");
  const [eyeType, setEyeType] = useState(false)
    const [passwordInput, setPasswordInput] = useState("");
    const handlePasswordChange =(event)=>{
        setPasswordInput(event.target.value);
    }
    const togglePassword =()=>{
      if(passwordType==="password")
      {
        setPasswordType("text")
        setEyeType(true)
      }
      else {
        setEyeType(false)
        setPasswordType("password")
      }
    }
  return (
    <div className="App">

      <div className="container"><div className="trapezoid"></div></div>

      <div className="parent-block">
        <div className="block-1">
          <div></div>
          <img src={logo} alt='LOGO' ></img>

        </div>
        <div className="block-2">
          <div className='form-block'>
            <form>
            <div className="form-head">
              <p>Already Members </p>
              <a href='#'>Need help?</a>
            </div>
            <div className="form-body">
              <input type="text" className="input-text" placeholder="Enter your email" />
              <div className="password-block">

              <input type={passwordType} value={passwordInput } className="input-password" placeholder="Enter your password" id="id_password" onChange={handlePasswordChange} />
                {/* {eyeType ? ( */}
                  {/* <i class="far fa-eye-eye" id="togglePassword" onClick={togglePassword} style={{ cursor: "pointer" }}></i>) : ( */}
                  <i class="far fa-eye" id="togglePassword" onClick={togglePassword} style={{ marginLeft: " -30px", cursor: "pointer" }}></i>
                {/* )} */}
              </div>
            </div>
            <div className="form-footer">
              <button>SIGN IN</button>

            </div>
            </form>
          </div>
          <div>

          </div>
          <div className="block-2-footer">
          <a href="">Don't have an account yet?</a>
          <a href="">Create an account</a>
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
