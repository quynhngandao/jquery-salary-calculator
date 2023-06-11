// Total monthly not reflecting yellow highlight

// PSEUDO CODE
// onReady function for event listener
// EVENT HANDLER handleButton that when submit button is clicked, grab input value from form
// append the input to a table
// make sure annual salary is a valid number and all the inputs filled out
// calculate monthly salary & add to total monthly
// update the total monthly text
// if total monthly > 20000 then add red highlight

// EVENT DELEGATION deleteButton that when delete button is clicked, remove the input value from table
// remove input from table
// update the total monthly text
// if total monthly < 20000 then remove red highlight

$(document).ready(onReady);

// Global variable
let totalMonthly = 0;

function onReady() {
  // EVENT LISTENER
  // submit button
  $(".submit-btn").on("click", handleButton);
  // delete button
  $("#table-input").on("click", ".delete-btn", deleteButton);
}

// EVENT HANDLER
// handleButton function
function handleButton(e) {
  // console.log('button clicked');
  e.preventDefault();

  // GRAB INPUT VALUE
  let fnameInput = $("#fname-input").val();
  console.log("First Name submitted", fnameInput);
  let lnameInput = $("#lname-input").val();
  console.log("Last Name submitted", lnameInput);
  let idInput = $("#id-input").val();
  console.log("ID submitted", idInput);
  let titleInput = $("#title-input").val();
  console.log("Title submitted", titleInput);
  // Check if annualSalaryInput is a valid number
  let annualSalaryInput = parseFloat($("#annual-salary-input").val());
  console.log("Annual Salary submitted", annualSalaryInput);
  if (isNaN(annualSalaryInput)) {
    // Alert when the input is not a valid number
    alert("Invalid entry, try again");
    return;
  }
  // Alert when the input is not filled
  if (
    fnameInput == "" ||
    lnameInput == "" ||
    idInput == "" ||
    titleInput == ""
  ) {
    alert("Please enter input");
    return;
  }

  // CALCULATE monthly salary after submit button
  let monthlySalary = annualSalaryInput / 12;

  // APPEND INPUT TO TABLE
  $("#table-input").append(`
        <tr>
        <td>${fnameInput}</td>
        <td>${lnameInput}</td>
        <td>${idInput}</td>
        <td>${titleInput}</td>
        <td >${annualSalaryInput}</td>
        <td><button class="delete-btn">Delete</button></td>
        </tr>
        `);

  // ADD ANNUAL SALARY TO TOTAL MONTHLY
  totalMonthly += monthlySalary;
  // calculate monthly costs and append this to the to DOM
  $("#total-monthly-salary").text(totalMonthly);
  console.log("total salary", totalMonthly);

  // If the total monthly cost exceeds $20,000, add a red background color to the total monthly cost
  // Remove the red background if the total monthly cost is under $20,000
  if (totalMonthly > 20000) {
    $("#total-monthly-salary").css("background-color", "red");
    alert("MONTH COST IS OVER $20,000!!!");
  } else {
    $("#total-monthly-salary").css("background-color", "transparent");
  }

  // CLEAR INPUT FROM TABLE
  $("#fname-input").val("");
  $("#lname-input").val("");
  $("#id-input").val("");
  $("#title-input").val("");
  $("#annual-salary-input").val("");
}

// EVENT DELEGATION
function deleteButton() {
  // Calculate the monthly salary of the deleted row
  let $row = $(this).closest("tr");
  let annualSalaryInput = parseFloat($row.find("td:nth-child(5)").text());
  // console.log('annual salary input:', annualSalaryInput)
  let monthlySalary = annualSalaryInput / 12;

  // Remove the row from the table
  $row.remove();
 
  /* ANOTHER APPROACH: 
  let monthlySalary = parseFloat($(this).parent().siblings().first().data("monthly-salary"));
  $(this).parent().parent().remove(); */

  // Update the total salary
  totalMonthly -= monthlySalary;
  $("#total-monthly-salary").text(totalMonthly);
  console.log("total monthly", totalMonthly);

  if (totalMonthly > 20000) {
    $("#total-monthly-salary").css("background-color", "red");
    alert("MONTH COST IS OVER $20,000!!!");
  } else {
    $("#total-monthly-salary").css("background-color", "transparent");
  }
}
