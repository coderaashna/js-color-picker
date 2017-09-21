function updateColor() {
    var redVal = document.getElementById('red-val').value
    var blueVal = document.getElementById('blue-val').value;
    var greenVal = document.getElementById('green-val').value;
    var colorArea = document.getElementById('color-area');
    var newColorValue = 'rgb(' + redVal + ',' + greenVal + ',' + blueVal + ')';
    colorArea.style.backgroundColor = newColorValue;
}
