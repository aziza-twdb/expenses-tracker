const submit = document.querySelector("#submit");
var input = document.querySelectorAll('input');
var addRow = document.querySelectorAll('tr');
var table = document.getElementById("#datainject");

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

    var calcRow = document.getElementsByClassName('middle-rows')[0].querySelector('td:nth-child(2)').textContent;
    parseFloat(calcRow)
    console.log()


})
