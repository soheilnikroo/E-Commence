import React from "react";
import Directory from "../../components/Directory/Directory.component";

import "./HomePage.styles.scss";

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

export default HomePage;
