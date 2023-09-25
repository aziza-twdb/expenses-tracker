const submit = document.querySelector("#submit")

let dataInput = document.querySelectorAll('input');
let addRow = document.querySelectorAll('tr')[1];
 
function addRowsss() { 
    let titleInput = document.querySelectorAll("input")[0]
    let amountInput = document.querySelectorAll("input")[1]
    let date =  document.querySelectorAll("input")[2];
    addRow.innerHTML = `
    <th>${titleInput.value}</th>
    <th>${date.value}</th>
    <th>${amountInput.value}</th>
    `
}


submit.addEventListener('click', addRowsss() )
    
