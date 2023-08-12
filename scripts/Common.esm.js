export const HIDDEN_CLASS = "hidden";
export const HIDDEN_SCREEN = false;
export const VISIBLE_SCREEN = true;

export class Common {
  constructor(elementId) {
    this.element = this.bindToElement(elementId);
  }

  bindToElement(elementToFindBYId) {
    const element = document.getElementById(elementToFindBYId);

    if (!element) {
      throw new Error(`Nie znaleziono elementu o ID: ${elementToFindBYId}`);
    }
    return element;
  }

  changeVisibilityScreen(element, mode) {
    mode === VISIBLE_SCREEN
      ? element.classList.remove(HIDDEN_CLASS)
      : element.classList.add(HIDDEN_CLASS);
  }
}
