/* =========================================
   IQRA TUITION CENTRE
   Main Website JavaScript
========================================= */


/* =========================================
   MOBILE MENU
========================================= */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", () => {

        const isOpen = mainNav.classList.toggle("open");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

    });


    // Close mobile menu when a navigation link is clicked

    const navLinks = mainNav.querySelectorAll("a");

    navLinks.forEach((link) => {

        link.addEventListener("click", () => {

            mainNav.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections = document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll(".nav-link");

function updateActiveNavigation() {

    const scrollPosition = window.scrollY + 150;

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });


    navigationLinks.forEach((link) => {

        link.classList.remove("active");

        const href = link.getAttribute("href");

        if (href === `#${currentSection}`) {
            link.classList.add("active");
        }

    });

}

window.addEventListener("scroll", updateActiveNavigation);

updateActiveNavigation();


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

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


/* =========================================
   ADMISSION FORM → WHATSAPP
========================================= */

const admissionForm = document.getElementById("admissionForm");

if (admissionForm) {

    admissionForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const studentName =
            document.getElementById("studentName").value.trim();

        const parentName =
            document.getElementById("parentName").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const classGrade =
            document.getElementById("classGrade").value;

        const gender =
            document.getElementById("gender").value;

        const timing =
            document.getElementById("timing").value || "Not specified";

        const course =
            document.getElementById("course").value;

        const message =
            document.getElementById("message").value.trim() ||
            "No additional message";


        const whatsappMessage = `Hello IQRA Tuition Centre,

I would like to make an admission enquiry.

*Student Details*
Student Name: ${studentName}
Parent / Guardian: ${parentName}
Phone / WhatsApp: ${phone}
Class / Grade: ${classGrade}
Gender: ${gender}

*Programme Details*
Course / Programme: ${course}
Preferred Timing: ${timing}

*Message*
${message}

Thank you.`;


        const encodedMessage =
            encodeURIComponent(whatsappMessage);


        const whatsappURL =
            `https://wa.me/919087476503?text=${encodedMessage}`;


        window.open(
            whatsappURL,
            "_blank",
            "noopener,noreferrer"
        );

    });

}


/* =========================================
   CURRENT YEAR
========================================= */

const currentYearElement =
    document.getElementById("currentYear");

if (currentYearElement) {

    currentYearElement.textContent =
        new Date().getFullYear();

}


/* =========================================
   HEADER SHADOW ON SCROLL
========================================= */

const header =
    document.querySelector(".site-header");

function updateHeader() {

    if (!header) {
        return;
    }

    if (window.scrollY > 30) {

        header.style.boxShadow =
            "0 8px 30px rgba(16, 32, 28, 0.08)";

    } else {

        header.style.boxShadow = "none";

    }

}

window.addEventListener("scroll", updateHeader);

updateHeader();


/* =========================================
   IMAGE FALLBACK
========================================= */

const images =
    document.querySelectorAll("img");

images.forEach((image) => {

    image.addEventListener("error", () => {

        image.style.display = "none";

        const parent =
            image.closest(
                ".gallery-item, .about-image, .hero-photo, .educator-photo"
            );

        if (parent) {

            parent.classList.add("image-missing");

            if (!parent.querySelector(".image-fallback")) {

                const fallback =
                    document.createElement("div");

                fallback.className = "image-fallback";

                fallback.innerHTML = `
                    <span>IQRA</span>
                    <strong>Photo coming soon</strong>
                `;

                parent.appendChild(fallback);

            }

        }

    });

});


/* =========================================
   PREVENT EMPTY HASH JUMP
========================================= */

document.querySelectorAll('a[href="#"]').forEach((link) => {

    link.addEventListener("click", (event) => {

        event.preventDefault();

    });

});