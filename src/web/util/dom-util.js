function createElement(el, options = {}, classes = []) {
  let element = document.createElement(el);
  let entries = Object.entries(options);
  for (let [property, value] of entries) {
    element[property] = value;
  }

  if (classes.length > 0) {
    element.classList.add(...classes);
  }
  return element;
}

function AutocompleteSuggestion(data, highlighted) {
  let classList = ["suggestion"];
  if (highlighted) {
    classList.push("active");
  }

  let listElement = createElement("li", {}, classList);
  let sprite = createElement("img", { src: data.sprite }, ["vertical-center"]);
  let text = createElement("span", { innerText: data.name }, ["vertical-center"]);

  listElement.append(sprite);
  listElement.append(text);

  return listElement;
}

function Type(type) {
  return createElement("div", { textContent: type }, ["type", type]);
}

export { Type, AutocompleteSuggestion };
