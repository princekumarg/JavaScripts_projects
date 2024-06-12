let button = document.querySelectorAll('.button');
let body = document.querySelector('body');
button.forEach(function (button) {
    button.addEventListener('click', function (e) {
        // if (e.target.id === 'grey') {
        //     body.style.backgroundColor = e.target.id;
        // }
        // if (e.target.id === 'white') {
        //     body.style.backgroundColor = e.target.id;
        // }
        // if (e.target.id === 'blue') {
        //     body.style.backgroundColor = e.target.id;
        // }
        // if (e.target.id === 'yellow') {
        //     body.style.backgroundColor = e.target.id;
        // }
        switch (e.target.id) {
            case 'grey':
                body.style.backgroundColor = e.target.id;
                break;
            case 'white':
                body.style.backgroundColor = e.target.id;
                break;
            case 'blue':
                body.style.backgroundColor = e.target.id;
                break;
            case 'yellow':
                body.style.backgroundColor = e.target.id;
                break;
        }
    })
})