import React from "react";
import oriental from "../assests/topfour/oriental.jpg";
import cheetoh from "../assests/topfour/cheetoh.jpg";
import american from "../assests/topfour/american_bobtail.jpg";
import snow from "../assests/topfour/shnowshoe.jpg";
import { Link } from "react-router-dom";

const TopFour = () => {
  return (
    <div className="top-four">
      <Link to="/breed/orie">
        <img src={oriental} alt="Cat" />
        <p>Oriental</p>
      </Link>
      <Link to="/breed/chee">
        <img src={cheetoh} alt="Cat" />
        <p>Cheetoh</p>
      </Link>
      <Link to="/breed/abob">
        <img src={american} alt="Cat" />
        <p>American Bobtail</p>
      </Link>
      <Link to="/breed/snow">
        <img src={snow} alt="Cat" />
        <p>Snowshoe</p>
      </Link>
    </div>
  );
};

export default TopFour;
