let noSrc = "../assets/sad-spongebob.gif";

function nextPage() {
    window.location.href = "yes.html";
}

function moveButton() {
    let container = document.getElementById("container");
    let image = document.getElementById("gif");
    let button = document.getElementById('noButton');
    let buttonsContainer = document.getElementById('buttons_container');
    let noTitle = document.createElement("h2");
    noTitle.id = "no_header_text"

    if (image.src !== noSrc) {
        image.src = noSrc;
        noTitle.textContent = `Hey… why are you trying to click "No"?`;
        if(!document.getElementById("no_header_text"))
            container.insertBefore(noTitle, buttonsContainer);
    }

    var x = Math.random() * (window.innerWidth - (3 * button.offsetWidth));
    var y = Math.random() * (window.innerHeight - (2 * button.offsetHeight));

    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}