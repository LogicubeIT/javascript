// EVENT HANDLERS AND COLLECTING THE USER INPUT AND PERFORMING TASKS

// STEP 1: SET AN EVENT HANDLER UPON WHICH YOU WANT TO PERFORM A TASK
// -> WE"VE SET AN EVENT HANDLER : ONCLICK in HTML File 
    
// STEP 2: MAKE A FUNCTION THAT WILL PERFORM THE DESIRED TASK

// function submit() {
//     // STEP 3: MAKE A VARIABLE THAT WILL STORE THE INPUT DATA 
//     const inputElements = document.getElementsByTagName('input')
//     console.log(inputElements[0].value)
// }

// function submit() {
//     const checkbox = document.getElementsByName('interest')
//     for (let index = 0; index < checkbox.length; index++) {
//         const element = checkbox[index];
//         if (element.checked) {
//             console.log(element.value)
//         }
//     }
// }

const form = document.getElementById('myform')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    console.log('formData',formData)
    for (item of formData) {
console.log(item)
    }
})


