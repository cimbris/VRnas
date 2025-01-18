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
        leftArrow.classList.add(...["arrow", "arrow-left"]);

        const rightArrow = document.createElement("button");
        rightArrow.classList.add(...["arrow", "arrow-right"]);

        return { leftArrow, rightArrow };
    }

    #paginationCreator() {
        const paginationWrapper = document.createElement("div");
        paginationWrapper.classList.add("pagination-wrapper");

        for (let i = 0; i < this.sliderAmount; i++) {
            const paginationBtn = document.createElement("button");
            paginationBtn.classList.add("pagination-btn");
            paginationWrapper.append(paginationBtn);
        }

        return paginationWrapper;
    }
}

const ourSlider = new Slider();
ourSlider._initial("#slider");
