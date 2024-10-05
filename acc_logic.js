// Accordion Functionality
const acc = document.getElementsByClassName("accordion");
for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        const panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none"; // Close the panel
        } else {
            panel.style.display = "block"; // Open the panel
        }
    });
}