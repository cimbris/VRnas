class Slider {
    sliderElement = null;

    constructor() {}

    _initial(selector) {
        this.sliderElement = document.querySelector(selector);
        const wrapperHidden = this.#wrapperCreator();
        this.sliderElement.append(wrapperHidden);
        const { leftArrow, rightArrow } = this.#arrowsCreator();
        this.sliderElement.append(leftArrow, rightArrow);
        console.log(this.sliderElement);
    }

    #wrapperCreator() {
        const wrapperHidden = document.createElement("div");
        const lenta = document.createElement("div");
        lenta.append(...this.sliderElement.children);
        wrapperHidden.append(lenta);
        return wrapperHidden;
    }

    #arrowsCreator() {
        const leftArrow = document.createElement("button");
        const rightArrow = document.createElement("button");
        return { leftArrow, rightArrow };
    }
}

const ourSlider = new Slider();
ourSlider._initial("#slider");
