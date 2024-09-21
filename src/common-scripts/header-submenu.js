const menuList = document.querySelector("#menuList");

const toggleVisibleSublist = (e) => {
    const isActionBtn = e.target.closest("[data-btn-action]");

    if (isActionBtn) {
        const allActiveItems = menuList.querySelectorAll(
            "[data-menu-item].active"
        );

        allActiveItems.forEach((item) => {
            if (item !== isActionBtn.closest("[data-menu-item]")) {
                item.classList.remove("active");
            }
        });

        const currentItem = isActionBtn.closest("[data-menu-item]");
        currentItem.classList.toggle("active");
    }
};

menuList.addEventListener("click", toggleVisibleSublist);
