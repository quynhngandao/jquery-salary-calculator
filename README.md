# My Weekend Jquery Calculator 
## Description
Created a calculator that takes user input and append it to a table. It also allows user to delete the input from table. 

What problem did you solve? How did you solve it?
- calculating total monthly: by dividing annual salary input by 12 first then add to the total monthly 
- update total monthly along with delete button: by using below:
let $row = $(this).closest("tr");
let annualSalaryInput = parseFloat($row.find("td:nth-child(5)").text()); 
- changing color of Total Monthly: N/A

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
