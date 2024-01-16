import React from "react"; 
// import './App.css';
// import line from "../images/line.jpeg";
import img from "../images/pholder.jpeg";

const Home = () => {
 return (
  <div>
   {/* <img src={line} className="lineimg" /> */}
   <div className="landing">
    <div className="homeflex">
     <p className="homemain">
      Welcome to NextGen
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
     {/* <p className="homep">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
    </div>
    <div className="landingimgs">
    <img src = {img} className="pholder3" />
     <div className="homeflex1">
      <img src = {img} className="pholder1" />
      <img src = {img} className="pholder2" />
     </div>
    </div>
   </div>

   <p className="text1">Lorem ipsum dolor sit amet</p>
   <p className="text2">Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
   <p className="text3">Lorem ipsum dolor sit amet</p>

   <button className="joinbtn">Join the cohort</button>

   <div className="homeflex2">
    <div className="homeflex3">
     <p className="homeh1">111111111111111111111111111</p>
     <p className="homeh2">2222222222222222222222222</p>
    </div>
    <div className="homeflex4">
     <p className="homeh3">33333333333333333333333333</p>
    </div>
    <div className="homeflex5">
     <p className="homeh2">4444444444444444444444444</p>
     <p className="homeh1">555555555555555555555</p>
    </div>
   </div>

   <div className="howto">
    <p className="text1">How to join us</p>
    <p className="text2">Easy streamline process</p>
    <div className="howtoflex">
     <p className="howtoh">111111111111111</p>
     <p className="howtoh">222222222222222</p>
     <p className="howtoh">333333333333333</p>
    </div>
    <button className="joinbtn">Join the cohort</button>
   </div>

   <div className="news">
    <p className="newst1">Stay updated on the latest news</p>
    <p className="newst2">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    <form>
        <input className="inputform" type="text" />
    </form>
    <button className="newsbtn">Subscribe</button>
   </div>

   <div className="footer">
    <h1 className="Logoname">NextGen</h1>
    <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
   </div>


  </div>
   
   
  );
}

export default Home;