// let menu = document.querySelector(".hamburger")
// let nav = document.querySelector(".nav_container")
// const hamburger = document.querySelector('.hamburger');
// const navmenu = document.querySelector('.navmenu');


// hamburger.addEventListener('click', () => {
    
//     hamburger.classList.toggle('active');
//     navmenu.classList.toggle('active');
// });

// document.querySelectorAll(".nav-link").forEach(n => n.addEventListener('click',() => {
//     hamburger.classList.remove("active");
//     navmenu.classList.remove("active")
// }))

// function gotocontact(){
//     window.location.assign("http://127.0.0.1:5500/contacts.html")
// }


// contact form //


// const form = document.getElementById('contactForm');
//   const errorMessage = document.getElementById('errorMessage');
//   const successMessage = document.getElementById('successMessage');

//   form.addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent page refresh

//     const name = document.getElementById('name').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const message = document.getElementById('message').value.trim();

//     errorMessage.textContent = "";
//     successMessage.textContent = "";
//     errorMessage.style.display = 'none';
//     successMessage.style.display = 'none';

//     if (name === "" || email === "" || message === "") {
//       errorMessage.textContent = "Please fill in all fields.";
//       errorMessage.style.display = 'block';
//       return;
//     }

//     // Basic email validation (you can improve this)
//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//         errorMessage.textContent = "Please enter a valid email address.";
//         errorMessage.style.display = 'block';
//         return;
//     }


//     successMessage.textContent = "Message sent successfully!";
//     successMessage.style.display = 'block';
//     form.reset();
//   });