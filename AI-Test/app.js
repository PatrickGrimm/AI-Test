document.getElementById('app').innerHTML = '<button id="clickMe">Click me</button>';
document.getElementById('clickMe').onclick = () => {
    alert("Button clicked!");
};
