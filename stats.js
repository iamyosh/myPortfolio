document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".stat-number");
  let started = false;

  const animateCounters = () => {
    counters.forEach(counter => {
      const target = +counter.getAttribute("data-target");
      let count = 0;
      const update = () => {
        const increment = Math.ceil(target / 100); // speed
        if (count < target) {
          count += increment;
          counter.innerText = count + counter.innerText.replace(/[0-9]/g, "");
          setTimeout(update, 30);
        } else {
          counter.innerText = target + counter.innerText.replace(/[0-9]/g, "");
        }
      };
      update();
    });
  };

  // Trigger only when section comes into view
  const statsSection = document.querySelector("#stats");
  window.addEventListener("scroll", () => {
    const sectionTop = statsSection.offsetTop - window.innerHeight + 100;
    if (!started && window.scrollY > sectionTop) {
      animateCounters();
      started = true;
    }
  });
});
