// button 'slider' for settings page... Not really a 'slider', the button just moves when clicked...



let listContainer = document.querySelector('.Catcontainer');

let togglerItems = ['ARTS', 'POLITICS', 'SCIENCE', 'BOOKS', 'WORLD']

let togglersArray = listContainer.children;

for (let i = 0; i < togglerItems.length; i++) {
    //console.log(togglersArray[i].childNodes[3]);
    togglersArray[i].childNodes[1].textContent = togglerItems[i];
    togglersArray[i].childNodes[3].id = `box${i}`;
    togglersArray[i].addEventListener('click', doSelect);
}

function doSelect(e) {
    //console.log(e.target.parentNode.id);
    //console.log(e.target.id);
    let sliderBox = document.querySelector(`#${e.target.parentNode.id}`);
    //console.log(sliderBox);
    let isSelected = false; //will eventually be decided by localStorage setting
    if (e.target.className == '_slider') {
        if (isSelected) {
            isSelected = false;
            sliderBox.style.justifyContent = 'flex-start';
            sliderBox.style.backgroundColor = 'var(--sec-fossillight)';
            //close category selection on localStorage

        }
        else if (!isSelected) {
            isSelected = true;
            sliderBox.style.justifyContent = 'flex-end';
            sliderBox.style.backgroundColor = 'var(--prim-sage)';
            //open category selection on localStorage
        }
    }
};








