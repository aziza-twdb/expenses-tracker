const titleInput = document.getElementsByName("title")[0]; 
const amountInput = document.getElementsByName("amount")[0]; 
const dateInput = document.getElementsByName("date")[0];
const submit = document.querySelectorAll('button')

let dataInput = document.querySelectorAll('input');
let addRow = document.querySelectorAll('tr')[1];
  

for (let i = 0; i < dataInput.length; ++i) {
    
    addRow[i].addEventListener('click', function(e) {
      alert('youve sublitted')
     
    })


}


