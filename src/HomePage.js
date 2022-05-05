import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export function HomePage() {
  return (
    <div>
      <AppBar id="appbar" position="absolute">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            UrlShortener
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <hr />
      <div className="container">
        <h1 style={{ margin: "10px", textAlign: "center" }}>URL Shortener</h1>

        <div class="input-group mb-3" style={{ margin: "30px" }}>
          <div class="input-group-append">
            <input
              id="url-inp"
              type="text"
              name="fullurl"
              class="form-control"
              placeholder="Enter your full URL here"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
          </div>
          <div class="input-group-append">
            <input
              class="btn btn-primary"
              type="submit"
              value="Submit"
              style={{ maxWidth: "80px" }}
            />
          </div>
        </div>

        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
}

function Cards() {
  return (
    <div class="card">
      <div class="card-header">
        <a href="#">Shorted url</a>
      </div>
      <div class="card-body">
        <blockquote class="blockquote mb-0">
          <p>Long Url</p>
          <hr />
          <footer class="blockquote-footer">Count: 0</footer>
        </blockquote>
      </div>
    </div>
  );
}
