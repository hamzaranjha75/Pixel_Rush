const menuButton = document.querySelector(".nav-toggle");
const closeButton = document.querySelector(".nav-close");
const navigation = document.querySelector(".site-nav");
const backdrop = document.querySelector(".nav-backdrop");

if (menuButton && closeButton && navigation && backdrop) {
    const setNavigationOpen = (isOpen) => {
        menuButton.setAttribute("aria-expanded", String(isOpen));
        menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
        navigation.setAttribute("aria-hidden", String(!isOpen));
        navigation.classList.toggle("is-open", isOpen);
        backdrop.hidden = !isOpen;
        backdrop.classList.toggle("is-open", isOpen);
        document.body.classList.toggle("nav-open", isOpen);

        if (isOpen) {
            closeButton.focus();
        } else {
            menuButton.focus();
        }
    };

    menuButton.addEventListener("click", () => {
        setNavigationOpen(menuButton.getAttribute("aria-expanded") !== "true");
    });
    closeButton.addEventListener("click", () => setNavigationOpen(false));
    backdrop.addEventListener("click", () => setNavigationOpen(false));
    navigation.addEventListener("click", (event) => {
        if (event.target instanceof Element && event.target.closest("a")) {
            setNavigationOpen(false);
        }
    });
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
            setNavigationOpen(false);
        }
    });
}
