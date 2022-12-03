let numberOfElements = document.getElementsByName('elements')[0];

let myText = document.getElementsByName('texts')[0];

let button = document.getElementsByName('create')[0];

let type = document.getElementsByName('type')[0];

let result = document.getElementsByClassName('results')[0];

button.addEventListener('click', (e) => { 
    result.innerHTML = '';
    
    if(numberOfElements.value <= 0 ) { 
        numberOfElements.value = 1;
    }

    for(let i = 0 ; i < numberOfElements.value; i++) { 

        let elem = document.createElement(type.value);

        let textNode = document.createTextNode(myText.value);

        elem.appendChild(textNode);

        result.appendChild(elem);

    }
    e.preventDefault()
})
