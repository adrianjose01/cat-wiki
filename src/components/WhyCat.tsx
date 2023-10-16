import React from "react";
import image_1 from "../assests/image1.png";
import image_2 from "../assests/image2.png";
import image_3 from "../assests/image3.png";
import { Link } from "react-router-dom";

const WhyCat = () => {
  return (
    <div className="why-section">
      <div className="why-section-info">
        <div className="borderline" />
        <h1>Why should you have a cat?</h1>
        <p style={{ maxWidth: "27rem", marginBottom: "4rem" }}>
          Having a cat around you can actually trigger the release of calming
          chemicals in your body which lower your stress and anxiety level
        </p>
        <Link to="/why-cats" className="top-breeds-link">
          READ MORE
        </Link>
      </div>
      <div className="why-section-imgs">
        <div className="why-section-imgs-2">
          <img src={image_2} alt="Cats" width="350" />
          <img src={image_1} alt="Cats" width="250" />
        </div>
        <div>
          <img src={image_3} alt="Cats" width="250" />
        </div>
      </div>
    </div>
  );
};

export default WhyCat;
