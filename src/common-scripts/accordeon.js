const accordeon = document.querySelector("#accordeon");

const action = (e) => {
    console.log(e);
    const isTitle = e.target.closest("[data-title]");

    if (isTitle) {
        const parent = isTitle.closest("[data-item]");
        parent.classList.toggle("active");
    }
};

accordeon.addEventListener("click", action);
