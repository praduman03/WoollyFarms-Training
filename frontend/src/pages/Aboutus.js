import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Team from "../components/Team Part/Team";
import "../App.css";
import Piyush from "../assets/Piyush.png";
import Prad from "../assets/Prad.png";

function Aboutus() {
  return (
    <div>
      <Navbar />
      <div className="Aboutus-container">
        <h1>Meet the Team.</h1>
      </div>
      <div className="Aboutus-team">
        <Team
          img={Piyush}
          name="PIYUSH SINGH NEGI"
          detail="Our funky and fabulous team member, a full-stack wizard by day and dance floor sensation by night. Get ready to groove with their coding skills and infectious energy!"
          linkedin="https://www.linkedin.com/in/negi-2k05/"
          github="https://github.com/PiyushNegi1703"
        />
        <Team
          img={Prad}
          name="PRADUMAN SINGH K"
          detail="Our fullstack wizard, casts his code spells with finesse. A mature mind with a funky twist, he adds groove to our team's tech symphony."
          linkedin="https://www.linkedin.com/in/praduman03/"
          github="https://github.com/praduman03"
        />
      </div>
      <Footer />
    </div>
  );
}

export default Aboutus;
