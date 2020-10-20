let btn = document.getElementById('btn');
let output = document.getElementById('outputtext');

let numb = [Math.floor(Math.random() * 50)]

btn.addEventListener('click', function () {
    let input = document.getElementById('inputField').value
    if (input == numb) {
        output.innerHTML = `Você acertou!Seu número é ${numb}`
    } else if (input < numb) {
        output.innerHTML = `Muito baixo!`
    };
    if (input > numb) {
        output.innerHTML = `Muito alto`
    }
})
