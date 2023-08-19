import { Common, HIDDEN_SCREEN, VISIBLE_SCREEN } from "./Common.esm.js";
import { canvas } from "./Canvas.esm.js";
import { loader, DATALOADED_EVENT_NAME } from "./Loader.esm.js";

const LEVEL_SELECT_ID = "js-level-select-screen";
const LEVEL_SELECT_BUTTON_ID = "level-select__button";

const gameLevels = [
  {
    level: 1,
  },
  {
    level: 2,
  },
  {
    level: 3,
  },
];

class LevelSelect extends Common {
  constructor() {
    super(LEVEL_SELECT_ID);
    gameLevels.forEach((gameLevel) => this.createButton(gameLevel.level));
  }

  createButton(value) {
    const button = document.createElement("button");

    button.type = "button";
    button.classList.add(LEVEL_SELECT_BUTTON_ID);
    button.textContent = value;
    button.addEventListener("click", (event) =>
      this.buttonOnClickHandler(event)
    );
    this.element.appendChild(button);
  }

  buttonOnClickHandler(event) {
    this.changeVisibilityScreen(this.element, HIDDEN_SCREEN);
    this.changeVisibilityScreen(canvas.element, VISIBLE_SCREEN);
    this.loadLevel(event.currentTarget.value);
  }

  loadLevel(level) {
    const background = loader.loadImage("./img/levelbackground.png");
    window.addEventListener(DATALOADED_EVENT_NAME, () =>
      console.log("Załadowane obrazki")
    );
  }
}

export const levelSelect = new LevelSelect();
