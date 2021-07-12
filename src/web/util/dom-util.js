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

function AutocompleteSuggestion(query, highlighted) {
  let classList = ["suggestion"];
  if (highlighted) {
    classList.push("active");
  }
  return createElement("li", { innerText: query, id: query }, classList);
}

function Type(type) {
  return createElement("div", { textContent: type }, ["type", type]);
}

export { Type, AutocompleteSuggestion };
