document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm"); // Replace with actual form ID
    const inputField = document.getElementById("inputField"); // Replace with actual input field ID
    const errorMessage = document.getElementById("errorMessage");
    const successMessage = document.getElementById("successMessage");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission
        
        const inputValue = inputField.value.trim();
        const alphanumericRegex = /^[a-zA-Z0-9]+$/; // Alphanumeric pattern
        
        if (alphanumericRegex.test(inputValue)) {
            // Valid input: show success message and simulate submission
            errorMessage.textContent = "";
            successMessage.textContent = "Form submitted successfully!";
        } else {
            // Invalid input: show error message and prevent submission
            successMessage.textContent = "";
            errorMessage.textContent = "Error: Input must be alphanumeric only.";
        }
    });
});