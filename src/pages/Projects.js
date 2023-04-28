import Programs from "../components/Programs";
import Websites from "../components/Websites";
import { FaBrain, FaLaptop } from "react-icons/fa";

import React from "react";

const Projects = () => {
  return (
    <div id="project">
      <h1>
        Projects <FaLaptop />
      </h1>
      <p className="motto">Creating with purpose and passion</p>
      <Programs />
      <h2>Some Sample of my websites</h2>
      <Websites />
    </div>
  );
};

export default Projects;
