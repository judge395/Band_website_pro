document.addEventListener("DOMContentLoaded", function () {
    // Get all FAQ questions
    var faqQuestions = document.querySelectorAll(".faq-question");

    // Add click event listener to each question
    faqQuestions.forEach(function (question) {
        question.addEventListener("click", function () {
            // Toggle active class to change button color
            this.classList.toggle("active");

            // Toggle display of answer
            var answer = this.nextElementSibling;
            if (answer.style.display === "block") {
                answer.style.display = "none";
            } else {
                answer.style.display = "block";
            }
        });
    });
});



