const output = document.getElementById("Information");

function searchCharacter() {
  const input = document.getElementById("SignUp").value;

  fetch("https://cataas.com/cat/gif" + input)
    .then((res) => res.json())
    .then((data) => {
      const firstResult = data.results[0];
      const nameElement = document.createElement("h1");
      nameElement.innerText = firstResult.name;

      const heightElement = document.createElement("p");
      heightElement.innerText = "Ist so groß: " + firstResult.height;

      output.appendChild(nameElement);
      output.appendChild(heightElement);
    });
}

const button = document.getElementById("ClickMe");
button.addEventListener("click", searchCharacter);

//-----------------------
fetch("https://cataas.com/cat/gif")
  .then((res) => res.json())
  .then((data) => {
    output.innerHTML = `<h1>${data.name}</h1><p>${data.height}cm</p>`;
    const catwalk = data.catwalk;

    //Zweiter fetch request ist vom ergebnis des ersten Abhängig:
    fetch(catwalk)
      .then((res) => res.json())
      .then((cats) => {
        output.innerHTML += `<p>Catwalk is: ${cats.name}</p>`;
      });
  });
