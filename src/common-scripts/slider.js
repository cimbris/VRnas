class Slider {
    sliderElement = null;
    lenta = null;
    sliderAmount = 0;
    currentSlideCounter = 0;
    currentSlideWidth = 0;

    constructor() {}

    _initial(selector) {
        this.sliderElement = document.querySelector(selector);

        const wrapperHidden = this.#wrapperCreator();
        this.sliderElement.append(wrapperHidden);

        const { leftArrow, rightArrow } = this.#arrowsCreator();
        this.sliderElement.append(leftArrow, rightArrow);

        const paginationWrapper = this.#paginationCreator();
        this.sliderElement.append(paginationWrapper);

        this.#eventHandler();
    }

    #eventHandler() {
        this.sliderElement.addEventListener("click", (e) => {
            const isRightArrow = e.target.closest('[data-arrow="right"]');
            const isLeftArrow = e.target.closest('[data-arrow="left"]');

            if (isRightArrow) {
                this.#directionChoice("right");
            } else if (isLeftArrow) {
                this.#directionChoice("left");
            }
        });
    }

    #slideMotion() {
        this.lenta.style.transform = `translateX(-${this.currentSlideCounter * this.currentSlideWidth}px)`;
    }

    #directionChoice(direction) {
        if (direction == "right") {
            this.currentSlideCounter =
                this.currentSlideCounter < this.sliderAmount - 1
                    ? this.currentSlideCounter + 1
                    : 0;
        } else if (direction == "left") {
            this.currentSlideCounter =
                this.currentSlideCounter > 0
                    ? this.currentSlideCounter - 1
                    : this.sliderAmount - 1;
        }
        this.#slideMotion();
    }

    #wrapperCreator() {
        const wrapperHidden = document.createElement("div");
        wrapperHidden.classList.add("wrapper-hidden");
        this.lenta = document.createElement("div");
        this.lenta.classList.add("lenta");
        this.sliderAmount = this.sliderElement.children.length;
        this.currentSlideWidth = this.sliderElement.children[0].offsetWidth;
        this.lenta.append(...this.sliderElement.children);
        wrapperHidden.append(this.lenta);
        return wrapperHidden;
    }

    #arrowsCreator() {
        const leftArrow = document.createElement("button");
        leftArrow.classList.add(...["arrow", "arrow-left"]);
        leftArrow.setAttribute("data-arrow", "left");

        const rightArrow = document.createElement("button");
        rightArrow.classList.add(...["arrow", "arrow-right"]);
        rightArrow.setAttribute("data-arrow", "right");

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
