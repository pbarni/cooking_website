function myFunction() {
    const checkbox = document.getElementById("menu-checkbox");
    const menu = document.getElementById("menu");
    const upperNav = document.getElementById("upper-nav");

    if (window.matchMedia("(orientation: portrait)").matches && checkbox.checked) { /*mobile toggled*/
        menu.style.display = "flex";
        upperNav.style.height = "var(--nav-mobile-toggled-height)";
    } else if (window.matchMedia("(orientation: landscape)").matches) { /*normal*/
        menu.style.display = "flex";
        upperNav.style.height = "var(--nav-mobile-untoggled-height)";
    } else { /*mobile untoggled*/
        menu.style.display = "none";
        upperNav.style.height = "var(--nav-mobile-untoggled-height)"; 
    }
}

document.getElementById("menu-checkbox").addEventListener("change", myFunction);
window.matchMedia("(orientation: portrait)").addEventListener("change", myFunction);