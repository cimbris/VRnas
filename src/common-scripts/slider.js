class Slider {
    sliderElement = null;
    sliderAmount = 0;

    constructor() {}

    _initial(selector) {
        this.sliderElement = document.querySelector(selector);

        const wrapperHidden = this.#wrapperCreator();
        this.sliderElement.append(wrapperHidden);

        const { leftArrow, rightArrow } = this.#arrowsCreator();
        this.sliderElement.append(leftArrow, rightArrow);

        const paginationWrapper = this.#paginationCreator();
        this.sliderElement.append(paginationWrapper);
    }

    #wrapperCreator() {
        const wrapperHidden = document.createElement("div");
        const lenta = document.createElement("div");
        this.sliderAmount = this.sliderElement.children.length;
        lenta.append(...this.sliderElement.children);
        wrapperHidden.append(lenta);
        return wrapperHidden;
    }

    #arrowsCreator() {
        const leftArrow = document.createElement("button");
        const rightArrow = document.createElement("button");
        return { leftArrow, rightArrow };
    }

    #paginationCreator() {
        const paginationWrapper = document.createElement("div");

        for (let i = 0; i < this.sliderAmount; i++) {
            const paginationBtn = document.createElement("button");
            paginationWrapper.append(paginationBtn);
        }

        return paginationWrapper;
    }
}

const ourSlider = new Slider();
ourSlider._initial("#slider");
