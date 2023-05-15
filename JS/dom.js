const mousePositionElement = document.getElementById("mousePosition");

document.addEventListener("mousemove", function(event) {
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  mousePositionElement.innerText = "Posición del mouse: " + mouseX + ", " + mouseY;
});

const form = document.getElementById("form1");
const fnameInput = document.getElementById("form-fname");
const lnameInput = document.getElementById("form-lname");
const submitButton = document.getElementById("form1-submit");

submitButton.addEventListener("click", function(event) {
  event.preventDefault(); // Evita que el formulario se envíe automáticamente

  const fname = fnameInput.value;
  const lname = lnameInput.value;
  const fullName = fname + " " + lname;

  const fullNameElement = document.createElement("p");
  fullNameElement.textContent = "Nombre completo: " + fullName;

  form.appendChild(fullNameElement);
});


document.getElementById("btn-insert-r").addEventListener("click", () => {
    const table = document.getElementById("sampleTable");
    const row = table.insertRow(-1);
    const colCount = table.rows[0].cells.length; // get the number of columns in the first row
    for (let i = 0; i < colCount; i++) {
      const cell = row.insertCell(i);
      cell.innerHTML = "New row column " + (i + 1); // set the content of the cell
    }
  });
  
  document.getElementById("btn-insert-c").addEventListener("click", () => {
    const table = document.getElementById("sampleTable");
    const rowCount = table.rows.length;
    for (let i = 0; i < rowCount; i++) {
      const cell = table.rows[i].insertCell(-1);
      cell.innerHTML = "New column" ;
    }
  });
  

 
insertColumnButton.addEventListener("click", function() {
  const rows = table.rows;

  for (let i = 0; i < rows.length; i++) {
    const newCell = rows[i].insertCell(); // Agrega una nueva celda a cada fila existente
    newCell.textContent = "New Column";
  }
});


const myTable = document.getElementById("myTable");
const rowIndexInput = document.getElementById("rowIndex");
const colIndexInput = document.getElementById("colIndex");
const newValueInput = document.getElementById("newValue");
const changeButton = document.getElementById("btn-change");

changeButton.addEventListener("click", function() {
  const rowIndex = parseInt(rowIndexInput.value);
  const colIndex = parseInt(colIndexInput.value);
  const newValue = newValueInput.value;

  const rows = myTable.rows;

  if (rowIndex >= 0 && rowIndex < rows.length) {
    const cells = rows[rowIndex].cells;
    if (colIndex >= 0 && colIndex < cells.length) {
      cells[colIndex].textContent = newValue;
    }
  }
});


const colorSelect = document.getElementById("colorSelect");
const addColorButton = document.getElementById("btn-add-color");
const removeColorButton = document.getElementById("btn-rmv-color");

addColorButton.addEventListener("click", function() {
  const newColor = getRandomColor();

  const option = document.createElement("option");
  option.textContent = newColor;

  colorSelect.appendChild(option);
});

removeColorButton.addEventListener("click", function() {
  const selectedIndex = colorSelect.selectedIndex;

  if (selectedIndex >= 0) {
    colorSelect.removeChild(colorSelect.options[selectedIndex]);
  }
});

function getRandomColor() {
  const colors = ["Red", "Green", "White", "Black","Yellow","Pink","Blue","Orange ","Dark Grey","Grey","Fushia","Green Olive","Dark Blue","Purple","Lilac"];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}


const image = document.getElementById("imagenGato");

image.addEventListener("mouseenter", function() {
  const randomWidth = getRandomNumber(300, 600);
  const randomHeight = getRandomNumber(300, 600);

  const newImage = new Image();
  newImage.src = `http://placekitten.com/${randomWidth}/${randomHeight}`;

  newImage.addEventListener("load", function() {
    image.src = newImage.src;
  });
});

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


