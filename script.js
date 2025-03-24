let numRows = 0;
let numCols = 0;
let colorSelected = "SELECT";


function addR() {
    let table = document.getElementById("grid");
    let row = table.insertRow();
    if (numCols === 0) {
        numCols = 1;
    }
    for (let i = 0; i < numCols; i++) {
        let cell = row.insertCell();
        cell.style.backgroundColor = "white";
        cell.onclick = () => colorCell(cell);
    }
    numRows++;
}



function addC() {
    let table = document.getElementById("grid");
    if (numRows === 0) {
        let row = table.insertRow();
        let cell = row.insertCell();
        cell.style.backgroundColor = "white";
        cell.onclick = () => colorCell(cell);
        numRows++;
        numCols++;
        return;
    }
    for (let i = 0; i < table.rows.length; i++) {
        let cell = table.rows[i].insertCell();
        cell.style.backgroundColor = "white";
        cell.onclick = () => colorCell(cell);
    }
    numCols++;
}



function removeR() {
    let table = document.getElementById("grid");
    if (numRows > 0) {
        table.deleteRow(-1);
        numRows--;
        if (numRows === 0) numCols = 0; 
    }
}



function removeC() {
    let table = document.getElementById("grid");
    if (numCols > 0) {
        for (let i = 0; i < table.rows.length; i++) {
            table.rows[i].deleteCell(-1);
        }
        numCols--;
        if (numCols === 0) {
            while (table.rows.length > 0) {
                table.deleteRow(0);
            }
            numRows = 0;
        }
    }
}



function selectColor() {
    colorSelected = document.getElementById("selectedColorId").value;
}



function colorCell(cell) {
    if (colorSelected !== "SELECT") {
        cell.style.backgroundColor = colorSelected;
    }
}



function fillU() {
    let cells = document.querySelectorAll("#grid td");
    cells.forEach(cell => {
        if (cell.style.backgroundColor === "" || cell.style.backgroundColor === "white") {
            cell.style.backgroundColor = colorSelected;
        }
    });
}



function fillAll() {
    let cells = document.querySelectorAll("#grid td");
    cells.forEach(cell => {
        cell.style.backgroundColor = colorSelected;
    });
}



function clearAll() {
    let cells = document.querySelectorAll("#grid td");
    cells.forEach(cell => {
        cell.style.backgroundColor = "white";
    });
}