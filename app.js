function toggleMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const body = document.querySelector('body');
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
    
    if (menuToggle.classList.contains('active')) {
        menuToggle.innerHTML = '&times;'; // Cross icon
    } else {
        menuToggle.innerHTML = '&#9776;'; // Burger icon
    }
}

let navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const nav = document.querySelector('nav');
        const menuToggle = document.querySelector('.menu-toggle');
        const body = document.querySelector('body');
        
        nav.classList.remove('active');
        menuToggle.classList.remove('active');
        body.classList.remove('blur-bg');
        menuToggle.innerHTML = '&#9776;'; 
    });
});

const words = ["Ribka JKT48", "Ribka Budiman", "Rrrribkaaa", "Ribiii", "Dewi Bandung"];
    let wordIndex = 0;
    let charIndex = 0;
    const typingSpeed = 150;
    const erasingSpeed = 100;
    const delayBetweenWords = 2000;
    
    const textElement = document.querySelector('.text');
    
    function type() {
        if (charIndex < words[wordIndex].length) {
            textElement.textContent += words[wordIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(erase, delayBetweenWords);
        }
    }
    
    function erase() {
        if (charIndex > 0) {
            textElement.textContent = words[wordIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingSpeed);
        } else {
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, typingSpeed);
        }
    }
    
    document.addEventListener("DOMContentLoaded", function () {
        setTimeout(type, typingSpeed);
    });

ScrollReveal().reveal('.home-content h1', {
    delay: 400,
    origin: 'top',
    distance: '50px',
    reset: true 
});

ScrollReveal().reveal('.animated-text', {
    delay: 600,
    origin: 'bottom',
    distance: '50px',
    reset: true
});

ScrollReveal().reveal('.home-content p, .about-content p', {
    delay: 900,
    origin: 'left',
    distance: '50px',
    reset: true
});

ScrollReveal().reveal('.social-icons, .gallery-img', {
    delay: 500,
    origin: 'top',
    distance: '50px',
    reset: true
});

ScrollReveal().reveal('.about-content h1, .about-hastag h4', {
    delay: 400,
    origin: 'top',
    distance: '50px',
    reset: true 
});

ScrollReveal().reveal('.thanks h1, .thanks h4', {
    delay: 500,
    origin: 'left',
    distance: '50px',
    reset: true
});

ScrollReveal().reveal('.thanks p, .recap-items h3, .about-img, .card__container', {
    delay: 500,
    origin: 'right',
    distance: '50px',
    reset: true
});


// Ambil elemen modal
var modal = document.getElementById("imageModal");
var modalImg = document.getElementById("modalImage");
var captionText = document.getElementById("caption");
var images = document.querySelectorAll(".gallery-img img"); 

// Loop melalui setiap gambar
images.forEach(function(img) {
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.getAttribute('data-large'); 
        captionText.innerHTML = this.alt; 
    };
});

// Ambil elemen close
var span = document.getElementsByClassName("close")[0];

// Ketika pengguna klik pada <span> (x), tutup modal
span.onclick = function() {
    modal.style.display = "none";
};

// Tutup modal ketika pengguna klik di luar gambar
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

document.querySelectorAll('.animated-number').forEach(element => {
    const updateNumber = () => {
        const target = +element.getAttribute('data-target');
        const current = +element.innerText;
        const increment = target / 500; // kecepatan animasi

        if (current < target) {
            element.innerText = Math.ceil(current + increment);
            setTimeout(updateNumber, 100); //kecepatan frame
        } else {
            element.innerText = target;
        }
    };
    updateNumber();
});

const storyLink = document.getElementById("story-link");
    const audio = document.getElementById("background-music");

    // Hapus mute dan mulai audio ketika link diklik
    storyLink.addEventListener("click", function(event) {
        event.preventDefault(); // Mencegah tautan langsung membuka halaman

        // Hapus mute dari audio dan simpan statusnya di localStorage
        audio.muted = false;
        audio.play();

        // Simpan status audio ke localStorage
        localStorage.setItem("isAudioPlaying", "true");

        // Tunggu sedikit waktu sebelum redirect ke halaman "story.html"
        setTimeout(function() {
            window.location.href = "story.html";
        }, 500);
    });

    // Jika pengguna langsung membuka halaman ini, pastikan audio dimulai
    window.addEventListener('load', function() {
        if (localStorage.getItem("isAudioPlaying") === "true") {
            audio.muted = false;
            audio.play();
        }
    });