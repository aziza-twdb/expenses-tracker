const submit = document.querySelector("#submit");
var input = document.querySelectorAll('input');
var addRow = document.querySelectorAll('tr');
var table = document.getElementById("#datainject");

const Finalamount = document.querySelector("#datainject > tbody > tr.bottom-row > th:nth-child(2)");

function injectNum() {
    var midRow = document.createElement('tr');
    midRow.classList.add('middle-rows');
    midRow.innerHTML = `
      <td>${input[0].value}</td>
      <td>${input[1].value}</td>
      <td>${input[2].value}</td>
    `;  
 
    addRow[0].insertAdjacentElement("afterend", midRow);


    
    input[0].value = "";
    input[1].value = "";
    input[2].value = "";
}     
 
  submit.addEventListener('click', injectNum);
  
  