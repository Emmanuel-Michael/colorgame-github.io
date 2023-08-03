 var pMessage = document.querySelector('#message');
 var pButton = document.querySelector('#btn');
 var pColor = document.querySelector('#p-color');
 var btnColor= document.querySelector('#btn-color');

// var name = "Emmanuel";
// var msg = "Welcome to class";
// var greetings = name + " " + msg;
// alert(greetings)
// pMessage.innerHTML = greetings;

pButton.addEventListener('click', () => {
alert('Button Clicked')
alert('Paragraph Clicked')
alert('Section Clicked')
});

btnColor.addEventListener('click', (e) =>{
pColor.style.backgroundColor = makeColor();
e.stopPropagation();
});

pColor.addEventListener('click',  () => {
    pColor.classList.toggle('hide');
});
const makeColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
};


// Promises In JavaScript 

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}


delayedColorChange('red', 1000)
    .then(() => delayedColorChange('orange', 1000))
    .then(() => delayedColorChange('yellow', 1000))
    .then(() => delayedColorChange('green', 1000))
    .then(() => delayedColorChange('blue', 1000))
    .then(() => delayedColorChange('indigo', 1000))
    .then(() => delayedColorChange('violet', 1000))

    // own promise
    new Promise((resolve,reject)=>{
reject()
    })