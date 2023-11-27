//declare all variables
let truthyArray = ['true', 'false', 'true', 'false', 'true', 'true', 'false', 'true'];
let resultInput = document.getElementById('result');
let calc = document.getElementById('calc');
//assign addEventListener to button
calc.addEventListener('click', count);
//shows results
function count() {
    let trueValues = truthyArray.filter(value => value === 'true').length;
    resultInput.value = trueValues;
}
