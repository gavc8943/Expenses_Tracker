// Set the max attribute for the date input
document.getElementById("date-of").setAttribute("max", getTodayDate());

// Function to get today's date in YYYY-MM-DD format
function getTodayDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Month is 0-indexed
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

// Select the Add expenses button
const addButton = document.querySelector(".button");

// Add a click event listener to the button
addButton.addEventListener("click", function (event) {
  event.preventDefault(); // prevent form from submitting
  // call a function to add data to the table
  addExpenseToTable();
});

// Collect the input data
function addExpenseToTable() {
  const expenseName = document.querySelector("#expense-name").value;
  const expenseDate = document.querySelector("#date-of").value;
  const expenseAmount = document.querySelector("#amount").value;

  // check if any of the fields are empty
  if (!expenseName || !expenseDate || !expenseAmount) {
    alert("please fill in all the fields");
    return;
  }
  // Validate that the entered date is not in the future
  const today = new Date(getTodayDate());
  const selectedDate = new Date(expenseDate);
  if (selectedDate > today) {
    alert("The date cannot be in the future.");
    return;
  }

  // Get reference to the table body
  let table = document.querySelector(".table tbody");
  // Create a new row in the table
  let newRow = table.insertRow();

  // Create new cells in the row and insert the data
  let nameCell = newRow.insertCell(0);
  nameCell.textContent = expenseName;

  let dateCell = newRow.insertCell(1);
  dateCell.textContent = expenseDate;

  let amountCell = newRow.insertCell(2);
  amountCell.textContent = expenseAmount;

  // Clear the input fields after adding the expense
  document.getElementById("expense-name").value = "";
  document.getElementById("date-of").value = "";
  document.getElementById("amount").value = "";
}
