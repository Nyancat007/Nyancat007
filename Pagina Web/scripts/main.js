let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/music-icon.jpg') {
      myImage.setAttribute('src','images/music2.jpg');
    } else {
      myImage.setAttribute('src','images/music-icon.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Porfavor introduce tu nombre.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Bievenido ' + myName + '!';
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Bienvenido ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}