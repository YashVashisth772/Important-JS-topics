document.querySelector("#grandparent")
    .addEventListener('click', (e) => {
        console.info("GrandParent CLicked")
        // e.stopPropagation();

    }, false);

document.querySelector("#parent")
    .addEventListener('click', (e) => {
        console.info('Parent Clicked');
        // e.stopPropagation();
    }, false);



document.querySelector("#child")
    .addEventListener('click', (e) => {
        console.info('child clicked')
        // e.stopPropagation();

    }, false);