async function loginFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#username-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();
  console.log("***username: " + username + " password: " + password);
  if (username && password) {
    const response = await fetch("/api/users/login", {
      method: "post",
      body: JSON.stringify({
        username: username,
        password: password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    
    const obj = await response.json();

    if (response.ok) {
      document.location.replace("/dashboard/");
    } else {
      alert(response.statusText);
      console.log(response.statusText);
    }
  } else {
    alert("Please enter your login information");
  }
}

document.querySelector(".login-form").addEventListener("submit", loginFormHandler);
