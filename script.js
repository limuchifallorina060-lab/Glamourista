// Ensure script works correctly once DOM is ready
document.addEventListener("DOMContentLoaded", () => {
    
    const themeToggleBtn = document.getElementById("theme-toggle");
    
    // Check if user previously preferred dark mode
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-theme");
        themeToggleBtn.textContent = "Toggle Light Mode";
    }

    // Interactive Toggle Event Feature
    themeToggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
        
        if (document.body.classList.contains("dark-theme")) {
            localStorage.setItem("theme", "dark");
            themeToggleBtn.textContent = "Toggle Light Mode";
        } else {
            localStorage.setItem("theme", "light");
            themeToggleBtn.textContent = "Toggle Dark Mode";
        }
    });

    // Subtitle Console Confirmation for debugging (Ensuring zero error status)
    console.log("GlowUp script loaded successfully without errors.");
});
