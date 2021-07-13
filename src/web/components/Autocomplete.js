import { AutocompleteSuggestion } from "../util/dom-util";
import { suggestions } from "../util/dom-references";
import { next, previous } from "../util/highlight-util";

class Autocomplete {
  highlightIndex;
  data = [];

  render(data) {
    if (data === undefined) return;
    this.data = data;
    this._rerenderWithNewHighlight();
  }

  _rerenderWithNewHighlight(index) {
    this.highlightIndex = index;
    let newSuggestions = this.data.map((el, i) => AutocompleteSuggestion(el, i === this.highlightIndex));
    suggestions.replaceChildren(...newSuggestions);
  }

  totalSuggestions() {
    return suggestions.childNodes.length;
  }

  highlight(increment) {
    if (increment === undefined) {
      this._rerenderWithNewHighlight();
      suggestions.scrollTo({ top: 0, behavior: "auto" });
      return;
    } else if (increment === 1) {
      let nextIndex = next(this.highlightIndex, this.totalSuggestions());
      this._rerenderWithNewHighlight(nextIndex);
    } else {
      let previousIndex = previous(this.highlightIndex, this.totalSuggestions());
      this._rerenderWithNewHighlight(previousIndex);
    }
    let element = this.getHighlightedElement();
    this.scrollToElement(element);
  }

  scrollToElement(element) {
    if (element !== undefined) {
      element.scrollIntoView({ block: "nearest", inline: "nearest" });
    }
  }

  getHighlightedElement() {
    if (this.highlightIndex === undefined) return;
    return suggestions.childNodes[this.highlightIndex];
  }

  getHighlightedSuggestion() {
    let highlightedElement = this.getHighlightedElement();
    if (highlightedElement === undefined) return;
    return highlightedElement.textContent;
  }
}

const autocomplete = new Autocomplete();

export { autocomplete };
