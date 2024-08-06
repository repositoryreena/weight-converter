const weight = document.getElementById("weight")
const kg = document.getElementById("kg")

weight.addEventListener("input", ()=>{
    weight.value > 0 ? kg.innerHTML = `<p>Your weight in kg is: ${(weight.value*0.453592).toFixed(2)}` : kg.innerHTML = `<p>Your weight in kg is: <br><p style="color: red;">Please enter a valid number!</p>`
})