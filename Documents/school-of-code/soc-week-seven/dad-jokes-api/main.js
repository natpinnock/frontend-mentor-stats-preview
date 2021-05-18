async function getJoke() {
  let response = await fetch("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" },
  });
  let data = await response.json();
  let p = document.querySelector("p");
  p.innerText = data.joke;
}

getJoke();
