let grocery1;
let grocery2;
let grocery3;

function calculate() {
grocery1= parseFloat(document.getElementById('first').value);
grocery2 = parseFloat(document.getElementById('second').value);
grocery3= parseFloat(document.getElementById('third').value);


let total_amount = grocery1+grocery2+grocery3;
document.getElementById('result').innerText = `The area of the rectangle is: ${total_amount}`;
}