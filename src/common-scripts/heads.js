const headList = document.querySelector("#headList");

const click = (e) => {
    const isBtn = e.target.closest("[data-btn]");

    if (isBtn) {
        const buttons = headList.querySelectorAll("[data-btn]");
        buttons.forEach((button) => {
            button.classList.remove("active");
        });
        isBtn.classList.toggle("active");
    }
};

headList.addEventListener("click", click);
