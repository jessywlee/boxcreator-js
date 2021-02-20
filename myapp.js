let elements = document.getElementsByName('cssProperty');
/*  To access all the selects (background, width, height) with name attribute 'cssProperty'. It returns
an array with each select. */ 

let div = document.getElementById('modify');


function set () {

    for (let index = 0; index < elements.length; index++) {

        let cssProperty = elements[index].getAttribute('id');
        /*To access each id attribute assigned to each selector(background, width, height)and save it to variable cssProperty.*/ 
        let cssValue = elements[index].value;
        /*To access each value attribute assigned to each option*/
       
        div.style[cssProperty] = cssValue;
        /*To assign the selected cssValue to the cssProperty upon click set. */
        }
}

document.getElementById('set').addEventListener('click', set);
/* 1. This is to run the function set once the set button is clicked. */

