const api = "https://hindi-jokes-api.onrender.com/jokes?api_key=af63cba5de973884d584674c8298";
var joke;

async function getRESULT() {
  const response = await fetch(api);
  const data = await response.json();
  return data;
}

function displayJoke(joke) {
  var display = document.querySelector(".jokeBox");
  display.innerHTML = joke;
}

// Initial joke retrieval
getRESULT().then(myData => {
  joke = myData.jokeContent;
  displayJoke(joke);
});

var button = document.querySelector("button");

button.addEventListener("click", () => {
  getRESULT().then(myData => {
    joke = myData.jokeContent;
    displayJoke(joke);
  });
});
