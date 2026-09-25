/* =========================================
   IQRA INCUBATION CENTRE
   WEBSITE JAVASCRIPT
========================================= */


/* =========================================
   FOOTER YEAR
========================================= */

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


/* =========================================
   MOBILE MENU
========================================= */

const menuButton = document.getElementById("menuBtn");
const navigation = document.getElementById("nav");

if (menuButton && navigation) {

  menuButton.addEventListener("click", function () {
    navigation.classList.toggle("open");
  });

  document.querySelectorAll("#nav a").forEach(function (link) {

    link.addEventListener("click", function () {
      navigation.classList.remove("open");
    });

  });
}


/* =========================================
   ADMISSION FORM → WHATSAPP
========================================= */

const admissionForm = document.getElementById("admissionForm");

if (admissionForm) {

  admissionForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const studentName =
      document.getElementById("studentName")?.value || "";

    const parentName =
      document.getElementById("parentName")?.value || "";

    const phone =
      document.getElementById("phoneInput")?.value || "";

    const classGrade =
      document.getElementById("classGrade")?.value || "";

    const gender =
      document.getElementById("gender")?.value || "";

    const timing =
      document.getElementById("timing")?.value ||
      "Not specified";

    const course =
      document.getElementById("course")?.value || "";

    const message =
      document.getElementById("message")?.value ||
      "No additional message";


    const whatsappMessage =
`IQRA Incubation Centre - Admission Enquiry

Student Name: ${studentName}
Parent / Guardian: ${parentName}
Phone / WhatsApp: ${phone}
Class / Grade: ${classGrade}
Gender: ${gender}
Preferred Timing: ${timing}
Course / Programme: ${course}
Message: ${message}`;


    const whatsappURL =
      "https://wa.me/919087476503?text=" +
      encodeURIComponent(whatsappMessage);


    window.open(
      whatsappURL,
      "_blank",
      "noopener,noreferrer"
    );

  });
}


/* =========================================
   GALLERY SLIDER
========================================= */

const gallerySlider =
  document.querySelector(".gallery-slider");

const slides =
  document.querySelectorAll(".gallery-slide");

const dotsContainer =
  document.querySelector(".gallery-dots");

const previousButton =
  document.querySelector(".gallery-prev");

const nextButton =
  document.querySelector(".gallery-next");


let currentSlide = 0;
let autoSlide = null;


if (
  gallerySlider &&
  slides.length &&
  dotsContainer
) {


  /* =========================================
     CREATE DOTS
  ========================================= */

  slides.forEach(function (slide, index) {

    const dot =
      document.createElement("button");

    dot.type = "button";

    dot.className =
      "gallery-dot" +
      (index === 0 ? " active" : "");

    dot.setAttribute(
      "aria-label",
      "Go to gallery image " + (index + 1)
    );


    dot.addEventListener(
      "click",
      function () {

        showSlide(index);

        restartAutoSlide();

      }
    );


    dotsContainer.appendChild(dot);

  });


  const dots =
    document.querySelectorAll(".gallery-dot");


  /* =========================================
     SHOW SLIDE
  ========================================= */

  function showSlide(index) {

    if (index >= slides.length) {
      index = 0;
    }

    if (index < 0) {
      index = slides.length - 1;
    }


    slides.forEach(function (slide) {

      slide.classList.remove("active");

    });


    dots.forEach(function (dot) {

      dot.classList.remove("active");

    });


    slides[index].classList.add("active");

    dots[index].classList.add("active");

    currentSlide = index;

  }


  /* =========================================
     NEXT / PREVIOUS
  ========================================= */

  function nextSlide() {

    showSlide(currentSlide + 1);

  }


  function previousSlide() {

    showSlide(currentSlide - 1);

  }


  /* =========================================
     AUTOMATIC SLIDER
  ========================================= */

  function startAutoSlide() {

    stopAutoSlide();

    autoSlide = setInterval(
      nextSlide,
      4500
    );

  }


  function stopAutoSlide() {

    if (autoSlide) {

      clearInterval(autoSlide);

      autoSlide = null;

    }

  }


  function restartAutoSlide() {

    stopAutoSlide();

    startAutoSlide();

  }


  /* =========================================
     BUTTONS
  ========================================= */

  if (nextButton) {

    nextButton.addEventListener(
      "click",
      function () {

        nextSlide();

        restartAutoSlide();

      }
    );

  }


  if (previousButton) {

    previousButton.addEventListener(
      "click",
      function () {

        previousSlide();

        restartAutoSlide();

      }
    );

  }


  /* =========================================
     PAUSE ON DESKTOP HOVER
  ========================================= */

  gallerySlider.addEventListener(
    "mouseenter",
    stopAutoSlide
  );


  gallerySlider.addEventListener(
    "mouseleave",
    startAutoSlide
  );


  /* =========================================
     MOBILE SWIPE
  ========================================= */

  let touchStartX = 0;
  let touchEndX = 0;


  gallerySlider.addEventListener(
    "touchstart",
    function (event) {

      touchStartX =
        event.changedTouches[0].screenX;

      stopAutoSlide();

    },
    {
      passive: true
    }
  );


  gallerySlider.addEventListener(
    "touchend",
    function (event) {

      touchEndX =
        event.changedTouches[0].screenX;


      const swipeDistance =
        touchEndX - touchStartX;


      if (Math.abs(swipeDistance) > 50) {

        if (swipeDistance < 0) {

          nextSlide();

        } else {

          previousSlide();

        }

      }


      startAutoSlide();

    },
    {
      passive: true
    }
  );


  /* =========================================
     START SLIDER
  ========================================= */

  showSlide(0);

  startAutoSlide();

}/* =========================================
   IQRA INCUBATION CENTRE
   WEBSITE JAVASCRIPT
========================================= */


