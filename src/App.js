import logo from "./logo.svg";
import "./App.css";
import pic from "./assests/profile_pic.jpeg";

function App() {
  return (
    <div className="containermain">
    <div className="App">
      <div className="container">
        <div className="sidebar">
          <div className="img-conatiner">
            <img src={pic} alt="profile-pic" />
          </div>
          <div className="education-conatiner">
            <div className="heading">
              <h2>EDUCATION</h2>
              <hr />
            </div>
            <div className="content">
              <h4>ENTER YOUR MAJOR</h4>
              <p>Name of Your University</p>
              <p>2006-2009</p>
            </div>
            <div className="content">
              <h4>ENTER YOUR MAJOR</h4>
              <p>Name of Your University</p>
              <p>2009-20011</p>
            </div>
          </div>
          <div className="reference-container">
            <div className="heading">
              <h2>REFERENCE</h2>
              <hr></hr>
            </div>
            <div className="content">
              <h4>Sara Taylore</h4>
              <p>Director | Company Name</p>
              <p>T: +1 234 56789</p>
            </div>
            <div className="content">
              <h4>Micke Anderson</h4>
              <p>Web Developer | Company</p>
              <p>T: +1 234 56789</p>
            </div>
          </div>

          <div className="contact-container">
            <div className="phone-details">
              <div className="phone-header">
                <div className="color-box"></div>
                <div className="phone-number">
                  <h2>Phone</h2>
                </div>
              </div>

              <div className="phone-content">
                <p>+000 123 456 789</p>
              </div>
            </div>

            <div className="email-details">
              <div className="email-header">
                <div className="color-box"></div>
                <div className="email">
                  <h2>Email</h2>
                </div>
              </div>

              <div className="email-content">
                <p>username@gmail.com</p>
              </div>
            </div>


            <div className="website-details">
              <div className="website-header">
                <div className="color-box"></div>
                <div className="website">
                  <h2>website</h2>
                </div>
              </div>

              <div className="website-content">
                <p>urwebsitename.com</p>
              </div>
            </div>

            <div className="address-details">
              <div className="address-header">
                <div className="color-box"></div>
                <div className="address">
                  <h2>Address</h2>
                </div>
              </div>

              <div className="address-content">
                <p>your street address,</p><br/>
                <p>SS Street City/Zip Code - 456</p>
              </div>
            </div>
          </div>
        </div>
        <div className="main-container">
         <div className="desc-conatiner">
          <h2>
           <b> KAREN</b> RICHARDS
          </h2>
          <h5>PROFESSIONAL TITLE</h5>
         </div>

         <div className="about-container">
          <h4>ABOUT ME</h4>
          <hr />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque officiis nostrum est aperiam voluptatem amet praesentium, necessitatibus culpa ratione repellat temporibus architecto in dolorum eveniet maxime omnis magni neque consequatur.</p>
         </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
