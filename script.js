const dark = document.getElementById("dark-mode")

function darkmode () {
    const isItDark = document.body.classList.contains('dark-mode');

    if (!isItDark) {
        return document.body.classList.add('dark-mode');
    } document.body.classList.remove('dark-mode');
};



dark.addEventListener('click',darkmode)