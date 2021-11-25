// button 'slider' for settings page... Not really a 'slider', the button just moves when clicked...

//create the element: //needs to go in the actual production, of course
let _sliderbox = document.createElement('div');
_sliderbox.id = "_sliderbox";

let _slider = document.createElement('div');
_slider.id = "_slider";

document.querySelector('#_mainWrapper').appendChild(_sliderbox);
document.querySelector('#_sliderbox').appendChild(_slider);

//make the frog button moooove, ie jump, for now.
//doing this w. flex, justify-content 

let isSelected = false; //refactor into array w. chosen true/false-selections retrieved from localStorage
console.log(isSelected);

function doSelect() {
    //console.log(_box.style.justifyContent);
    if (isSelected) {
        isSelected = false;
        _sliderbox.style.justifyContent = 'flex-start';
        _sliderbox.style.backgroundColor = 'var(--sec-fossil)';
    }
    else {
        isSelected = true;
        _sliderbox.style.justifyContent = 'flex-end';
        _sliderbox.style.backgroundColor = 'var(--prim-sage)';
    }
}

document.querySelector('#_sliderbox').addEventListener('click', doSelect);