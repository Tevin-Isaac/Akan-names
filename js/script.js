function submit() {
    const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const maleNames = ["kwasi", "Kwado", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
    const femaleNames = ["Akosua", "Adwoa", "Abenna", "Akua", "Yaa", "Afua", "Ama"]

    const month = parseInt(document.getElementById("month").value)
    const name = (document.getElementById("name").value)
    const year = parseInt(document.getElementById("year").value)
    const day = parseInt(document.getElementById("day").value)
    const dateOfBirth = new Date(year + "." + month + "." + day)
    const answer = dateOfBirth.getDay()
    const output = document.getElementById("output")
    const male = document.getElementById("male")
    const female = document.getElementById("female")


    if ((year < 0) || (year > 2021)) {
        output.style.background = "blue"
        output.style.color = "red"
        output.innerHTML = "Hello " + " " + name + " " + " please enter a valid year! "
    } else if ((month < 1) || (month > 12)) {
        output.style.background = "blue"
        output.style.color = "red"
        output.innerHTML = "Hello" + " " + name + " " + " please enter a valid month! "
    } else if (day < 0 || day > 31) {
        output.style.background = "blue"
        output.style.color = "red"
        output.innerHTML = "Hello" + " " + name + " " + " please enter a valid day! "
    }

    if (female.checked && year > 1969 && year < 2020 && month > 0 && month < 12 && day > 0 && day < 31) {
        output.style.background = "yellow"
        output.innerHTML = "Hello" + " " + name + ",   " + "you were born on a" + " " + daysOfTheWeek[answer] + "." + " " + "Suprise!!, your Akan name is:" + femaleNames[answer]

    } else if (male.checked && year > 0 && year < 2020 && month > 0 && month < 12 && day > 0 && day < 31) {
        output.style.background = "green"
        output.innerHTML = "Hello" + " " + name + ",   " + "you were born on a" + " " + daysOfTheWeek[answer] + "." + " " + "Suprise!!, your Akan name is:" + maleNames[answer]
    } else if (female.checked && year > 0 && year < 2020 && month > 0 && month < 12 && day > 0 && day < 31) {
        output.style.background = "yellow"
        output.innerHTML = "Hello" + " " + name + ",   " + "you were born on a" + " " + daysOfTheWeek[answer] + "." + " " + "Suprise!!, your Akan name is:" + femaleNames[answer]
    }

}

document.querySelector("#details").addEventListener("submit", function(event) {
    event.preventDefault();
    submit();


})

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});