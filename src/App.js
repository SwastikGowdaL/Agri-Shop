import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth } from "./components/firebase/firebase.utils";

const HatsPage = () => {
  return (
    <div>
      <Link to="/topics/12">Topics</Link>
      <h1>HATS Page</h1>
    </div>
  );
};

// const Topics = (props) => {
//   let params = useParams();
//   console.log(params);
//   return (
//     <div>
//       <h1>Topics</h1>
//     </div>
//   );
// };

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/hats" element={<HatsPage />} />
          <Route exact path="/shop" element={<ShopPage />} />
          <Route exact path="/signIn" element={<SignInAndSignUpPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
