function renderLogin() {
  document.querySelector("#showLoginSignup").innerHTML = `
    <section class='log-in'>
      <form onSubmit="login(event)">
<div class="section section-signup" style="background-image: url('https://raw.githubusercontent.com/creativetimofficial/now-ui-kit/master/assets/img/bg4.jpg'); background-size: cover; background-position: top center; min-height: 700px;">
  <div class="container">
    <div class="row">
      <div class="card card-signup" data-background-color="orange">
        <form class="form" method="" action="">
          <div class="card-header text-center">
            <h3 class="card-title title-up">Sign Up</h3>
            <div class="social-line">
              <a href="#pablo" class="btn btn-neutral btn-facebook btn-icon btn-round">
                <i class="fab fa-facebook-square"></i>
              </a>
              <a href="#pablo" class="btn btn-neutral btn-twitter btn-icon btn-lg btn-round">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#pablo" class="btn btn-neutral btn-google btn-icon btn-round">
                <i class="fab fa-google-plus"></i>
              </a>
            </div>
          </div>
          <div class="card-body">
            <div class="input-group no-border">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="now-ui-icons users_circle-08"></i>
                </span>
              </div>
              <input type="text" class="form-control" placeholder="First Name...">
            </div>
            <div class="input-group no-border">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="now-ui-icons text_caps-small"></i>
                </span>
              </div>
              <input type="text" placeholder="Last Name..." class="form-control">
            </div>
            <div class="input-group no-border">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="now-ui-icons ui-1_email-85"></i>
                </span>
              </div>
              <input type="text" class="form-control" placeholder="Email...">
            </div>
          </div>
          <div class="card-footer text-center">
            <a href="#pablo" class="btn btn-neutral btn-round btn-lg">Get Started</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
      </form>
    </section>
  `;
}

function login(event) {
  event.preventDefault();
  const form = event.target;

  // takes data from the form html tag and converts it into an object literal.
  const data = Object.fromEntries(new FormData(form));

  fetch("/api/sessions", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.error) {
        renderLogin();
        renderError(res.error);
      } else {
        const userName = res;
        state.loggedInUserName = userName;
        renderPokemonList();
      }
    });
}

function renderError(errorMessage) {
  const page = document.querySelector("#page");
  page.innerHTML =
    `<h2 style='color: red'>${errorMessage}</h2>` + page.innerHTML;
}
