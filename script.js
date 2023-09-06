const ratings = document.querySelectorAll(".btns span");
const submit = document.querySelector(".submit-btn");
const primary = document.querySelector(".primary");
const secondary = document.querySelector(".secondary");
const form = document.querySelector(".form");
const selection = document.querySelector(".selection");

secondary.style.display = "none";



ratings.forEach(rating => {
    rating.classList.add("hover");
    
    rating.addEventListener("click", (e) => {
        const active = document.querySelector(".checked");
        
        if (active) {
            active.classList.remove("checked");
        }
        rating.classList.add("checked");
        rate = e.target.innerText;
    })
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (rate) {
        primary.style.display = "none";
        secondary.style.display = "block";
        selection.textContent = (`Seleccionaste ${rate} de 5`);
    }

});

