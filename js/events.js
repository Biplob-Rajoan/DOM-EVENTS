//option 1: add event handler using named function
function makeYellow() {
  document.body.style.backgroundColor = "yellow";
}

function makeRed() {
  document.body.style.backgroundColor = "red";
}


//option 2: add event handler using getElementById and then assigning a function to onclick
const btnMakeBlue = document.getElementById("btn-make-blue");
//console.log(btnMakeBlue);
btnMakeBlue.onclick = function () {
  document.body.style.backgroundColor = "blue";
};


//option 3: add event handler using addEventListener
const buttonMakePink = document.getElementById("btn-make-pink");
    const buttonMakeGreen = document.getElementById('btn-make-green');
    //console.log(buttonMakeGreen);
    buttonMakeGreen.onclick = makeGreen;

    function makeGreen(){
        document.body.style.backgroundColor = 'green';
    }