

// ---------------------------------------------------------------------------
// login switch
const loginlink = () => {
  const loginLayout = ` 
    <section id="login-section">
    <h2>Login</h2>
    <form action="" id="loginForm" onsubmit="loginFormSubmit(event)">
    <input
        type="text"
        name="email"
        placeholder="Email"
        autocomplete="off"
        required
    /><input
        type="password"
        name="password"
        placeholder="Password"
        autocomplete="off"
        required
    />
    <button type="submit">Login</button>


    </form>
    </section>
    <section id="register-and-social-media">
    <div>
    <span>Dont Have an Account? </span
    ><a href="#" onclick="registerlink()"> Register</a>
    <p>-OR-</p>
    </div>
    <div id="social-medial-auth">
    <div>
        <img src="./images/search.png" alt="" onclick="googleLogin()"/>
    </div>
  
    <div>
        <img src="./images/facebook.png" alt="" />
    </div>
    </div>
    </section>

`;
  let right = document.getElementById("picture");
  let left = document.getElementById("login-register-div");

  right.innerHTML = null;
  left.innerHTML = null;

  let img = document.createElement("img");
  img.style.display = "block";
  img.style.width = "100%";
  img.style.margin = "auto";
  img.style.marginTop = "25%";
  img.src = "";

  left.style.backgroundColor = "#DCF2F1";
  right.style.backgroundColor = "#F7F7F7";

  left.append(img);
  right.innerHTML = loginLayout;
};

// ---------------------------------------------------------------------------

// register switch
const registerlink = () => {
  const registerLayout = `
            <div id="register-div">
            <h2>Register</h2>
            <form action="" id="registerForm" onsubmit="registerFormSubmit(event)">
            <div>
                <input
                type="text"
                name="name"
                placeholder="First Name"
                autocomplete="off"
                required
                />
                <input
                type="text"
                name="lname"
                placeholder="Last Name"
                autocomplete="off"
                required
                />
            </div>
            <input
                type="email"
                name="email"
                placeholder="Email"
                autocomplete="off"
                required
            /><input
                type="number"
                name="age"
                placeholder="age"
                autocomplete="off"
                 required
            />
            
            <input
                type="password"
                name="password"
                placeholder="Password"
                autocomplete="off"
                required
            /><input
                type="password"
                name="confirm_password"
                placeholder="Confirm Password"
                autocomplete="off"
                required
            />
            <button type="submit">Register</button>


            <span style="color: red">Already Have Account? </span
            ><a href="#" onclick="loginlink()">Login</a>
            </form>
            </div>
    `;

  let right = document.getElementById("picture");
  let left = document.getElementById("login-register-div");
  right.innerHTML = null;
  left.innerHTML = null;

  left.innerHTML = registerLayout;

  let img = document.createElement("img");
  img.style.display = "block";
  img.style.width = "100%";
  img.style.margin = "auto";
  img.style.marginTop = "25%";
  img.src = "";

  right.style.backgroundColor = "#DCF2F1";
  left.style.backgroundColor = "#F7F7F7";

  right.append(img);
};

// ---------------------------------------------------------------------------

// display login page on load
const onload = () => {
  const loginLayout = ` 
        <section id="login-section">
        <h2>Login</h2>
        <form action="" id="loginForm" onsubmit="loginFormSubmit(event)">
        <input
            type="text"
            name="email"
            placeholder="Email"
            autocomplete="off"
            required
        /><input
            type="password"
            name="password"
            placeholder="Password"
            autocomplete="off"
            required
        />
        <button type="submit">Login</button>

        </form>
        </section>
        <section id="register-and-social-media">
        <div>
        <span>Dont Have an Account? </span
        ><a href="#" onclick="registerlink()"> Register</a>
        <p>-OR-</p>
        </div>
        <div id="social-medial-auth">
        <div>
            <img src="./images/search.png" alt=""  onclick="googleLogin()"/>
        </div>
        <div>
            <img src="./images/facebook.png" alt="" />
        </div>
        </div>
        </section>
   
`;
  let right = document.getElementById("picture");
  let left = document.getElementById("login-register-div");
  let img = document.createElement("img");
  img.style.display = "block";
  img.style.width = "100%";
  img.style.margin = "auto";
  img.style.marginTop = "25%";
  img.src = "";

  left.style.backgroundColor = "#DCF2F1";
  right.style.backgroundColor = "#F7F7F7";

  left.append(img);
  right.innerHTML = loginLayout;
};
onload();

// ---------------------------------------------------------------------------


