let percent = document.querySelectorAll('.progress_per');

percent.forEach((id) => {
    let value= id.innerHTML;
    id.style.width = `${value}%`;
    id.textContent = ' ';
    id.dataset.text = id.dataset.text + '%';
})
document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("toggleSkillsBtn");
    const progressBars = document.getElementById("progressBars");
  
    toggleBtn.addEventListener("click", () => {
      if (progressBars.style.display === "none" || !progressBars.style.display) {
        progressBars.style.display = "block"; // Show progress bars
        toggleBtn.textContent = "Hide Skills"; // Update button text
      } else {
        progressBars.style.display = "none"; // Hide progress bars
        toggleBtn.textContent = "My Skills"; // Update button text
      }
    });
});


