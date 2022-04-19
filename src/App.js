import React from "react";
import { Route, Routes,Link ,useParams } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";

import ShopPage from "./pages/shop/shop.component";

const HatsPage = props => { 
  return (
    <div>
       <Link to="/topics/12">Topics</Link>
      <h1>HATS Page</h1>
    </div>
  );
};

const Topics = props => {
  let params = useParams();
  console.log(params); 
  return (
    <div>
      <h1>Topics</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/hats" element={<HatsPage />} />
        <Route exact path="/topics/:id" element={<Topics />} />
        <Route exact path="/shop" element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
