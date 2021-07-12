import { Type } from "../util/dom-util";
import { description, nameElement, pokemonId, pokemonPicture, typesElement } from "../util/dom-references";

function renderSearchResult(data) {
  description.innerText = data.description;
  nameElement.innerText = data.name;
  pokemonId.innerText = `#${String(data.id).padStart(3, "0")}`;
  pokemonPicture.setAttribute("src", `artwork/${data.id}.png`);

  const types = data.type.map(Type);
  typesElement.replaceChildren(...types);
}

export { renderSearchResult };
