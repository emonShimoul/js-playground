console.log('Separate JS');

// option 1
function makeRed(){
    document.body.style.backgroundColor = 'red';
}


// option 2
const makeYellowButton = document.getElementById('make-yellow');
makeYellowButton.onclick = function makeYellow(){
    document.body.style.backgroundColor = 'yellow';
}

// option 3
document.getElementById('make-purple').addEventListener('click', ()=> {
    document.body.style.backgroundColor = 'purple';
});