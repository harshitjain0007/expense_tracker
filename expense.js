let count = 0;
let form = document.querySelector("form");


let tbody = document.querySelector("tbody");
let tableHeaders = document.querySelector("thead");
tableHeaders.style.display = "none"; 

form.addEventListener("submit", function(event) {
  event.preventDefault();

  let amount = document.getElementById("expenseAmount").value;
  let detail = document.getElementById("expenseDetail").value;
  let category = document.getElementById("expenseCategory").value;

if (amount === "" || detail === "" || category === ""){
    alert("Empty fields not allowed");
}
else{
    count++;

  let tbody = document.querySelector("tbody");
  let row = tbody.insertRow();
  row.insertCell(0).innerText = count;
  row.insertCell(1).innerText = "Rs" + amount;
  row.insertCell(2).innerText = detail;
  row.insertCell(3).innerText = category;
  row.insertCell(4).innerText = new Date().toLocaleDateString();

 if (count === 1) {
      tableHeaders.style.display = "table-header-group";
    }

  document.getElementById("expenseAmount").value = "";
  document.getElementById("expenseDetail").value = "";
  document.getElementById("expenseCategory").value = "";
}
});

let filterdata = document.getElementById("filterByCategory");

filterdata.addEventListener("change", function()
{
let selectcategory = this.value;
let rowdata = document.querySelectorAll("tbody tr")

rowdata.forEach(function(row){
let rowcategory = row.cells[3].innerText;

if (selectcategory === "" || rowcategory=== selectcategory){row.style.display = "";}
else {row.style.display = "none";}

})

})