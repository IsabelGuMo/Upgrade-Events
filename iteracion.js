//1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
//evento click que ejecute un console log con la información del evento del click

let btnToClick = document.querySelector('#btnToClick');

btnToClick.addEventListener('click', (event) => {
    console.log(event);
});
    
//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

let focusInputs = document.querySelector('.focus');

focusInputs.addEventListener('focus', (event) => {
    const focusInput = event.target;
    console.log(focusInput.value);
});

//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

let inputValue = document.querySelector('.value');

inputValue.addEventListener('input', (event) =>{
    const inValue = event.target;
    console.log(inValue.value);
});