    AOS.init({ duration: 1000, once: true });

    // Typing effect
    const text = "Hello, I'm Souhila BENTALEB";
    let i = 0;
    const speed = 100;
    function typeWriter() {
      if (i < text.length) {
        document.getElementById("typed-text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }
    window.onload = typeWriter;

    // Burger menu
    const burger = document.getElementById('burger');
    const navLinks = document.getElementById('navLinks');
    burger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      burger.classList.toggle('active');
    });

    // Animation cascade + barres progressives
    const skills = document.querySelectorAll('.skill-item');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('reveal');
            const bar = entry.target.querySelector('.progress-bar');
            if (bar) {
              const value = bar.getAttribute('data-progress');
              bar.style.width = value; 
            }
          }, index * 200);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    skills.forEach(skill => {
      observer.observe(skill);
    });

 const form = document.getElementById("contactForm");
  const statusMsg = document.getElementById("statusMsg");

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // empêcher la redirection
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        statusMsg.innerText = "✅ Message sent successfully!";
        statusMsg.style.color = "lightgreen";
        form.reset();
      } else {
        statusMsg.innerText = "❌ Oops, something went wrong.";
        statusMsg.style.color = "red";
      }
    } catch (error) {
      statusMsg.innerText = "⚠️ Network error. Please try again.";
      statusMsg.style.color = "orange";
    }
  });



