window.addEventListener('load', () => {
    let firstNumber = + prompt('Enter first value');   
    let secondNumber = + prompt('Enter second value');
   
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        alert('Некорректный ввод!');
        return;
    }else{
        alert(firstNumber.toString(secondNumber));
        return;
    }

  });

//2подзадание

// window.addEventListener('load', () => {
//     let firstNumber = + prompt('Enter first value'); 

//     if(isNaN(firstNumber)){
//         alert('Неккоректный ввод!');
//         return;
//     }

//     let secondNumber = + prompt('Enter second value');

//     if(isNaN(secondNumber)){
//         alert('Неккоректный ввод!');
//         return;
//     } else{
//         let sum = firstNumber+secondNumber;
//         let quotient = firstNumber/secondNumber;
//         alert(`Ответ: [ ${sum} ], [ ${quotient} ]`);
//         return;
//     }
    
//   });