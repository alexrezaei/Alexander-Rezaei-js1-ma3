// Question 2
const resultsDiv = document.querySelector(".results");
const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=ce00987f1b9e469b95e40a5afd656cfd";

async function getGames() {
  try {
    const res = await fetch(url);
    const games = await res.json();
    for (i = 0; i < 7; i++) {
      const para = document.createElement("p");
      const node = document.createTextNode(
        `${games.results[i].name} ${games.results[i].rating} ${games.results[i].tags.length}`
      );
      para.appendChild(node);
      resultsDiv.appendChild(para);
    }
  } catch (err) {
    resultsDiv.innerHTML = `error: ${err}`;
  }
}

getGames();
