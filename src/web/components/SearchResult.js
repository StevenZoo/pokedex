import { Type } from "../util/dom-util";
import { description, nameElement, pokemonId, pokemonPicture, typesElement } from "../util/dom-references";

function clearSearchResult() {
  description.innerText = "";
  nameElement.innerText = "";
  pokemonId.innerText = "";
  pokemonPicture.setAttribute("src", `#`);
  pokemonPicture.classList.add("hide");
  typesElement.replaceChildren(...[]);
}

function renderSearchResult(data) {
  if (data === undefined) return;
  else if (data === null) {
    clearSearchResult();
    return;
  }

  description.innerText = data.description;
  nameElement.innerText = data.name;
  pokemonId.innerText = `#${String(data.id).padStart(3, "0")}`;
  pokemonPicture.setAttribute("src", `artwork/${data.id}.png`);
  pokemonPicture.classList.remove("hide");

  const types = data.type.map(Type);
  typesElement.replaceChildren(...types);
}

export { renderSearchResult };
