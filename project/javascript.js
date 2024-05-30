button.addEventListener("click", () => {
    const Username = document.getElementById("Username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const button = document.getElementById("button").value;


    const password1 = document.getElementById("password1").value;
    const Repassword1 = document.getElementById("Repassword1").value;
    const Email1 = document.getElementById("Email1").value;
    const Username1 = document.getElementById("Username1").value;

    if (Username === Username1 && email === Email1 && password=== password1){
        window.location.href("http://127.0.0.1:3000/index.html")
    }
    alert("dawdawd")
})
// Button1.addEventListener("click", () => {
//     if (password == Repassword1){
//         console.log("good");
//     }
//     else{
//         alert("passwords do not match")
//     }
// })

