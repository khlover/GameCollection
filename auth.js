auth.onAuthStateChanged((user) => {
  if (user) {
    var uid = user.uid;
    db.collection(uid).onSnapshot((snapshot) => {
      setupGame(snapshot.docs);
    });
    document.querySelectorAll(".logged-out").forEach((el) => {
      el.style.display = "none";
    });
    document.querySelectorAll(".logged-in").forEach((el) => {
      el.style.display = "block";
    });
  } else {
    document.querySelectorAll(".logged-out").forEach((el) => {
      el.style.display = "block";
    });
    document.querySelectorAll(".logged-in").forEach((el) => {
      el.style.display = "none";
    });
    setupGame([]);
  }
});

//Add Game
const addGame = document.querySelector("#newGame-form");
addGame.addEventListener("submit", (e) => {
  e.preventDefault();
  uid = firebase.auth().currentUser.uid;
  db.collection(uid)
    .doc(addGame["name"].value)
    .set({
      gameName: addGame["name"].value,
      gameBio: addGame["bio"].value,
      gameUrl: addGame["imgUrl"].value,
      gamePlatform: addGame["platforms"].value,
      gamePrice: addGame["prices"].value,
    })
    .then(() => {
      const modal = document.querySelector("#modal-addGame");
      addGame.reset();
      modal.style.display = "none";
      location.reload();
    });
});

//Signup
const signupForm = document.querySelector("#register-form");
signupForm.addEventListener("submit", (e) => {
  const email = signupForm["register-email"].value;
  const password = signupForm["register-password"].value;
  e.preventDefault();
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((cred) => {
      const modal = document.getElementById("modal-signup");
      modal.style.display = "none";
      signupForm.reset();
      signupForm.querySelector(".error").innerHTML = "";
    })
    .catch((err) => {
      signupForm.querySelector(".error").innerHTML = err.message;
      signupForm.reset();
    });
});

//Log out
const logout = document.querySelector("#logout-link");
logout.addEventListener("click", (e) => {
  e.preventDefault();
  auth.signOut().then(() => {});
});

//login
const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", (e) => {
  let email = loginForm["login-email"].value;
  let password = loginForm["login-password"].value;
  auth
    .signInWithEmailAndPassword(email, password)
    .then((cred) => {
      const loginmodal = document.getElementById("modal-login");
      loginmodal.style.display = "none";
      loginForm.reset();
      loginForm.querySelector(".error").innerHTML = "";
    })
    .catch((err) => {
      loginForm.querySelector(".error").innerHTML = err.message;
      loginForm.reset();
    });
});
