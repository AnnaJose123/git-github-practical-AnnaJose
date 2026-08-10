const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("show");

    });

}


const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navLinks) {
            navLinks.classList.remove("show");
        }

    });

});


const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        const nameError = document.getElementById("nameError");
        const emailError = document.getElementById("emailError");
        const subjectError = document.getElementById("subjectError");
        const messageError = document.getElementById("messageError");
        const formSuccess = document.getElementById("formSuccess");

        nameError.textContent = "";
        emailError.textContent = "";
        subjectError.textContent = "";
        messageError.textContent = "";
        formSuccess.textContent = "";

        let isValid = true;

        if (name === "") {

            nameError.textContent =
                "Please enter your name.";

            isValid = false;

        } else if (name.length < 2) {

            nameError.textContent =
                "Name must contain at least 2 characters.";

            isValid = false;

        }


        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === "") {

            emailError.textContent =
                "Please enter your email.";

            isValid = false;

        } else if (!emailPattern.test(email)) {

            emailError.textContent =
                "Please enter a valid email address.";

            isValid = false;

        }


        if (subject === "") {

            subjectError.textContent =
                "Please enter a subject.";

            isValid = false;

        }


        if (message === "") {

            messageError.textContent =
                "Please enter your message.";

            isValid = false;

        } else if (message.length < 10) {

            messageError.textContent =
                "Message must contain at least 10 characters.";

            isValid = false;

        }


        if (isValid) {

            formSuccess.textContent =
                "Thank you! Your message has been validated successfully.";

            contactForm.reset();

        }

    });

}