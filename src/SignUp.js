import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export function SignUp() {
  const history = useHistory();
  return (
    <form>
      <div className="main">
        <div className="box">
          <h2 style={{ margin: "10px" }}>
            Create Account
            <hr style={{ color: "blue" }} />
          </h2>

          <div className="input-field">
            <label for="f-namel">
              <b>FirstName</b>
            </label>
            <input type="text" id="f-name" placeholder="Enter your name" />
          </div>
          <div className="input-field">
            <label for="l-name">
              <b>LastName</b>
            </label>
            <input type="text" id="l-name" placeholder="Enter your name" />
          </div>
          <div className="input-field">
            <label for="email">
              <b>Email</b>
            </label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="input-field">
            <label for="p-word">
              <b>Password</b>
            </label>
            <input
              type="password"
              id="p-word"
              placeholder="Enter your password"
            />
            <button
              onClick={() => {
                history.push("/login");
              }}
              type="submit"
              id="signup-btn"
              class="btn btn-success"
            >
              Sign-up
            </button>

            <p style={{ marginTop: "10px" }}>
              Already registered User? <a href="/login">Login</a>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
}