/* =========================================
   FOOTER YEAR
========================================= */

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


/* =========================================
   MOBILE MENU
========================================= */

const menuButton = document.getElementById("menuBtn");
const navigation = document.getElementById("nav");

if (menuButton && navigation) {

  menuButton.addEventListener("click", function () {
    navigation.classList.toggle("open");
  });

  document.querySelectorAll("#nav a").forEach(function (link) {

    link.addEventListener("click", function () {
      navigation.classList.remove("open");
    });

  });
}


/* =========================================
   ADMISSION FORM → WHATSAPP
========================================= */

const admissionForm = document.getElementById("admissionForm");

if (admissionForm) {

  admissionForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const studentName =
      document.getElementById("studentName")?.value || "";

    const parentName =
      document.getElementById("parentName")?.value || "";

    const phone =
      document.getElementById("phoneInput")?.value || "";

    const classGrade =
      document.getElementById("classGrade")?.value || "";

    const gender =
      document.getElementById("gender")?.value || "";

    const timing =
      document.getElementById("timing")?.value ||
      "Not specified";

    const course =
      document.getElementById("course")?.value || "";

    const message =
      document.getElementById("message")?.value ||
      "No additional message";


    const whatsappMessage =
`IQRA Incubation Centre - Admission Enquiry

Student Name: ${studentName}
Parent / Guardian: ${parentName}
Phone / WhatsApp: ${phone}
Class / Grade: ${classGrade}
Gender: ${gender}
Preferred Timing: ${timing}
Course / Programme: ${course}
Message: ${message}`;


    const whatsappURL =
      "https://wa.me/919087476503?text=" +
      encodeURIComponent(whatsappMessage);


    window.open(
      whatsappURL,
      "_blank",
      "noopener,noreferrer"
    );

  });
}


/* =========================================
   GALLERY SLIDER
========================================= */

const gallerySlider =
  document.querySelector(".gallery-slider");

const slides =
  document.querySelectorAll(".gallery-slide");

const dotsContainer =
  document.querySelector(".gallery-dots");

const previousButton =
  document.querySelector(".gallery-prev");

const nextButton =
  document.querySelector(".gallery-next");


let currentSlide = 0;
let autoSlide = null;


if (
  gallerySlider &&
  slides.length &&
  dotsContainer
) {


  /* =========================================
     CREATE DOTS
  ========================================= */

  slides.forEach(function (slide, index) {

    const dot =
      document.createElement("button");

    dot.type = "button";

    dot.className =
      "gallery-dot" +
      (index === 0 ? " active" : "");

    dot.setAttribute(
      "aria-label",
      "Go to gallery image " + (index + 1)
    );


    dot.addEventListener(
      "click",
      function () {

        showSlide(index);

        restartAutoSlide();

      }
    );


    dotsContainer.appendChild(dot);

  });


  const dots =
    document.querySelectorAll(".gallery-dot");


  /* =========================================
     SHOW SLIDE
  ========================================= */

  function showSlide(index) {

    if (index >= slides.length) {
      index = 0;
    }

    if (index < 0) {
      index = slides.length - 1;
    }


    slides.forEach(function (slide) {

      slide.classList.remove("active");

    });


    dots.forEach(function (dot) {

      dot.classList.remove("active");

    });


    slides[index].classList.add("active");

    dots[index].classList.add("active");

    currentSlide = index;

  }


  /* =========================================
     NEXT / PREVIOUS
  ========================================= */

  function nextSlide() {

    showSlide(currentSlide + 1);

  }


  function previousSlide() {

    showSlide(currentSlide - 1);

  }


  /* =========================================
     AUTOMATIC SLIDER
  ========================================= */

  function startAutoSlide() {

    stopAutoSlide();

    autoSlide = setInterval(
      nextSlide,
      4500
    );

  }


  function stopAutoSlide() {

    if (autoSlide) {

      clearInterval(autoSlide);

      autoSlide = null;

    }

  }


  function restartAutoSlide() {

    stopAutoSlide();

    startAutoSlide();

  }


  /* =========================================
     BUTTONS
  ========================================= */

  if (nextButton) {

    nextButton.addEventListener(
      "click",
      function () {

        nextSlide();

        restartAutoSlide();

      }
    );

  }


  if (previousButton) {

    previousButton.addEventListener(
      "click",
      function () {

        previousSlide();

        restartAutoSlide();

      }
    );

  }


  /* =========================================
     PAUSE ON DESKTOP HOVER
  ========================================= */

  gallerySlider.addEventListener(
    "mouseenter",
    stopAutoSlide
  );


  gallerySlider.addEventListener(
    "mouseleave",
    startAutoSlide
  );


  /* =========================================
     MOBILE SWIPE
  ========================================= */

  let touchStartX = 0;
  let touchEndX = 0;


  gallerySlider.addEventListener(
    "touchstart",
    function (event) {

      touchStartX =
        event.changedTouches[0].screenX;

      stopAutoSlide();

    },
    {
      passive: true
    }
  );


  gallerySlider.addEventListener(
    "touchend",
    function (event) {

      touchEndX =
        event.changedTouches[0].screenX;


      const swipeDistance =
        touchEndX - touchStartX;


      if (Math.abs(swipeDistance) > 50) {

        if (swipeDistance < 0) {

          nextSlide();

        } else {

          previousSlide();

        }

      }


      startAutoSlide();

    },
    {
      passive: true
    }
  );


  /* =========================================
     START SLIDER
  ========================================= */

  showSlide(0);

  startAutoSlide();

}