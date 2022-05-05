import "./App.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Login } from "./Login";
import { SignUp } from "./SignUp";
import { Route, Switch } from "react-router-dom";
import { ForgotPassword, RandStrPage, ResetPassword } from "./ForgotPassword";
import { HomePage } from "./HomePage";

function App() {
  return (
    <div classNameName="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/rand-str-verify">
          <RandStrPage />
        </Route>
        <Route path="/forgot-password">
          <ForgotPassword />
        </Route>
        <Route path="/reset-password">
          <ResetPassword />
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

function Home() {
  const history = useHistory();
  const login = () => {
    history.push("/login");
  };
  return (
    <div className="main1">
      <h1>Welcome to all to the Url Shortener App...✨🎊🎉</h1>
      <div className="home-box">
        <button
          style={{ maxWidth: "200px" }}
          onClick={() => {
            history.push("/signup");
          }}
          type="button"
          className="btn btn-primary"
        >
          Sign-up
        </button>
        <p style={{ margin: "10px", textAlign: "center" }}>Or</p>
        <button
          style={{ maxWidth: "200px" }}
          onClick={login}
          type="button"
          className="btn btn-primary"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default App;
