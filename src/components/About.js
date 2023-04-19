import React from "react";
import "./About.css";

function About() {
  return (
    <div>
      <div className="container">
        <div className="container1">
          <div className="item-1">
            <p>OUR COMPANY</p>
            <h2>
              Extension Technologies Pvt Ltd is your trusted partner in ERP &
              CRM services and support
            </h2>
          </div>

          <div className="item-2">
            <p>
              Extension Technologies Pvt Ltd incepted in the year 2018 is a
              privately-owned SaaS-based ERP and CRM Support and Services
              Company working with the aim to help businesses automate their
              processes with the use of the latest technology. We, serve you
              with cutting-edge technologies that allow businesses to follow the
              best practices.
            </p>
          </div>

          <div className="container2">
            {/* <div className="khaali"> 

  </div> */}

            <div className="item-3">
              <img
                src="https://i0.wp.com/extensionerp.com/wp-content/uploads/2020/05/OEVLWU0-800x450.jpg"
                height="100%"
                width="100%"
                alt="image 1"
              />
            </div>

            <div className="item-4">
              <img
                src="https://i0.wp.com/extensionerp.com/wp-content/uploads/2020/05/2480494-800x450.jpg"
                height="100%"
                width="100%"
                alt="image 1"
              />
            </div>

            <div className="item-5">
              <img
                src="https://i0.wp.com/extensionerp.com/wp-content/uploads/2020/05/43139-scaled-800x450.jpg"
                height="100%"
                width="100%"
                alt="image 1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
