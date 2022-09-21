document.querySelector('.balloon').addEventListener('click', function (event) {
    var balloon = this;

    // Size
    var size = parseInt(window.getComputedStyle(balloon).getPropertyValue('width')) + 10;
    if (size > 420)
        size = 200;
    balloon.style.borderRadius = balloon.style.width = balloon.style.height = size.toString() + 'px';

    // Color
    var currentColor = window.getComputedStyle(balloon).getPropertyValue('background-color');
    var newColor;
    if (currentColor === 'rgb(255, 0, 0)') // red
        newColor = 'green';
    else if (currentColor === 'rgb(0, 128, 0)') // green
        newColor = 'blue';
    else
        newColor = 'red';
    balloon.style.backgroundColor = newColor;
});

document.querySelector('.balloon').addEventListener('mouseleave', function (event) {
    var balloon = this;

    // Size
    var size = parseInt(window.getComputedStyle(balloon).getPropertyValue('width')) - 5;
    if (size < 200)
        size = 200;
    balloon.style.borderRadius = balloon.style.width = balloon.style.height = size.toString() + 'px';

    // Color
    var currentColor = window.getComputedStyle(balloon).getPropertyValue('background-color');
    var newColor;
    if (currentColor === 'rgb(255, 0, 0)') // red
        newColor = 'green';
    else if (currentColor === 'rgb(0, 128, 0)') // green
        newColor = 'orange';
    else
        newColor = 'red';
    balloon.style.backgroundColor = newColor;
});