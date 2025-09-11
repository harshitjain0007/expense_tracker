let count = 0;
let form = document.querySelector("form");
let tbody = document.querySelector("tbody");
let tableHeaders = document.querySelector("thead");
tableHeaders.style.display = "none"; 

let data = JSON.parse(localStorage.getItem("expenses"))|| [];

function renderTable() {
  tbody.innerHTML = "";
  count = 0;

  data.forEach((item) => {
    count++;
    let row = tbody.insertRow();
    row.insertCell(0).innerText = count;
    row.insertCell(1).innerText = "Rs " + item.amount;
    row.insertCell(2).innerText = item.detail;
    row.insertCell(3).innerText = item.category;
    row.insertCell(4).innerText = item.date;
  });

  if (data.length > 0) {
    tableHeaders.style.display = "table-header-group";
  } else {
    tableHeaders.style.display = "none";
  }
}

renderTable();

form.addEventListener("submit", function(event){
  event.preventDefault();

  let amount = document.getElementById("expenseAmount").value;
  let detail = document.getElementById("expenseDetail").value;
  let category = document.getElementById("expenseCategory").value;

if (amount === "" || detail === "" || category === ""){
    alert("Empty fields not allowed");
}
else {
    let newExpense = {
      count : count,
      amount: amount,
      detail: detail,
      category: category,
      date: new Date().toLocaleDateString()
    };

    data.push(newExpense);  
    localStorage.setItem("expenses", JSON.stringify(data));
    renderTable();
   

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