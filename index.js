const submit = document.querySelector("#submit")
var input = document.querySelectorAll('input')
let addRow = document.querySelectorAll('tr');
 
submit.addEventListener('click',function() {
    var midRow = document.createElement('tr')
    midRow.classList.add('middle-rows')
    midRow.innerHTML = `
    <td>${input[0].value}</td>
    <td>${input[1].value}</td>
    <td>${input[2].value}</td>
    `
    addRow[0].insertAdjacentElement("afterend", midRow)

    input[0].value= ""
    input[1].value= ""
    input[2].value= ""

    
})


