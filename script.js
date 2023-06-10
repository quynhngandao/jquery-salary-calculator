// Issues to address, NaN -> calculator doesn't work
// Input not fully filled out, submit stills work

//global variable
let totalSalary = 0;

// DOM
$(document).ready(onReady);

// onReady FUNCTION
function onReady() {
  // TEST
  console.log("JQ Ready");

  // EVENT LISTENER
  // submit button
  $("#submit-btn").on("click", handleButton);
  // delete button
  $("#table-input").on("click", ".delete-btn", deleteButton);

  // red background if totalSalary > 20000
  $("#total-annual-salary-input").addClass("red-background");
}

// EVENT HANDLER
// handleButton function
function handleButton(e) {
  // console.log('button clicked');
  e.preventDefault();

  // GRAB INPUT VALUE
  let fnameInput = $("#fname-input").val();
  //   console.log("First Name submitted", fnameInput);
  let lnameInput = $("#lname-input").val();
  //   console.log("Last Name submitted", lnameInput);
  let idInput = $("#id-input").val();
  //   console.log("ID submitted", idInput);
  let titleInput = $("#title-input").val();
  //   console.log("Title submitted", titleInput);
  // Check if annualSalaryInput is a valid number
  let annualSalaryInput = Number($("#annual-salary-input").val());
  //   console.log("Annual Salary submitted", annualSalaryInput);
  if (isNaN(annualSalaryInput)) {
    // Alert when the input is not a valid number
    alert("Invalid annual salary");
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
    <td data-monthly-salary="${monthlySalary}">$${annualSalaryInput}</td>
    <td><button class="delete-btn">Delete</button></td>
    </tr>
`);

  // ADD ANNUAL SALARY TO TOTAL MONTHLY
  totalSalary += monthlySalary;
  // calculate monthly costs and append this to the to DOM
  $("#total-annual-salary-input").text(totalSalary);
  //  console.log('total salary', totalSalary);

  // If the total monthly cost exceeds $20,000, add a red background color to the total monthly cost.
  if (totalSalary > 20000) {
    $("#total-annual-salary-input").addClass("red-background");
    alert("MONTH COST IS OVER $20,000!!!");
  }

  // CLEAR INPUT FROM TABLE
  $("#fname-input").val("");
  $("#lname-input").val("");
  $("#id-input").val("");
  $("#title-input").val("");
  $("#annual-salary-input").val("");
}

// deleteButton function
function deleteButton() {
  //   console.log("Deleted");

  // CALCULATE monthly salary after delete button
  let monthlySalary = Number(
    $(this).parent().siblings().first().data("monthly-salary")
  );
  $(this).parent().parent().remove();
  totalSalary -= monthlySalary;
  $("#total-annual-salary-input").text(totalSalary);

  // If the total monthly cost under $20,000, remove the red background color to the total monthly cost.
  if (totalSalary < 20000) {
    $("#total-annual-salary-input").removeClass("red-background");
  }
}

// TEST
console.log("Testing outside onReady");
