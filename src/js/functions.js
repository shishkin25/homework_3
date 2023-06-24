function initApp(...components) {
    let app = document.querySelector('.app');
    components.forEach(component => app.insertAdjacentHTML("beforeend", component));
}

function makeNavItemActive(item) {
    item.classList.add('menu__nav-item_active');
    item.children[0].classList.add('primary-font');
    makeOtherNavItemsDefault(item);
}

function makeOtherNavItemsDefault(activeItem) {
    const navItems = Array.from(activeItem.parentElement.children);

    navItems.forEach(item => {
        if (item != activeItem) {
            item.classList.remove('menu__nav-item_active');
            item.children[0].classList.remove('primary-font');
        }
    });
}

function deletePreviousComponent(app) {
    const referenceElement = document.querySelector('.menu');
    let nextElement = referenceElement.nextElementSibling;
    while (nextElement) {
        app.removeChild(nextElement);
        nextElement = referenceElement.nextElementSibling;
    }
}


export { initApp, makeNavItemActive, deletePreviousComponent }