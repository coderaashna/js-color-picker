function updateColor() {
    var redVal = document.getElementById('redVal').value
    var blueVal = document.getElementById('blueVal').value;
    var greenVal = document.getElementById('greenVal').value;
    var colorArea = document.getElementById('color-area');
    var newColorValue = 'rgb(' + redVal + ',' + greenVal + ',' + blueVal + ')';
    colorArea.style.backgroundColor = newColorValue;
}
