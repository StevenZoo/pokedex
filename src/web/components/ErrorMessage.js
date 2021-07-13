import { errorMessage } from "../util/dom-references";


function hideErrorMessage() {
  errorMessage.classList.add("hide");
}

function showErrorMessage() {
  errorMessage.classList.remove("hide");
}

export { hideErrorMessage, showErrorMessage };
