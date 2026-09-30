/* =========================================================
   PRASUN ADHIKARI — PORTFOLIO JAVASCRIPT
   ========================================================= */


/* =========================================================
   DARK / LIGHT MODE
   ========================================================= */

const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");

    if (themeToggle) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
}


if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        const isDark =
            document.body.classList.contains("dark-mode");

        localStorage.setItem(
            "portfolio-theme",
            isDark ? "dark" : "light"
        );

        themeToggle.innerHTML = isDark
            ? '<i class="fas fa-sun"></i>'
            : '<i class="fas fa-moon"></i>';

    });

}


/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");


if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        const isOpen =
            navLinks.classList.contains("active");

        menuToggle.innerHTML = isOpen
            ? '<i class="fas fa-xmark"></i>'
            : '<i class="fas fa-bars"></i>';

    });


    /* Close menu when clicking a link */

    const links = navLinks.querySelectorAll("a");

    links.forEach((link) => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuToggle.innerHTML =
                '<i class="fas fa-bars"></i>';

        });

    });

}


/* =========================================================
   TYPING ANIMATION
   ========================================================= */

const typingText = document.getElementById("typingText");

const roles = [
    "Frontend Developer",
    "Web Developer",
    "BCA Graduate",
    "React Developer",
    "AI-Assisted Developer"
];


let roleIndex = 0;
let characterIndex = 0;
let deleting = false;


function typeEffect() {

    if (!typingText) return;

    const currentRole = roles[roleIndex];


    if (!deleting) {

        typingText.textContent =
            currentRole.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;


        if (characterIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1800);

            return;
        }

    } else {

        typingText.textContent =
            currentRole.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;


        if (characterIndex === 0) {

            deleting = false;

            roleIndex =
                (roleIndex + 1) % roles.length;

        }

    }


    const speed = deleting ? 55 : 90;

    setTimeout(typeEffect, speed);
}


typeEffect();


/* =========================================================
   SCROLL REVEAL
   ========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =========================================================
   SCROLL TO TOP
   ========================================================= */

const scrollTopButton =
    document.getElementById("scrollTop");


if (scrollTopButton) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            scrollTopButton.classList.add("visible");

        } else {

            scrollTopButton.classList.remove("visible");

        }

    });


    scrollTopButton.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* =========================================================
   NAVBAR SCROLL EFFECT
   ========================================================= */

const navbar =
    document.getElementById("navbar");


window.addEventListener("scroll", () => {

    if (!navbar) return;


    if (window.scrollY > 30) {

        navbar.style.padding = "12px 0";

    } else {

        navbar.style.padding = "18px 0";

    }

});


/* =========================================================
   CERTIFICATE MODAL
   ========================================================= */

const certificateModal =
    document.getElementById("certificateModal");

const certificateImage =
    document.getElementById("certificateImage");


function openCert(imageName) {

    if (!certificateModal || !certificateImage) {
        return;
    }

    certificateImage.src = imageName;

    certificateModal.classList.add("active");

    document.body.style.overflow = "hidden";
}


function closeCert() {

    if (!certificateModal) {
        return;
    }

    certificateModal.classList.remove("active");

    document.body.style.overflow = "";

}


window.openCert = openCert;
window.closeCert = closeCert;


/* =========================================================
   CLOSE MODAL WITH ESCAPE
   ========================================================= */

document.addEventListener("keydown", (event) => {

    if (
        event.key === "Escape" &&
        certificateModal &&
        certificateModal.classList.contains("active")
    ) {

        closeCert();

    }

});


/* =========================================================
   SUBTLE MOUSE PARALLAX
   ========================================================= */

const heroVisual =
    document.querySelector(".hero-visual");


if (
    heroVisual &&
    window.matchMedia("(pointer: fine)").matches
) {

    heroVisual.addEventListener("mousemove", (event) => {

        const rect =
            heroVisual.getBoundingClientRect();

        const x =
            (event.clientX - rect.left) /
            rect.width -
            0.5;

        const y =
            (event.clientY - rect.top) /
            rect.height -
            0.5;


        const codeWindow =
            heroVisual.querySelector(".code-window");


        if (codeWindow) {

            codeWindow.style.transform =
                `perspective(1000px)
                 rotateY(${x * 8 - 4}deg)
                 rotateX(${y * -6 + 2}deg)
                 translateY(-3px)`;

        }

    });


    heroVisual.addEventListener("mouseleave", () => {

        const codeWindow =
            heroVisual.querySelector(".code-window");


        if (codeWindow) {

            codeWindow.style.transform =
                "perspective(1000px) rotateY(-4deg) rotateX(2deg)";

        }

    });

}


/* =========================================================
   PROJECT CARD TILT
   ========================================================= */

const projectCards =
    document.querySelectorAll(".project-card");


if (window.matchMedia("(pointer: fine)").matches) {

    projectCards.forEach((card) => {

        card.addEventListener("mousemove", (event) => {

            const rect =
                card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;


            const centerX = rect.width / 2;
            const centerY = rect.height / 2;


            const rotateX =
                ((y - centerY) / centerY) * -2;

            const rotateY =
                ((x - centerX) / centerX) * 2;


            card.style.transform =
                `perspective(900px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-10px)`;

        });


        card.addEventListener("mouseleave", () => {

            card.style.transform = "";

        });

    });

}


/* =========================================================
   CURRENT YEAR
   ========================================================= */

const currentYear =
    new Date().getFullYear();


const footerParagraphs =
    document.querySelectorAll(
        "footer .footer-container p"
    );


if (footerParagraphs.length > 1) {

    footerParagraphs[1].textContent =
        `© ${currentYear} Prasun Adhikari`;

}