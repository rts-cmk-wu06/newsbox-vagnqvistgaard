// button 'slider' for settings page... Not really a 'slider', the button just moves when clicked...

//create the element: //needs to go in the actual production, of course
let _box = document.createElement('div');
_box.id = "_box";

let _slider = document.createElement('div');
_slider.id = "_slider";

document.querySelector('#_mainWrapper').appendChild(_box);
document.querySelector('#_box').appendChild(_slider);

//make the frog button moooove, ie jump, for now.
//doing this w. flex, justify-content 

let isSelected = false; //refactor into array w. chosen true/false-selections retrieved from localStorage
console.log(isSelected);

function doSelect() {
    //console.log(_box.style.justifyContent);
    if (isSelected) {
        isSelected = false;
        _box.style.justifyContent = 'flex-start';
    }
    else {
        isSelected = true;
        _box.style.justifyContent = 'flex-end';
    }
}

document.querySelector('#_box').addEventListener('click', doSelect);