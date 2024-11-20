// Function to handle button click and redirect
function redirectTo(page) {
    window.location.href = page; // Redirect to the specified page
}

// Add event listeners to the buttons after the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("button1").addEventListener("click", () => redirectTo("test.html"));
    document.getElementById("button2").addEventListener("click", () => redirectTo("test.html"));
    document.getElementById("button3").addEventListener("click", () => redirectTo("test.html"));
    document.getElementById("button4").addEventListener("click", () => redirectTo("test.html"));
});
