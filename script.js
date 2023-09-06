const ratings = document.querySelectorAll(".btns span");
const submit = document.querySelector(".submit-btn");
const primary = document.querySelector(".primary");
const secondary = document.querySelector(".secondary");
const form = document.querySelector(".form");
const selection = document.querySelector(".selection");
const muchotexto = document.querySelector(".muchotexto");

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
        switch (parseInt(rate)) {
            case 1:
                muchotexto.textContent = ("Lamentamos que no haya quedado satisfecho con su experiencia. Siéntase libre de ponerse en contacto si hay algo en lo que podamos mejorar.");
                break;
            case 2:
                muchotexto.textContent = ("Agradecemos su retroalimentación. Estamos trabajando continuamente para mejorar nuestros servicios y esperamos poder ofrecerle una experiencia mejor en el futuro.");
                break;
            case 3:
                muchotexto.textContent = ("Nos complace saber que ha tenido una experiencia positiva con nosotros. Valoramos su opinión y la tendremos en cuenta para seguir mejorando.");
                break;
            case 4:
                muchotexto.textContent = ("Estamos encantados de saber que ha tenido una experiencia satisfactoria con nosotros. Su opinión nos motiva a seguir brindando un excelente servicio.");
                break;
            case 5:
                muchotexto.textContent = ("¡Gracias por su calificación perfecta! Estamos encantados de haberle proporcionado una experiencia excepcional. No dude en volver cuando lo necesite.");
                break;
            default:
                muchotexto.textContent = ("error");
        
        }
    }

});

