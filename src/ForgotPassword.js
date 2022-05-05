import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export function ForgotPassword() {
  const history = useHistory();

  return (
    <form>
      <div className="box" style={{ padding: "20px" }}>
        <div className="input-field">
          <label for="email">
            <b>Email</b>
          </label>
          <input type="email" id="email" placeholder="Enter your email" />
          <label for="email">We will send a link to seset your password</label>
        </div>
        <button
          style={{ margin: "10px" }}
          type="submit"
          id="signup-btn"
          class="btn btn-success"
          onClick={() => history.push("/rand-str-verify")}
        >
          Send Mail
        </button>

        <p style={{ margin: "10px" }}>
          Ohh🤔,Now i am remembered my password! <a href="/login">Login</a>{" "}
          <hr />
        </p>

        <p style={{ margin: "none" }}>
          <a href="/login">Login</a> Or <a href="/signup">Sign-up</a>
        </p>
      </div>
    </form>
  );
}

export function RandStrPage() {
  const history = useHistory();

  return (
    <form>
      <div className="main">
        <div className="box">
          <div className="input-field">
            <label for="string" style={{ fontWeight: "bold", margin: "5px" }}>
              Please enter the string send your in your email...
            </label>
            <input type="string" id="string" placeholder="Enter here" />
          </div>
          <label for="signup-btn">
            Please Click the below link to reset your password.
          </label>
          <button
            style={{ margin: "10px" }}
            type="submit"
            id="signup-btn"
            class="btn btn-success"
            onClick={() => history.push("/reset-password")}
          >
            Click here
          </button>
        </div>
      </div>
    </form>
  );
}

export function ResetPassword() {
  const history = useHistory();

  return (
    <form>
      <h1 style={{ textAlign: "center", margin: "30px" }}>Reset Password</h1>
      <div className="main">
        <div className="box1">
          <div className="input-field">
            <label for="new-password">
              <b>New Password</b>
            </label>
            <input
              type="password"
              id="new-password"
              placeholder="New password"
            />
          </div>
          <div className="input-field">
            <label for="confirm-password">
              <b>Confirm Password</b>
            </label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm password"
            />
          </div>
          <button
            onClick={() => {
              history.push("/login");
            }}
            type="submit"
            id="sign-btn"
            class="btn btn-primary"
          >
            Confirm
          </button>
          <p style={{ margin: "10px" }}>
            <hr />
            Ohh🤔,Now i am remembered my password! <a href="/login">
              Login
            </a>{" "}
          </p>
        </div>
      </div>
    </form>
  );
}
