const overlay = document.querySelector('.overlay');
const popapWrapper = document.querySelector('.popap-wrapper');

document.getElementById("register-popap").onclick = function() {showForm()};
      function showForm() {
    overlay.classList.add("show");
    popapWrapper.classList.add("show-form");
    popapWrapper.classList.remove("hidden-form");
}

document.getElementById("closeform").onclick = function() {closeForm()};
      function closeForm() {
    overlay.classList.remove("show");
    popapWrapper.classList.remove("show-form");
    popapWrapper.classList.add("hidden-form");
}

window.addEventListener('keydown', function(event) {
    if (event.keyCode === 27) {
            if (overlay.classList.contains('show')) {
                document.querySelector('.overlay').classList.remove("show");
    			document.querySelector('.popap-wrapper').classList.remove("show-form");
    			document.querySelector('.popap-wrapper').classList.add("hidden-form");
        }
    }
})