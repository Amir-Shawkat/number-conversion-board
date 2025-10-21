const decimal = document.getElementById('decimal');
const binary = document.getElementById('binary');
const octal = document.getElementById('octal');
const hexadecimal = document.getElementById('hexadecimal');
const convertBtn = document.getElementById('convert');
console.log(decimal);

convertBtn.addEventListener('click' , () => {

    const decimalVal = parseFloat(decimal.value);

    if(isNaN(decimalVal)){
        alert("Please enter a valid number...");
        return;
    }
    setTimeout(() => {
        binary.textContent = decimalVal.toString(2);
    }, 500);
    
    setTimeout(() => {
        octal.textContent = decimalVal.toString(8);
    }, 1000);
    
    setTimeout(() => {
        hexadecimal.textContent = decimalVal.toString(16).toUpperCase();
    }, 1500);
    
    
});

decimal.addEventListener('keypress' , (e) => {
    if(e.key === 'Enter'){
        convertBtn.click();
    }
});

decimal.addEventListener('input', () => {
  if (decimal.value === '') {
    binary.textContent = '';
    octal.textContent = '';
    hexadecimal.textContent = '';
  }
});

