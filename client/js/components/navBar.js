function renderNavBar() {
  if (state.loggedInUserName == null) {
    document.querySelector(".navBar").innerHTML = `
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" onClick="renderEverything()">
        Samp
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse top_nav" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto ">
          <li class="nav-item">
            <a class="nav-link">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link display-3">About Us</a>
          </li>
          <li class="nav-item ">
            <a class="nav-link">Support</a>
          </li>
          <li class="nav-item ">
            <a class="nav-link">Contact Us</a>
          </li>
        </ul>
        <ul class="navbar navbar-nav navbar-right" style="display:flex;">
          <li class="nav-item ">
            <a class="nav-link" onClick="renderLogin()">
              Login
            </a>
          </li>
          <li>
            <li class="nav-item ">
              <a class="nav-link" onClick="renderSignUp()">
                Sign Up
              </a>
            </li>
          </li>
        </ul>
      </div>
    </div>
  </nav> `;
  } else {
    document.querySelector(".navBar").innerHTML = `
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" onClick="renderEverything()">
        Samp
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse top_nav" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto ">
          <li class="nav-item">
            <a class="nav-link">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link display-3">About Us</a>
          </li>
          <li class="nav-item ">
            <a class="nav-link">Support</a>
          </li>
          <li class="nav-item ">
            <a class="nav-link">Contact Us</a>
          </li>
        </ul>
        <ul class="navbar navbar-nav navbar-right" style="display:flex;">
          <li class="nav-item ">
            <a class="nav-link" onClick="logout()">
              Logout
            </a>
          </li>
          <li>
          </li>
        </ul>
      </div>
    </div>
  </nav>`;
  }
}

function logout() {
  fetch("/api/sessions", {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      state.loggedInUserName = null;
    });
}
