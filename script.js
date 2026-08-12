// MOBILE MENU

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("open");
});


// CLOSE MOBILE MENU AFTER CLICKING A LINK

document.querySelectorAll("nav a").forEach(link => {

  link.addEventListener("click", () => {
    navbar.classList.remove("open");
  });

});


// WHATSAPP ENQUIRY FORM

document
  .getElementById("enquiryForm")
  .addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
      document.getElementById("name").value.trim();

    const age =
      document.getElementById("age").value;

    const interest =
      document.getElementById("interest").value;


    // Check age

    if (age < 6 || age > 14) {

      alert(
        "NAJAZA Coding is currently for children aged 6–14."
      );

      return;
    }


    // WhatsApp message

    const message =

`Hello NAJAZA Coding! 👋

My name is ${name}.

I am enquiring about coding classes for a ${age}-year-old child.

I am interested in: ${interest}.

Please could you send me more information about availability and registration?`;


    /*
      IMPORTANT:

      Replace the number below with YOUR
      NAJAZA Coding WhatsApp number.

      Use the international format.

      Example:

      Nigeria:
      2348012345678

      UK:
      447123456789

      Do NOT include +, spaces or brackets.
    */

    const whatsappNumber = "447407810467";


    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );

  });