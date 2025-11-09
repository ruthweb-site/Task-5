function showForm(formId) {
        document.querySelectorAll(".form-box").forEach(form => form.classList.remove("active"));
        document.getElementById(formId).classList.add("active");
    }

    // Loader animation and redirect after registration
    window.addEventListener("load", () => {
        const loader = document.getElementById("loader");
        if (loader.style.display === "flex") {
            setTimeout(() => {
                loader.style.opacity = "0";
                setTimeout(() => {
                    loader.style.display = "none";
                    window.location.href = "index.html"; // redirect after loader
                }, 500);
            }, 3000);
        }
    });