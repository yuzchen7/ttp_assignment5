var current_colmuns = 4;

function addRows() {
    const mian_container = document.getElementById("grid-container");
    var rows = document.createElement("div");
    rows.setAttribute("class", "row grid");
    rows.setAttribute("id", "grid_container_row");
    var clos;
    for (var i = 0; i < current_colmuns; i++) {
        clos = document.createElement("div");
        clos.setAttribute("class", "clo_" + i + " frid-item grid-item-" + i);
        clos.classList.add("cell");
        rows.appendChild(clos);
    }
    mian_container.appendChild(rows);
}

function removeRow() {
    const mian_container = document.getElementById("grid-container");
    var lastChild = mian_container.lastElementChild;
    lastChild.remove();
}

// keep modified
// function addCols() {
//     const mian_container = document.getElementById("grid-container");
//     var allcol = document.querySelectorAll((".row .clo_" + current_colmuns));
//     console.log(allcol);
// }