const input = document.querySelector('#input')

function addingEventListener() {
    input.addEventListener('click', (e) => {
        e.preventDefault(); 
        alert('I was clicked!');
    });
}

addingEventListener(); 
