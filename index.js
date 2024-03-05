
const submit = document.querySelector("#submit");


submit.addEventListener('click', function() { 
  
    let input1 = document.getElementById("input1")
    let input2 = document.getElementById("input2")
    let input3 = document.getElementById("input3")

        if (input2.value == "" || input1.value == "" ) {
            alert("Please fill out required feilds!")
            input1.classList.add("error")
            input2.classList.add("error")
        } else {
            console.warn("Submitted: " + input1.value  + " for $" + input2.value  + " on " + input3.value  + " ")
            input1.classList.remove("error")
            input2.classList.remove("error")
        }
    
    let title = document.getElementById("title")
    let num = document.getElementById("number")
    let dd  = document.getElementById("date")
    var list =  document.createElement('li');

    title.textContent = list(input1.value)
    num.textContent = input2.value
    dd.textContent = input3.value
       


    
    input1.value = ""
    input2.value = ""
    input3.value = ""

});
  