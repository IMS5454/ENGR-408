function redirectTo(page) {window.location.href = page;}
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("button1").addEventListener("click", () => redirectTo("test.html"));
    document.getElementById("button2").addEventListener("click", () => redirectTo("test.html"));
    document.getElementById("button3").addEventListener("click", () => redirectTo("test.html"));
    document.getElementById("button4").addEventListener("click", () => redirectTo("test.html"));
});
