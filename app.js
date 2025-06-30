gsap.to(".box1, .box2, .box3", {
    y: 60,
    duration: 4,
    repeat: -1,
    yoyo: true,

})

document.addEventListener("DOMContentLoaded", () => {
    // FORGET PASSWORD PAGE — Save new password
    const passwordForm = document.getElementById("passwordForm");

    if (passwordForm) {
        passwordForm.addEventListener("submit", function (e) {
            e.preventDefault();   //Prevents page refresh

            const newPassword = document.getElementById("newPassword").value.trim();
            const confirmPassword = document.getElementById("confirmPassword").value.trim();

            if (!newPassword || !confirmPassword) {
                alert("Please fill in both fields.");
            } else if (newPassword !== confirmPassword) {
                alert("Passwords do not match.");
            } else {
                // Storing new password and default email in localStorage
                localStorage.setItem("userEmail", "user@example.com"); // Can customize this
                localStorage.setItem("userPassword", newPassword);

                alert("Password successfully changed! Redirecting to login...");
                window.location.href = "index.html";
            }
        });
    }

    // LOGIN PAGE — Check credentials before redirecting
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const enteredEmail = document.getElementById("email").value.trim();
            const enteredPassword = document.getElementById("loginPassword").value.trim();

            const storedEmail = localStorage.getItem("userEmail");
            const storedPassword = localStorage.getItem("userPassword");

            if (!enteredEmail || !enteredPassword) {
                alert("Please fill in both email and password.");
                return;
            }

            if (enteredEmail === storedEmail && enteredPassword === storedPassword) {
                window.location.href = "search.html";
            } else {
                alert("Invalid email or password. Please try again.");
            }
        });
    }
});

//when wants to create new account 

const signupForm = document.getElementById("signupForm");

if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const enteredName = document.getElementById("name").value.trim();
        const enteredSignupEmail = document.getElementById("emailid").value.trim();
        const enteredSignupPassword = document.getElementById("signupPassword").value.trim();

        if (!enteredName || !enteredSignupEmail || !enteredSignupPassword) {
            alert("Please fill in all fields to continue");
            return;
        }
        else {
            localStorage.setItem("user", enteredName);
            localStorage.setItem("userEmail", enteredSignupEmail);
            localStorage.setItem("userSignUpPassword", enteredSignupPassword);
            window.location.href = "search.html";
        }

    });
}