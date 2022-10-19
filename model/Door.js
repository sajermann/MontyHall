export default class Door {
  #number;
  #hasPresent;
  #isSelected;
  #isOpened;

  constructor(
    number,
    hasPresent = false,
    isSelected = false,
    isOpened = false
  ) {
    this.#number = number;
    this.#hasPresent = hasPresent;
    this.#isSelected = isSelected;
    this.#isOpened = isOpened;
  }

  get number() {
    return this.number;
  }
  get hasPresent() {
    return this.hasPresent;
  }
  get isSelected() {
    return this.isSelected;
  }
  get isOpened() {
    return this.isOpened;
  }

  unselect(){
    const isSelected = false;
    return new Door(this.number, this.#hasPresent, isSelected, this.isOpened);
  }

  toggleSelection() {
    const isSelected = !this.isSelected;
    return new Door(this.number, this.#hasPresent, isSelected, this.isOpened);
  }

  open() {
    const open = true;
    return new Door(this.number, this.#hasPresent, this.isSelected, open);
  }
}
