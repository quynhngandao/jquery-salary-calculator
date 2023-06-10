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
  $('#total-annual-salary-input').addClass('red-background');

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
  let annualSalaryInput = Number($("#annual-salary-input").val());
  //   console.log("Annual Salary submitted", annualSalaryInput);

  // APPEND INPUT TO TABLE
  $("#table-input").append(`
    <tr>
        <td>${fnameInput}</td>
        <td>${lnameInput}</td>
        <td>${idInput}</td>
        <td>${titleInput}</td>
        <td>$${annualSalaryInput}</td>
        <td><button class="delete-btn">Delete</button></td>
    </tr>
`);

// ADD ANNUAL SALARY TO TOTAL MONTHLY 
totalSalary += annualSalaryInput/3;

// calculate monthly costs and append this to the to DOM
$('#total-annual-salary-input').text(totalSalary);
//  console.log('total salary', totalSalary);

// If the total monthly cost exceeds $20,000, add a red background color to the total monthly cost.
  if (totalSalary > 20000) {
  $('#total-annual-salary-input').css("background-color", "red");
  alert('MONTH COST IS OVER $20,000!!!');
  }


  // CLEAR INPUT FROM TABLE
  $("#fname-input").val("");
  $("#lname-input").val("");
  $("#id-input").val("");
  $("#title-input").val("");
  $("#annual-salary-input").val(0);
}


// deleteButton function 
function deleteButton() {
//   console.log("Deleted");
  $(this).parent().parent().remove();
}


// TEST
console.log("Testing outside onReady");




// Issues to address, NaN -> calculator doesn't work
// Input not fully filled out, submit stills work
