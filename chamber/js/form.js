const dateVisitField = document.getElementById("form-visit-date");
let visitedFull = new Date(currentDateAndTime);
let visited = `${visitedFull.getMonth() + 1}/${visitedFull.getDate()}/${currentYear} ${visitedFull.getHours()}:${visitedFull.getMinutes()}:${visitedFull.getSeconds()}`;

dateVisitField.setAttribute("value", visited);

const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", () => {
    window.location.href = "thankyou.html";
})