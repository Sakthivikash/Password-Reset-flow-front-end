import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export function Login() {
  const history = useHistory();
  function handleChange(event) {
    console.log(event.target.value);
  }

  return (
    <form>
      <div className="main">
        <div className="box">
          <img
            src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
            alt="profile-img"
          />
          <h2>Login</h2>
          <div className="input-field">
            <label for="email">
              <b>Email</b>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              onChange={handleChange}
            />
          </div>
          <div className="input-field">
            <label for="p-word">
              <b>Password</b>
            </label>
            <input
              type="password"
              id="p-word"
              placeholder="Enter your password"
              onChange={handleChange}
            />

            <p className="forgot-pw">
              <a href="/forgot-password">Forgot Password?</a>
            </p>

            <button
              onClick={() => {
                history.push("/home");
              }}
              type="submit"
              id="sign-btn"
              class="btn btn-primary"
            >
              Sign-in
            </button>

            <p style={{ textAlign: "center" }}>
              Don't have an account?
              <a href="/signup">Sign-up</a>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
}
