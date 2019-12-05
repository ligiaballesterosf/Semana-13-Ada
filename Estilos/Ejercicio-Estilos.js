//01

const changeColor = (elenento, color) => {
    getComputedStyle(color)
    color.setAttribute("style", "color: red; background: blue;");
}