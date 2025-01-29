let userName = localStorage.getItem("userName");

if (!userName) {
    userName = prompt("Enter your name");
    if (userName) {
        localStorage.setItem("userName", userName);
    }
}

if (userName) {
    window.location.href = "index1.html";
}