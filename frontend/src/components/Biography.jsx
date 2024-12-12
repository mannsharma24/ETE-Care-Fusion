import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          Global Health Medical Center, founded in 1990, is a premier healthcare facility committed to delivering comprehensive medical care. With a mission to provide top-quality patient-centered services, the hospital integrates advanced technology, skilled professionals, and compassionate care.
          </p>
          <p>We are all in 2024!</p>
          <p>We are working on a Collage project.</p>
          <p>
          The hospital features state-of-the-art facilities, including emergency care, surgical units, maternity services, diagnostic imaging, and specialized departments such as cardiology, oncology, and orthopedics. It boasts a modern ICU, advanced laboratory services, and a dedicated rehabilitation center.
          </p>
          <p>To be a leading healthcare provider, advancing medical science, and improving lives through dedication to quality care, education, and innovation.</p>
          <p>Coding is fun!</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
