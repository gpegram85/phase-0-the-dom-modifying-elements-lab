const rmMain = document.getElementById('main');
rmMain.remove();

const newHeader = document.createElement("h1");
newHeader.setAttribute("id", "victory");

const textNode = document.createTextNode("Grey is the champion");
newHeader.appendChild(textNode);