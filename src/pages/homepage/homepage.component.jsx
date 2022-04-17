import React from "react";

import "./homepage.styles.scss"
import "../../components/menu-item/menu-item.component"
import Directory from "../../components/directory/directory.component";

const Homepage = () => (
  <div className="homepage">
   <Directory />
  </div>
);

export default Homepage;
